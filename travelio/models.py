from django.db import models

class Destination(models.Model):
    name = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='destinations/', blank=True)

    def __str__(self):
        return self.name


class Activity(models.Model):
    destination = models.ForeignKey(Destination, on_delete=models.CASCADE, related_name='activities')
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return self.name


class Hotel(models.Model):
    destination = models.ForeignKey(Destination, on_delete=models.CASCADE, related_name='hotels')
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=255)
    rating = models.FloatField()
    price_per_night = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return self.name


class Transport(models.Model):
    destination = models.ForeignKey(Destination, on_delete=models.CASCADE, related_name='transports')
    type = models.CharField(max_length=50)  # e.g., 'Flight', 'Bus', 'Train'
    company = models.CharField(max_length=100)
    departure_city = models.CharField(max_length=100)
    departure_time = models.DateTimeField()
    arrival_time = models.DateTimeField()
    price = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return f"{self.type} by {self.company} to {self.destination.name}"


class Package(models.Model):
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    destination = models.ForeignKey(Destination, on_delete=models.CASCADE, related_name='packages')
    activity = models.ForeignKey(Activity, on_delete=models.CASCADE, related_name='packages')
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE, related_name='packages')
    transport = models.ForeignKey(Transport, on_delete=models.CASCADE, related_name='packages')
    total_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)

    def clean(self):
        # Only allow selecting activity, hotel, and transport that belong to the selected destination
        errors = {}
        if self.activity.destination_id != self.destination_id:
            errors['activity'] = "Selected activity does not belong to the chosen destination."
        if self.hotel.destination_id != self.destination_id:
            errors['hotel'] = "Selected hotel does not belong to the chosen destination."
        if self.transport.destination_id != self.destination_id:
            errors['transport'] = "Selected transport does not belong to the chosen destination."
        if errors:
            from django.core.exceptions import ValidationError
            raise ValidationError(errors)

    def save(self, *args, **kwargs):
        self.full_clean()  # Enforce the clean() method
        self.total_price = (
            (self.activity.price if self.activity else 0) +
            (self.hotel.price_per_night if self.hotel else 0) +
            (self.transport.price if self.transport else 0) +
            100
        )
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name
