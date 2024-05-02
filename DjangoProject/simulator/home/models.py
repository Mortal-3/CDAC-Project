from django.db import models
# from datetime import datetime
# Create your models here.
# makemigrations = create  changes and store in a file
# migrate = apply the pending the changes by migrations
class Contact(models.Model):
    # sno = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    email = models.EmailField( max_length=60)
    phone =models.CharField(max_length=10)
    desc = models.TextField()
    date=models.DateField(auto_now_add=True)
    
    def __str__(self):
        return (" Name: "+self.name)

  


