from rest_framework.serializers import ModelSerializer, CharField
from World_Cooking_App.models import Dish, Ingredient


class IngredientsSerializer(ModelSerializer):

    class Meta:
        model = Ingredient
        fields = ['name', 'quantity']


class DishesSerializer(ModelSerializer):
    category = CharField(source='category.name')
    ingredients = IngredientsSerializer(many=True, read_only=True)

    class Meta:
        model = Dish
        fields = ['id', 'name', 'image', 'recipe', 'servings', 'category', 'ingredients']
