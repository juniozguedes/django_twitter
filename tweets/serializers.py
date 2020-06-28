from rest_framework import serializers
from .models import Tweet
from django.contrib.auth.models import User
from users.serializers import UserSerializer
    
class TweetSerializer(serializers.ModelSerializer):
    user_id = UserSerializer()
    class Meta:
        model = Tweet
        fields = ['id','user_id','content','created']
