from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from .models import Tweet
from .serializers import TweetSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from django.http import JsonResponse
from rest_framework.parsers import JSONParser






class ListCreateTweet(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,) 

    def get_serializer_class(self):
        if self.request.method == 'GET':
            print(JSONParser().parse(self.request.user))
            serializer_class = TweetSerializer    
        elif self.request.method == 'POST':
            serializer_class = TweetSerializer
            
        return serializer_class
    def get_queryset(self):
        queryset = Tweet.objects.all()
        return queryset

class RetrieveDestroyTweet(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer
