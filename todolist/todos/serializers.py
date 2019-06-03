from rest_framework import serializers

from .models import (
    Todo,
    Category,
)

class CategorySerializer(serializers.ModelSerializer):
    
    class Meta:
        fields = ('id', 'name', 'created_at')
        model = Category


class TodoSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        fields = ('id','title','content','due_date','category')
        model = Todo


