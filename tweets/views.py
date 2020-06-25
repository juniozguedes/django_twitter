from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from .models import Tweet
from .serializers import TweetListSerializer
from rest_framework import generics

#Return All Tweets
class ShowAllTweets(generics.ListAPIView):
    serializer_class = TweetListSerializer

    def get_queryset(self):
        queryset = Tweet.objects.all()
        return queryset