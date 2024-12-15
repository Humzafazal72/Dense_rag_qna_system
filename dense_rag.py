import os
from dotenv import load_dotenv
from langchain_groq import ChatGroq
from langchain.document_loaders import PyPDFLoader
from langchain_community.vectorstores import Chroma
from langchain_core.prompts import ChatPromptTemplate
from langchain.schema import RunnableLambda,RunnableSequence
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_core.output_parsers.string import StrOutputParser
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain.schema.runnable import RunnableLambda,RunnableSequence

load_dotenv()

os.environ['GROQ_API_KEY'] = os.getenv('GROQ_API_KEY')
os.environ['LANGCHAIN_API_KEY'] = os.getenv('LANGCHAIN_API_KEY')
os.environ['LANGCHAIN_TRACING_V2'] = os.getenv('LANGCHAIN_TRACING_V2')
os.environ['LANGCHAIN_ENDPOINT'] = os.getenv('LANGCHAIN_ENDPOINT')
os.environ['LANGCHAIN_PROJECT'] = os.getenv('LANGCHAIN_PROJECT')

embedding=HuggingFaceEmbeddings(model_name="sentence-transformers/all-mpnet-base-v2",cache_folder="../cache")
splitter = RecursiveCharacterTextSplitter(chunk_size = 1000, chunk_overlap=200)
db = Chroma()

prompt_generation = ChatPromptTemplate.from_template("""You are a precise and helpful AI assistant specializing in extracting and synthesizing relevant information from given context.

Instructions:
1. Carefully read the provided context.
2. Answer the question directly and comprehensively using ONLY the information in the context.
3. If the context does not contain sufficient information to fully answer the question, clearly state: "I cannot find a complete answer in the provided context."
4. Maintain the tone and level of detail present in the source context.
5. If multiple relevant passages exist, synthesize information from across the context.

Question:
{question}

Context:
{context}

Response Guidelines:
- Be concise and clear
- Do not invent or assume any information not present in the context""")

prompt_q_optimization = """You are a Query Optimizer designed to enhance user queries for use in a Retrieval-Augmented Generation (RAG) system. 
Your task is to transform user queries into optimized versions that retrieve the most relevant documents when processed with sentence transformers. 
Follow these rules:
1. Only generate the optimized query. Do not include supporting text, explanations, or additional comments.
2. Ensure the optimized query is concise, semantically rich, and tailored for high precision and relevance.

Input: {input_}"""

prompt_q_optimization_template = ChatPromptTemplate.from_messages(
    [
        ("system", prompt_q_optimization),

        ("human", "What is the weather in Paris today?"),
        ("ai", "weather Paris today"),
        
        ("human", "Show me recent advancements in artificial intelligence research."),
        ("ai", "recent advancements artificial intelligence research"),
        
        ("human", "Explain the use of transformers in deep learning."),
        ("ai", "transformers deep learning applications uses"),
        
        ("human", "Find me details about the Eiffel Tower."),
        ("ai", "Eiffel Tower details information"),
        
        ("human", "{input_}")
    ]
)

llm_light = ChatGroq(model_name='llama3-8b-8192',
                    temperature=0,
                    streaming=True)

llm_dense = ChatGroq(model_name='llama3-70b-8192',
                    temperature=1,
                    streaming=True)

chain_optimization = prompt_q_optimization_template | llm_light | StrOutputParser()

loader = PyPDFLoader('portrait_to_pencil_sketch_draft_15.pdf')
documents = loader.load()

split_documents = splitter.split_documents(documents)

chroma_db = db.from_documents(split_documents[0:35],embedding = embedding)
retriever = chroma_db.as_retriever()

optimization_chain = prompt_q_optimization_template | llm_light | StrOutputParser()
generation_chain = prompt_generation | llm_dense 

optimized_query = optimization_chain.invoke({'input_':''})

context_docs = retriever.invoke('')

print(prompt_generation.invoke({'question':'','context':context_docs}))



