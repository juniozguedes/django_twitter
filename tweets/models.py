from django.contrib.auth.models import User
from django.db import models

class Tweet(models.Model):
    tweet = models.CharField(max_length=140)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)