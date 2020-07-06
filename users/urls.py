from django.urls import path
from . import views

urlpatterns = [
    path('follow', views.Follow.as_view(), name='follow'),
    path('signup', views.UserCreateAPIView.as_view(), name='signup')
]