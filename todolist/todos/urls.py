from django.contrib import admin
from django.urls import path, include

from .views import (
    ListTodo,
    DetailTodo,
    ListCategory,
    DetailCategory
)

urlpatterns = [

    path('todos', ListTodo.as_view()),
    path('todos/<int:pk>', DetailTodo.as_view()),

    path('categories', ListCategory.as_view()),
    path('categories/<int:pk>', DetailCategory.as_view()),

]
