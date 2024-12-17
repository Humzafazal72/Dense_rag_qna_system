from langchain_community.embeddings import HuggingFaceEmbeddings
embedding=HuggingFaceEmbeddings(model_name="sentence-transformers/all-mpnet-base-v2",cache_folder='./cache')