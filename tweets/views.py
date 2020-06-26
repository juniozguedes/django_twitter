from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from .models import Tweet
from .serializers import TweetSerializer
from rest_framework import generics

class ListCreateTweet(generics.ListCreateAPIView):
    def get_serializer_class(self):
        if self.request.method == 'GET':
            serializer_class = TweetSerializer    
        elif self.request.method == 'POST':
            serializer_class = TweetSerializer
        return serializer_class
    def get_queryset(self):
        queryset = Tweet.objects.all()
        return queryset