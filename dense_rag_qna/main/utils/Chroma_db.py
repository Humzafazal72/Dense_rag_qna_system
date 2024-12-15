from langchain.document_loaders import PyPDFLoader
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter

def create_db(doc_path, cache_path, doc_name, persistent_dir):
    embedding=HuggingFaceEmbeddings(model_name="sentence-transformers/all-mpnet-base-v2",cache_folder=cache_path)
    splitter = RecursiveCharacterTextSplitter(chunk_size = 1000, chunk_overlap=200)
    
    loader = PyPDFLoader(doc_path)
    documents = loader.load()

    split_documents = splitter.split_documents(documents)

    Chroma.from_documents(split_documents[0:35],embedding = embedding, persist_directory=persistent_dir,collection_name=doc_name)

def retrieve_docs(doc_name, query, cache_path, persistent_dir):
    embedding=HuggingFaceEmbeddings(model_name="sentence-transformers/all-mpnet-base-v2",cache_folder=cache_path)
    
    vectorstore = Chroma(
        persist_directory=persistent_dir,
        embedding_function=embedding,
        collection_name=doc_name
    )

    return vectorstore.similarity_search(query=query,k=4)