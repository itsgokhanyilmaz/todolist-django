
from django.contrib import admin
from .models import Category, Todo


class CategoryAdmin(admin.ModelAdmin):

    list_display = [
        'name',
        'created_at',
    ]

    list_filter = ['created_at']
    search_fields = ['name']

    class Meta:
        model = Category


class TodoAdmin(admin.ModelAdmin):

    list_display = [
        'title',
        'content',
        'created_at',
        'due_date',
        'category',
    ]

    list_filter = ['created_at']
    search_fields = ['title', 'category', 'content']

    class Meta:
        model = Todo


admin.site.register(Category, CategoryAdmin)
admin.site.register(Todo, TodoAdmin)

