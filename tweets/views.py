from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Tweet
from .models import Favorites
from .serializers import TweetSerializer, FavoriteSerializer
from users.models import Follow

from django.http import HttpResponse
from rest_framework.response import Response
from django.core import serializers

import json

from django.http import JsonResponse


class ListCreateTweet(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,) 
    serializer_class = TweetSerializer
 
    def get_queryset(self):
        queryset = Tweet.objects.filter(user_id=self.request.user)
        return queryset

    def perform_create(self, serializer, **kwargs):
        serializer.save(user=self.request.user)

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
<<<<<<< Updated upstream
    def get_queryset(self):
        queryset = Favorites.objects.filter(tweet_id=self.kwargs['pk'])
        return queryset
=======
   
    

    
   
    
    def get_queryset(self):
        #serializer_class = FavoriteSerializer

        favorites = Favorites.objects.filter(tweet_id=self.kwargs['pk'])
        #queryset = {
        #   "tweet" : 'Favorites.objects.filter(tweet_id=self.kwargs['pk'])[0].tweet', 
        #   "users": [],
        #   "favorite_count": favorites.count()
       #    }

        
        
        #for favorite in Favorites.objects.filter(tweet_id=9):
        #    queryset['users'].append(favorite.user)
        test = Favorites.objects.all()
        qs_json = serializers.serialize('json', test)
        print(qs_json)
        return HttpResponse(qs_json, content_type='application/json')
     
        
        
     
        
   
>>>>>>> Stashed changes
