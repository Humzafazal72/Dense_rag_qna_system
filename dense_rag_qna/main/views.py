import os
import json
import pickle
from pathlib import Path
from dotenv import load_dotenv
from django.http import JsonResponse
from django.views.decorators import csrf_exempt
from utils import create_db,retrieve_docs,optimization_chain,generation_chain

load_dotenv()

os.environ['GROQ_API_KEY'] = os.getenv('GROQ_API_KEY')
os.environ['LANGCHAIN_API_KEY'] = os.getenv('LANGCHAIN_API_KEY')
os.environ['LANGCHAIN_TRACING_V2'] = os.getenv('LANGCHAIN_TRACING_V2')
os.environ['LANGCHAIN_ENDPOINT'] = os.getenv('LANGCHAIN_ENDPOINT')
os.environ['LANGCHAIN_PROJECT'] = os.getenv('LANGCHAIN_PROJECT')

CURR_DIR = Path(__file__).resolve().parent
CACHE_PATH = os.path.join(Path(__file__).resolve().parent,'cache')
PERSISTENT_DIR = os.path.join(Path(__file__).resolve().parent,'Vector_DB')
CHAT_HISTORY_DIR = os.path.join(Path(__file__).resolve().parent,'chat_history')

@csrf_exempt
def document_upload(request):
    if request.method == 'POST':
        document = request.FILES.get("document")
        doc_name = document.name

        doc_path = os.path.join(CURR_DIR,'Documents',doc_name)

        if not document:
            return JsonResponse({"error": "Document not uploaded."}, status=400)

        with open(doc_path, "wb+") as destination:
            for chunk in document.chunks():
                destination.write(chunk)
        
        create_db(doc_path,CACHE_PATH,doc_name,PERSISTENT_DIR)

        return JsonResponse({'success':'Vector Database created successfully'},status=200)
    else:
        return JsonResponse({"error": "Invalid HTTP method."}, status=405)

@csrf_exempt
def retrieve_information(request,doc_name):
    if request.method == 'POST':

        if os.path.exists(f"{CHAT_HISTORY_DIR}/{doc_name.split('.')[0]}.pkl"):
            with open(f"{CHAT_HISTORY_DIR}/{doc_name.split('.')[0]}.pkl",'rb') as file:
                chat_history = pickle.load(file)
        else:
            chat_history = []

        data = json.loads(request.body)

        u_query = data.get('query')

        o_query = optimization_chain.invoke(u_query)

        similar_docs = retrieve_docs(doc_name,o_query,CACHE_PATH,PERSISTENT_DIR)

        response = generation_chain.invoke({'question':u_query,'context':similar_docs})

        chat_history.append(u_query)
        chat_history.append(response.content)

        with open(f"{CHAT_HISTORY_DIR}/{doc_name.split('.')[0]}.pkl",'wb') as file:
                chat_history = pickle.dump(chat_history,file)

        return JsonResponse({"response":response.content},status=205)
    
    else:
        return JsonResponse({"error": "Invalid HTTP method."}, status=405)