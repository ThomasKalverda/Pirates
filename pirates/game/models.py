from django.db import models
from django.contrib.auth.models import User
from api.models import Game, Map

class Hex(models.Model):
    q = models.IntegerField(null=False, default=0)
    r = models.IntegerField(null=False, default=0)
    s = models.IntegerField(null=False, default=0)
    map = models.ForeignKey(Map, on_delete=models.CASCADE)

    def __str__(self):
        return (f"({self.q}, {self.r}, {self.s})")

class Player(models.Model):
    name = models.CharField(max_length=20, null=False)
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    color = models.CharField(max_length=20)
    portrait_url = models.CharField(max_length=200)
    active = models.BooleanField(default=True)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)


class Island(models.Model):
    name = models.CharField(max_length=20, null=False, default="generate_island_name")
    owner = models.ForeignKey(Player, null=True, on_delete=models.SET_NULL, blank=True)
    treasures = models.IntegerField(default=1, null=False)
    defenses = models.IntegerField(default=0, null=True)
    q = models.IntegerField(null=True)
    r = models.IntegerField(null=True)
    s = models.IntegerField(null=True)
    map = models.ForeignKey(Map, on_delete=models.CASCADE, related_name='islands')

    def __str__(self):
        return (f"{self.name} ({self.q}, {self.r}, {self.s})")


class Fleet(models.Model):
    name = models.CharField(max_length=20, null=False)
    owner = models.ForeignKey(Player, null=True, on_delete=models.SET_NULL)
    treasures = models.IntegerField(default=0, null=False)
    ships = models.IntegerField(default=1, null=False)
    q = models.IntegerField(null=True)
    r = models.IntegerField(null=True)
    s = models.IntegerField(null=True)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)

