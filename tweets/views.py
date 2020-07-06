from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Tweet
from .models import Favorites
from .serializers import TweetSerializer, FavoriteSerializer
from users.models import Follow

from django.http import HttpResponse, JsonResponse
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
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer

    def destroy(self, request, *args, **kwargs):
        if (self.request.user.is_authenticated == False):
            return JsonResponse(status=401, data={'status':'unauthorized','message':'User not authenticated'})
        Tweet.objects.filter(id=self.lookup_url_kwarg).delete()
        return JsonResponse(status=200, data={'status':'tweet_deleted','message':'Tweet Deleted'})

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

class ListCreateTweetFavorites(generics.ListCreateAPIView):
    serializer_class = FavoriteSerializer

    def get_queryset(self):
        queryset = Favorites.objects.filter(tweet=self.kwargs['pk'])
        return queryset

    def create(self, request, *args, **kwargs):
        permission_classes = (IsAuthenticated,)
        if (self.request.user.is_authenticated == False):
            return JsonResponse(status=401, data={'status':'unauthorized','message':'User not authenticated'})
        favoriteObject, created = Favorites.objects.get_or_create(tweet=self.kwargs['pk'])
        favoriteObject.user.add(self.request.user)
        favoriteObject.save()
        return JsonResponse(status=200, data={'status':'tweet_favorited','message':'Favorited'})