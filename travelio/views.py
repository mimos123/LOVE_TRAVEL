from django.http import JsonResponse
from datetime import datetime
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
import json
from .models import Destination, Package, Hotel, Activity, Transport
from django.core.serializers import serialize
from django.views.decorators.http import require_GET

def time_view(request):
    now = datetime.now().isoformat()
    return JsonResponse({"time": now})

@csrf_exempt
def register_user(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            username = data.get("username")
            password = data.get("password")
            email = data.get("email", "")

            if not username or not password:
                return JsonResponse({"error": "Username and password are required"}, status=400)

            if User.objects.filter(username=username).exists():
                return JsonResponse({"error": "Username already taken"}, status=400)

            user = User.objects.create_user(username=username, email=email, password=password)
            return JsonResponse({"message": "User registered successfully"})
        except Exception as e:
            print("Register error:", e)
            return JsonResponse({"error": "Server error"}, status=500)
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

def current_user(request):
    if request.user.is_authenticated:
        return JsonResponse({"username": request.user.username})
    return JsonResponse({}, status=401)

@require_GET
def destinations_list(request):
    destinations = Destination.objects.all()
    data = [
        {
            "name": d.name,
            "description": d.description,
            # If d.image is a URL string, just use it directly
            "image": d.image if isinstance(d.image, str) else (d.image.url if d.image else ""),
        }
        for d in destinations
    ]
    return JsonResponse(data, safe=False)

@require_GET
def packages_list(request):
    packages = Package.objects.select_related('destination').all()
    data = []
    for pkg in packages:
        # Handle both FileField/ImageField and string for destination.image
        dest_image = pkg.destination.image
        if hasattr(dest_image, "name"):
            image_url = f"/destinations/{dest_image.name.split('/')[-1]}"
        elif isinstance(dest_image, str) and dest_image:
            # If it's already a string (maybe a filename or URL)
            if dest_image.startswith("/destinations/") or dest_image.startswith("http"):
                image_url = dest_image
            else:
                image_url = f"/destinations/{dest_image.split('/')[-1]}"
        else:
            image_url = ""
        data.append({
            "title": pkg.name,
            "country": pkg.destination.country,
            "description": pkg.destination.description,
            "image": image_url,
            "price": float(pkg.total_price) if pkg.total_price else 0,
            # Add other fields as needed
        })
    return JsonResponse(data, safe=False)

@require_GET
def hotels_list(request):
    destination_id = request.GET.get('destination')
    if destination_id:
        hotels = Hotel.objects.filter(destination__id=destination_id)
    else:
        hotels = Hotel.objects.all()
    data = [
        {"name": h.name, "price": h.price, "destination": h.destination.name}
        for h in hotels
    ]
    return JsonResponse(data, safe=False)

@require_GET
def activities_list(request):
    destination_id = request.GET.get('destination')
    if destination_id:
        activities = Activity.objects.filter(destination__id=destination_id)
    else:
        activities = Activity.objects.all()
    data = [
        {"name": a.name, "price": a.price, "destination": a.destination.name}
        for a in activities
    ]
    return JsonResponse(data, safe=False)

@require_GET
def transports_list(request):
    destination_id = request.GET.get('destination')
    if destination_id:
        transports = Transport.objects.filter(destination__id=destination_id)
    else:
        transports = Transport.objects.all()
    data = [
        {"name": t.name, "price": t.price, "destination": t.destination.name}
        for t in transports
    ]
    return JsonResponse(data, safe=False)

@login_required
def some_protected_view(request):
    return JsonResponse({"message": "You are authenticated"})

