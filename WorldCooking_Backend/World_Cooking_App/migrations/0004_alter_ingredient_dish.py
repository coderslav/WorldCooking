# Generated by Django 4.0 on 2021-12-28 16:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('World_Cooking_App', '0003_alter_ingredient_dish'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ingredient',
            name='dish',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ingredients', to='World_Cooking_App.dish', verbose_name='Dish of the Ingredient'),
        ),
    ]
