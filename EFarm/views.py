import json
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User


def home(request):
    html = "<a href='http://localhost:3000'> Start Front-End App</a>"
    return HttpResponse(html)


@csrf_exempt
def user_login(request):
    if request.method == 'POST':
        json_data = json.loads(request.body)
        email = json_data['email']
        password = json_data['password']
        user_type = json_data['type']
        print(email, password, user_type)


    return JsonResponse({'token': "Log in"})


@csrf_exempt
def user_signup(request):
    if request.method == 'POST':
        json_data = json.loads(request.body)
        email = json_data['email']
        password = json_data['password']
        user_type = json_data['user_type']
        print(email, password, user_type)
    return JsonResponse({'result': 'sign up'})
