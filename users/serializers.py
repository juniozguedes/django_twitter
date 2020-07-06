from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Follow

class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ['id', 'username']

    def create(self, validated_data):
        user = super(UserSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

class UserSigninSerializer(serializers.Serializer):
    username = serializers.CharField(required = True)
    password = serializers.CharField(required = True)

class FollowSerializer(serializers.ModelSerializer ):
    class Meta:
        model = Follow
        fields = ['following']