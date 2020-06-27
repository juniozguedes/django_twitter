from django.contrib import admin
from .models import Profile
from .models import Follow

admin.site.register(Profile)
admin.site.register(Follow)