from django.urls import path
from . import views

urlpatterns = [
    path('', views.ListCreateTweet.as_view(), name='list_create_tweet'),
    path('<int:pk>', views.RetrieveDestroyTweet.as_view(), name='retrieve_destroy_tweet'),
    path('<str:username>/tweets', views.ShowTweets.as_view(), name='tweets'),
    path('<int:pk>/favorites', views.ListTweetFavorites.as_view(), name='favorites')
]