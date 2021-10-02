from rest_framework import serializers
from .models import Game, Map
from game.models import Fleet, Island, Player, Hex

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ('id', 'code', 'number_of_players', 'users', 'finished', 'created_at', 'current_tick')

class MapSerializer(serializers.ModelSerializer):
    class Meta:
        model = Map
        fields = ('id', 'size', 'game', 'islands')

class FleetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fleet
        fields = ('id', 'name', 'owner', 'treasures', 'ships', 'hex', 'game')

class IslandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Island
        fields = ('id', 'name', 'owner', 'treasures', 'defenses', 'hex', 'map')

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ('id', 'user', 'color', 'portrait_url', 'active', 'game')

class HexSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hex
        fields = ('id', 'q', 'r', 's', 'map')