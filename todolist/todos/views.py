from django.shortcuts import render
from rest_framework import generics

from .models import Todo, Category

from .serializers import (
    TodoSerializer,
    CategorySerializer
)


class ListTodo(generics.ListCreateAPIView):  # ListCreateAPIView is used for GET, POST requests
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class DetailTodo(generics.RetrieveUpdateDestroyAPIView):
    #  RetrieveUpdateDestroyAPIView is used for
    #  GET, PUT, PATCH and DELETE requests
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class ListCategory(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class DetailCategory(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
