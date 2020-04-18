from django.contrib import admin
from .models import Company, DBConnection, SSHConnection

admin.site.register(Company)
admin.site.register(DBConnection)
admin.site.register(SSHConnection)