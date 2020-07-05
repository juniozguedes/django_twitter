from rest_framework import serializers
from .models import Tweet, Favorites


from users.models import User
from users.serializers import UserSerializer 

from django.contrib.auth.models import User
from users.serializers import UserSerializer
    
class TweetSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(
        read_only=True,
        default=serializers.CurrentUserDefault()
    )
    class Meta:
        model = Tweet
        fields = ('__all__')


class FavoriteSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=True)
    tweet = TweetSerializer()
    favorite_count = serializers.SerializerMethodField()

    class Meta:
        model = Favorites
        fields = ['user', 'tweet']

    def get_favorite_count(self, obj):
        return obj.user.count()

