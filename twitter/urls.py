from django.contrib import admin
from django.urls import path, include
from users.views import signin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/signin', signin),  
    path('api/v1/', include('tweets.urls')),
]