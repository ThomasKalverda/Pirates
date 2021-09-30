from rest_framework import serializers
from .models import Game, Map

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ('id', 'code', 'number_of_players', 'users', 'finished', 'created_at', 'current_tick', 'map')

class MapSerializer(serializers.ModelSerializer):
    class Meta:
        model = Map
        fields = ('id', 'size')