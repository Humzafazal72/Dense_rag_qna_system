from django.urls import path
from .views import document_upload,retrieve_information

urlpatterns = [
    path('add_document',document_upload,name='add_document'),
    path('get_response/<str:doc_name>',retrieve_information,name='get_response'),
]