from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from .models import Tweet
from users.models import Follow
from .serializers import TweetSerializer
from .models import Favorites
from .serializers import TweetSerializer, FavoriteSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

class ListCreateTweet(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,) 
    serializer_class = TweetSerializer
    def perform_create(self, serializer_class):
        serializer_class.save(user_id=self.request.user)
 
    def get_queryset(self):
        queryset = Tweet.objects.filter(user_id=self.request.user)
        return queryset


class RetrieveDestroyTweet(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer


class ShowTweets(generics.ListAPIView):    
    serializer_class = TweetSerializer
    lookup_url_kwarg = "username"
    def get_queryset(self):
        username = self.kwargs.get(self.lookup_url_kwarg)
        user = User.objects.filter(username=username).first()
        tweets = Tweet.objects.filter(user_id=user.id)
        return tweets

class TimelineTweets(generics.ListAPIView):    
    serializer_class = TweetSerializer
    def get_queryset(self):
        followed_people = Follow.objects.filter(follower=self.request.user).values('following')
        combined_list = Tweet.objects.filter(user_id__in=followed_people) | Tweet.objects.filter(user_id=self.request.user)
        return combined_list.order_by('-created')

class ListTweetFavorites(generics.ListAPIView):
    serializer_class = FavoriteSerializer
    def get_queryset(self):
        queryset = Favorites.objects.filter(tweet_id=self.kwargs['pk'])
        return queryset
