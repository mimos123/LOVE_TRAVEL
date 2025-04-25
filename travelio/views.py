from django.http import JsonResponse
from datetime import datetime

def time_view(request):
    now = datetime.now().isoformat()
    return JsonResponse({"time": now})
