from rest_framework import serializers

from .models import (
    Todo,
    Category,
)


class TodoSerializer(serializers.ModelSerializer):

    class Meta:
        fields = '__all__'
        model = Todo


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        fields = '__all__'
        model = Category


