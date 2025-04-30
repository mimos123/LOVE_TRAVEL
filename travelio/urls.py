from django.contrib import admin
from django.urls import path, include
from . import views

def index(request):
    from django.http import HttpResponse
    return HttpResponse("Welcome to the Django backend!")

urlpatterns = [
    path('', index),
    path('admin/', admin.site.urls),
    path('api/time/', views.time_view),
    path('api/destinations/', views.destinations_list),
    path('api/packages/', views.packages_list),
    path('api/hotels/', views.hotels_list),
    path('api/activities/', views.activities_list),
    path('api/transports/', views.transports_list),
    # Use only Django's default auth URLs for login/logout/password
    path('accounts/', include('django.contrib.auth.urls')),
    path("api/current_user/", views.current_user),
]
