from django.contrib import admin
from .models import Tweet
from .models import Favorites

admin.site.register(Tweet)
admin.site.register(Favorites)