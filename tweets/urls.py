from django.urls import path
from . import views

urlpatterns = [
    path('all', views.ShowAllTweets.as_view(), name='show_all_tweets'),
]