from rest_framework import serializers
from .models import Tweet, Favorites

from users.models import User
from users.serializers import UserSerializer 

from django.contrib.auth.models import User
    
class TweetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tweet
        fields = ['id','content','created']


class FavoriteSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    tweet = TweetSerializer()
    favorite_count = serializers.IntegerField(source='favorite_set.count', 
    read_only=True)

    

    class Meta:
        model = Favorites
        fields = ['tweet', 'user', 'favorite_count']

class MajorFavoriteSerializer(serializers.ModelSerializer):
    tweet = TweetSerializer()
    users = UserSerializer()
    favorite_count = serializers.CharField(source='asbaba')
    class Meta:
        model=Favorites
        fields = ['tweet','users', 'favorite_count']