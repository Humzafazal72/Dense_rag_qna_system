from django.urls import path
from .views import document_upload,retrieve_information,get_chat_history

urlpatterns = [
    path('add_document',document_upload,name='add_document'),
    path('get_response',retrieve_information,name='get_response'),
    path('get_chat_history',get_chat_history,name='get_chat_history')
]