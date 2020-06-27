from rest_framework import serializers
from .models import Tweet
from django.contrib.auth.models import User
    
class TweetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tweet
        fields = ['id','content','created']
