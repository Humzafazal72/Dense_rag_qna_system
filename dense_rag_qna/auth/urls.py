from django.urls import path
from .views import signin,signout,signup

urlpatterns = [
    path('signup/',view=signup,name='signup'),
    path('signin/',view=signin,name='signin'),
    path('signout/',view=signout,name='signout'),
]