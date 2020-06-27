from django.contrib import admin
from django.urls import path, include
from users.views import signin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('twitter/signin', signin),
    path('api/v1/', include('tweets.urls')),
    path('user/', include('users.urls')),
]