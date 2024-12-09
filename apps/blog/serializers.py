from rest_framework import serializers
from .models import *

class PostSerializers(serializers.ModelSerializer):
    
    class Meta:
        model=Post
        fields=[
            'id',
            'title',
            'slug,',
            'thumbnail',
            'description',
            'content',
            'time_read',
            'published',
            'views',
            'category'
        ]