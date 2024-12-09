from django.db import models

# Create your models here.

class Category(models.Model):
    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
        
    name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True)
    views = models.IntegerField(default=0, blank=True)
    
    #Esto permite tener subcategorias autorreferenciales
    parent = models.ForeignKey('self', related_name='children', on_delete=models.CASCADE, blank=True, null=True)
    
    #hace referencia al modelo y se ve por su nombre en el administrador de django
    def __str__(self):
        return self.name
    
    def get_view_count(self):
        views = ViewCount.objects.filter(category=self).count()
        return views
    
#clase para conteo de visitas
class ViewCount(models.Model):
    category = models.ForeignKey(Category, related_name='category_view_count', on_delete=models.CASCADE)
    ip_addres = models.CharField(max_length=255)
    
    def __str__(self):
        return f"{self.ip_addres}"
    