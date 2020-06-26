from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from .models import Tweet
from .serializers import TweetListSerializer
from rest_framework import generics
from rest_framework.views import APIView


#Return All Tweets
#class ShowAllTweets(generics.ListAPIView):
#    serializer_class = TweetListSerializer


class ListCreateTweet(generics.ListCreateAPIView):
    def get_serializer_class(self):
        if self.request.method == 'GET':
            serializer_class = TweetListSerializer    
        elif self.request.method == 'POST':
            serializer_class = TweetListSerializer
        return serializer_class
    def get_queryset(self):
        queryset = Tweet.objects.all()
        return queryset