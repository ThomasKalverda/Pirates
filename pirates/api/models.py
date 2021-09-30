from django.db import models
from django.contrib.auth.models import User
import string
import random

def generate_unique_code():
    length = 8
    while True:
        code = ''.join(random.choices(string.ascii_letters), k=length)
        if Game.objects.filter(code=code).count() == 0:
            break
    return code

def generate_game_name():
    name = "NewGame"
    return name

class Map(models.Model):
    size = models.IntegerField(null=False, default=10)

class Game(models.Model):
    code = models.CharField(max_length=8, default=generate_unique_code, unique=True)
    name = models.CharField(max_length=50, null=False, default=generate_game_name)
    number_of_players = models.IntegerField(null=False, default=8)
    users = models.ManyToManyField(User)
    finished = models.BooleanField(default=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    current_tick = models.IntegerField(null=False, default=0)
    map = models.ForeignKey(Map, on_delete=models.CASCADE, related_name='games')

