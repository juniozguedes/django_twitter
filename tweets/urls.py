from django.urls import path
from . import views

urlpatterns = [
    
    path('', views.ListCreateTweet.as_view(), name='create_tweet'),
   #path('<pk:>', views.ShowAllTweets.as_view(), name='show_all_tweets'),
   #path('all', views.ShowAllTweets.as_view(), name='show_all_tweets'),
]