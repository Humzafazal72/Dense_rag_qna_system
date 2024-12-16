import os
import json
from django.conf import settings
from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login,logout,authenticate

(settings.BASE_DIR / 'main' / 'users_data').mkdir(exist_ok = True)

@csrf_exempt
def signup(request):
    if request.method == "POST":
        data = json.loads(request.body)
        email = data.get('email')
        username = data.get('username')
        password = data.get('password')

        if not password or not username:
            return JsonResponse({"error": "Name and username are required."}, status=400)

        user = User.objects.create_user(username=username, email=email, password=password)
        user.save()

        (settings.BASE_DIR / 'main' / 'users_data' / username).mkdir()

        return JsonResponse({"success": "User signed-up successfully", "docs":[],
                             "username":username, "email":email}, status=200)

    else:
        return JsonResponse({"error": "Invalid HTTP method."}, status=405)

@csrf_exempt
def signin(request):
    if request.method == "POST":
        data = json.loads(request.body)
        
        username = data.get('username')     
        password = data.get('password')

        if not password or not username:
            return JsonResponse({"error": "Name and email are required."}, status=400)

        user = authenticate(username=username,password=password)
        if user is not None:
            login(request,user)

            docs_path = settings.BASE_DIR / 'main' / 'users_data' / username 
            docs = os.listdir(docs_path)
            
            return JsonResponse({'success':'User signed-in successfully','docs':docs},status=200)
        else:
            return JsonResponse({'error':'Incorrect password or username'},status=404)
    else:
        return JsonResponse({"error": "Invalid HTTP method."}, status=405)

@csrf_exempt 
def signout(request):
    logout(request)
    return JsonResponse({'success':'User logged-out successfully'},status=200)