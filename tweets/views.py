from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from .models import Tweet
from .serializers import TweetSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

class ListCreateTweet(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,) 
    serializer_class = TweetSerializer
    def perform_create(self, serializer_class):
        serializer_class.save(author=self.request.user)
 
    def get_queryset(self):
        queryset = Tweet.objects.filter(author=self.request.user)
        return queryset

class RetrieveDestroyTweet(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer