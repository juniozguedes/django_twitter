from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Follow

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']

class UserSigninSerializer(serializers.Serializer):
    username = serializers.CharField(required = True)
    password = serializers.CharField(required = True)

class FollowSerializer(serializers.ModelSerializer ):
    class Meta:
        model = Follow
        fields = ['following']