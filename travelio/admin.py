from django.contrib import admin
from .models import Destination, Transport, Hotel, Activity, Package

admin.site.register(Destination)
admin.site.register(Transport)
admin.site.register(Hotel)
admin.site.register(Activity)
admin.site.register(Package)
