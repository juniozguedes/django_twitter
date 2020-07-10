from rest_framework import serializers
from .models import Tweet, Favorites


from users.models import User

from django.contrib.auth.models import User
from users.serializers import UserSerializer

class TestSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=True)
    
    favorite_count = serializers.SerializerMethodField()

    class Meta:
        model = Favorites
        fields = [ 'user', 'favorite_count']

    def get_favorite_count(self, obj):
        return obj.user.count()


class TweetSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    favorites = TestSerializer()
   
  
    class Meta:
        model = Tweet
        fields = ['id','user','content','favorites','created']
class FavoriteSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=True)
    tweet = TweetSerializer()
    favorite_count = serializers.SerializerMethodField()

    class Meta:
        model = Favorites
        fields = ['tweet', 'user', 'favorite_count']

    def get_favorite_count(self, obj):
        return obj.user.count()
