from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=150, unique=True, verbose_name='Country Name')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Categories'


class Dish(models.Model):
    name = models.CharField(max_length=150, unique=True, verbose_name='Recipe Name')
    image = models.ImageField(upload_to='static/images/', default='static/images/default_dish.jpg',
                              verbose_name='Picture of the Dish')
    recipe = models.TextField(verbose_name='Recipe of the Dish')
    servings = models.PositiveSmallIntegerField(default=1, verbose_name='Number of Servings')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name='Category of the Dish')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Dishes'


class Ingredient(models.Model):
    name = models.CharField(max_length=150, unique=True, verbose_name='Ingredient Name')
    quantity = models.CharField(max_length=50, verbose_name='Ingredient Quantity')
    dish = models.ForeignKey(Dish, on_delete=models.CASCADE, verbose_name='Dish of the Ingredient',
                             related_name='ingredients')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Ingredients'
