
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import RecipeSerializer
from users.models import Recipe


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
  @classmethod
  def get_token(cls, user):
    token = super().get_token(user)

    # Add custom claims
    token['username'] = user.username
    # ...

    return token


class MyTokenObtainPairView(TokenObtainPairView):
  serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def getRoutes(request):
  routes = [
    '/api/token',
    '/api/token/refresh'
  ]

  return Response(routes)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getRecipes(request):
  user = request.user
  recipes = user.recipe_set.all()
  serializer = RecipeSerializer(recipes, many=True)
  return Response(serializer.data)