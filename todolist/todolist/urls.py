from django.contrib import admin
from django.urls import path, include
from rest_framework_swagger.views import get_swagger_view


schema_view = get_swagger_view(title='TODOLIST API')

urlpatterns = [
    path('swagger/', schema_view),
    path('admin/', admin.site.urls),
    path('api/', include('todos.urls')),
]
