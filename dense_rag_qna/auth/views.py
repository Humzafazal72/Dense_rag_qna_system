import json
from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.views.decorators import csrf_exempt
from django.contrib.auth import login,logout,aauthenticate

@csrf_exempt
def signup(request):
    if request.method == "POST":
        data = json.loads(request.body)

        email = data.get('email')
        username = data.get('username')
        password = data.get('password')
        
        if not password or not email:
                return JsonResponse({"error": "Name and email are required."}, status=400)
        
        user = User.objects.create_user(username=username,email=email,password=password)
        user.save()
        
        return JsonResponse({"success": "User signed-up successfully"}, status=200)
        
    else:
        return JsonResponse({"error": "Invalid HTTP method."}, status=405)
    
def login(request):
    if request.method == "POST":
        data = json.loads(request.body)

        username = data.get('username')
        password = data.get('password')

        if not password or not username:
                return JsonResponse({"error": "Name and email are required."}, status=400)
        
        user = aauthenticate(request,username,password)

        if user is not None:
            login(request,user)
            return JsonResponse({'success':'User signed-in successfully'},status=200)
        
        else:
            return JsonResponse({'error':'Incorrect password or username'},status=404) 
    
    else:
        return JsonResponse({"error": "Invalid HTTP method."}, status=405)
    
def logout(request):
    logout(request)
    return JsonResponse({'success':'User logged-out successfully'},status=200)
        



    

