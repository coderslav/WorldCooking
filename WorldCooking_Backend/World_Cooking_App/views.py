from rest_framework.viewsets import ReadOnlyModelViewSet
from World_Cooking_App.models import Dish
from World_Cooking_App.serializers import DishesSerializer


class DishesViewSet(ReadOnlyModelViewSet):
    serializer_class = DishesSerializer

    def get_queryset(self):
        if self.request.query_params:
            params = self.request.query_params.dict()
            if 'country' in params:
                country = params.get('country')
                if country == 'UA':
                    return Dish.objects.filter(category__name='Ukraine')
        else:
            return Dish.objects.all()

