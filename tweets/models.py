from django.contrib.auth.models import User
from django.db import models

class Tweet(models.Model):
    content = models.CharField(max_length=140)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)

class Favorites(models.Model):
    user = models.ManyToManyField(User,related_name='user_favorites')
    tweet = models.OneToOneField(Tweet, related_name='favorites', on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)