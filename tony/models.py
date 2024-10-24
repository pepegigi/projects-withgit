from django.db import models

# Create your models here.

class Blog(models.Model):
    title = models.CharField(max_length=100)
    subtitle=models.TextField()
    desc= models.TextField()
    img = models.ImageField(upload_to='pics')
    
    class Meta:
        ordering = ['title'] 