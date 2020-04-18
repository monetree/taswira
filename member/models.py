from django.db import models

class Company(models.Model):
    email    = models.CharField(max_length=256, null=True, blank=True)
    name     = models.CharField(max_length=256, null=True, blank=True)
    username = models.CharField(max_length=256, null=True, blank=True)
    password = models.CharField(max_length=256, null=True, blank=True)
    token    = models.CharField(max_length=256, null=True, blank=True)

class DBConnection(models.Model):
    host = models.CharField(max_length = 20 , null = False , blank = False)
    user = models.CharField(max_length = 100 , null = False , blank = False)
    password = models.CharField(max_length = 250 , null = True , blank = True)
    database = models.CharField(max_length = 250 , null = True , blank = True)
    ssh_tunnel = models.BooleanField(default = False , null = False , blank =False)
    port =  models.CharField(max_length =20,null = True , blank = True)
    db_type =  models.CharField(max_length =10,null = False , blank = False)
    company = models.ForeignKey(Company,on_delete = models.CASCADE , null = True , blank = True)

class SSHConnection(models.Model):
    host = models.CharField(max_length = 20 , null = False , blank = False)
    username = models.CharField(max_length = 100 , null = False , blank = False)
    password = models.CharField(max_length = 250 , null = True , blank = True)
    db = models.ForeignKey(DBConnection , on_delete = models.CASCADE , null = False , blank = False)
