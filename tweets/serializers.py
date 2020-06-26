from rest_framework import serializers
from .models import Tweet

class TweetListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tweet
        fields = '__all__'

class TweetListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tweet
        fields = '__all__'

