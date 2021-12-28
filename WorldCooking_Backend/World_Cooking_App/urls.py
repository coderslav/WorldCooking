from rest_framework import routers
from World_Cooking_App.views import DishesViewSet
from django.urls import path, include

router = routers.DefaultRouter()
router.register('v1/dishes', DishesViewSet, basename='dish')

urlpatterns = [
    path('api/', include(router.urls)),
]