import json

from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import AddProduct
from .serializers import UserSerializer, UserSerializerWithToken


@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """

    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
def add_product(request):
    if request.method == 'POST':
        json_data = json.loads(request.body)
        name = json_data['name']
        date = json_data['expiry']
        seller = json_data['seller']
        price = json_data['price']
        quantity = json_data['quantity']
        des = json_data['description']

        product = AddProduct(name=name, seller_id=seller, base_price=price, quantity=quantity, expiry=date,
                             description=des)
        product.save()
        return HttpResponse("ok")


@csrf_exempt
def get_product(request):
    if request.method == 'POST':
        json_data = json.loads(request.body)

        event_list = AddProduct.objects.filter(seller=1)

        data_list = []
        temp_list = {}
        num = event_list.count()
        for n in range(0, num):
            temp_list['id'] = event_list[n].id
            temp_list['s_id'] = event_list[n].seller_id
            temp_list['name'] = event_list[n].name
            temp_list['description'] = event_list[n].description
            temp_list['price'] = event_list[n].base_price
            temp_list['quantity'] = event_list[n].quantity
            temp_list['expiry'] = event_list[n].expiry
            temp = temp_list.copy()
            data_list.append(temp)

        print(data_list)
        return JsonResponse({'event_list': data_list})


@csrf_exempt
def get_all_product(request):
    if request.method == 'POST':
        json_data = json.loads(request.body)

        event_list = AddProduct.objects.all();

        data_list = []
        temp_list = {}
        num = event_list.count()
        for n in range(0, num):
            temp_list['id'] = event_list[n].id
            temp_list['s_id'] = event_list[n].seller_id
            temp_list['name'] = event_list[n].name
            temp_list['description'] = event_list[n].description
            temp_list['price'] = event_list[n].base_price
            temp_list['quantity'] = event_list[n].quantity
            temp_list['expiry'] = event_list[n].expiry
            temp = temp_list.copy()
            data_list.append(temp)

        print(data_list)
        return JsonResponse({'event_list': data_list})
