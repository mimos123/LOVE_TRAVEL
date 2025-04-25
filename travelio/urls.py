from django.contrib import admin
from django.urls import path
from .views import time_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/time/', time_view),
]
