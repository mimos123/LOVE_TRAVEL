from django.contrib import admin
from django.urls import path
from . import views

def index(request):
    from django.http import HttpResponse
    return HttpResponse("Welcome to the Django backend!")

urlpatterns = [
    path('', index),
    path('admin/', admin.site.urls),
    path('api/time/', views.time_view),
    path("register/", views.register_user, name="register"),
    path("login/", views.login_user, name="login"),
    path("logout/", views.logout_user, name="logout"),
]
