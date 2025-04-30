from django.http import JsonResponse
from datetime import datetime
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
import json
from .models import Destination, Package
from django.core.serializers import serialize
from django.views.decorators.http import require_GET

def time_view(request):
    now = datetime.now().isoformat()
    return JsonResponse({"time": now})

@csrf_exempt
def register_user(request):
    if request.method == "POST":
        data = json.loads(request.body)
        username = data.get("username")
        password = data.get("password")
        email = data.get("email", "")

        if User.objects.filter(username=username).exists():
            return JsonResponse({"error": "Username already taken"}, status=400)

        user = User.objects.create_user(username=username, email=email, password=password)
        return JsonResponse({"message": "User registered successfully"})
    return JsonResponse({"error": "Invalid request method"}, status=405)

@csrf_exempt
def login_user(request):
    if request.method == "POST":
        data = json.loads(request.body)
        username = data.get("username")
        password = data.get("password")

        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({"message": "Login successful"})
        else:
            return JsonResponse({"error": "Invalid credentials"}, status=401)
    return JsonResponse({"error": "Invalid request method"}, status=405)

@csrf_exempt
def logout_user(request):
    if request.method == "POST":
        logout(request)
        return JsonResponse({"message": "Logged out successfully"})
    return JsonResponse({"error": "Invalid request method"}, status=405)

@require_GET
def destinations_list(request):
    destinations = Destination.objects.all()
    data = [
        {
            "id": d.id,
            "name": d.name,
            "country": d.country,
            "description": d.description,
            "image": d.image.url if d.image else "",
        }
        for d in destinations
    ]
    return JsonResponse(data, safe=False)

@require_GET
def packages_list(request):
    packages = Package.objects.select_related('destination').all()
    data = [
        {
            "title": pkg.name,
            "country": pkg.destination.country,
            "description": pkg.destination.description,
            # Use only the filename for public/destinations/
            "image": f"/destinations/{pkg.destination.image.name.split('/')[-1]}" if pkg.destination.image else "",
            "price": float(pkg.total_price) if pkg.total_price else 0,
        }
        for pkg in packages
    ]
    return JsonResponse(data, safe=False)

