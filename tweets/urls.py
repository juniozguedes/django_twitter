from django.urls import path
from . import views

urlpatterns = [
    path('', views.ListCreateTweet.as_view(), name='list_create_tweet'),
    path('<int:pk>', views.RetrieveDestroyTweet.as_view(), name='retrieve_destroy_tweet'), ## Maybe no authentication needed
    path('<str:username>/tweets', views.ShowTweets.as_view(), name='tweets'),
    path('timeline', views.TimelineTweets.as_view(), name='timeline'),
    path('<int:pk>/favorites', views.ListCreateTweetFavorites.as_view(), name='favorites'),
]