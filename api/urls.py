from django.urls import path

from . import views
from .views import current_user, UserList

urlpatterns = [
    path('current_user/', current_user),
    path('users/', UserList.as_view()),
    path('addproduct/', views.add_product),
    path('getproduct/', views.get_product),
    path('getallproduct/', views.get_all_product),
]
