import os
import json
import pickle
from pathlib import Path
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .utils import create_db, retrieve_docs, optimization_chain, generation_chain

CURR_DIR = Path(__file__).resolve().parent  
(CURR_DIR / 'cache').mkdir(exist_ok=True)
(CURR_DIR / 'users_data').mkdir(exist_ok=True)

CACHE_PATH = os.path.join(Path(__file__).resolve().parent, 'cache')    

@csrf_exempt  
def document_upload(request):
    if request.method == 'POST':
        document = request.FILES.get("document")
        doc_name = document.name
        doc_name_ = doc_name.replace('.pdf', '')
        username = str(request.user.username)
        chat_history = []

        (CURR_DIR / 'users_data' / username / doc_name_).mkdir(exist_ok = True)
        doc_path = CURR_DIR / 'users_data' / username / doc_name_ / doc_name
  
        if not document:
            return JsonResponse({"error": "Document not uploaded."}, status=400)
  
        with open(doc_path, "wb+") as destination:
            for chunk in document.chunks():
                destination.write(chunk)
        
        (CURR_DIR / 'users_data' / username / doc_name_ / 'Persistent').mkdir(exist_ok = True)

        PERSISTENT_DIR = os.path.join(CURR_DIR, 'users_data', username, doc_name_, 'Persistent')
        
        create_db(doc_path, CACHE_PATH, doc_name_, PERSISTENT_DIR)

        docs = os.listdir(os.path.join(CURR_DIR, 'users_data', username))
  
        return JsonResponse({'success': 'Vector Database created successfully', 'docs':docs, 'chat_history':[]}, status=200)
    else:
        return JsonResponse({"error": "Invalid HTTP method."}, status=405)
  
@csrf_exempt  
def retrieve_information(request, doc_name):
    if request.method == 'POST':
        doc_name = doc_name.replace('.pdf','')
        username = str(request.user.username)

        chat_history_path = CURR_DIR / 'users_data' / username / doc_name / 'chat_history.pkl'

        if chat_history_path.exists():
            with chat_history_path.open('rb') as file:  # Use Pathlib's open method
                chat_history = pickle.load(file)
        else:
            chat_history = []
  
        data = json.loads(request.body)
  
        u_query = data.get('query')
        o_query = optimization_chain.invoke(u_query)

        PERSISTENT_DIR = os.path.join(CURR_DIR, 'users_data', username, doc_name, 'Persistent')  
        similar_docs = retrieve_docs(doc_name, o_query, CACHE_PATH, PERSISTENT_DIR)
  
        response = generation_chain.invoke({'question': u_query, 'context': similar_docs})
  
        chat = {'user':u_query,'response':response.content}
        chat_history.append(chat)
  
        with chat_history_path.open('wb') as file:
                pickle.dump(chat_history, file)
  
        return JsonResponse({"response": response.content, 'chat_history': chat_history}, status=205)
    else:
        return JsonResponse({"error": "Invalid HTTP method."}, status=405)
    
def get_chat_history(request,doc_name):
    username = request.user.username
    doc_name = doc_name.split('.pdf','')

    chat_history_path = CURR_DIR / 'users_data' / username / doc_name / 'chat_history.pkl'

    if chat_history_path.exists():
        with chat_history_path.open('rb') as file:  # Use Pathlib's open method
            chat_history = pickle.load(file)
        
        return JsonResponse({'success':'chat history retreived successfully',"chat_history":chat_history}, status = 205)
    else:
        return JsonResponse({"error":"No chat history for the document {doc_name}"})
