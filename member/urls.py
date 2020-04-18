from django.urls import path
from .views import (
    AddDB, DBView, get_table_columdataView, get_db_data, get_db_details,
    Auth, Datasource, 
)

urlpatterns = [
    path('auth/register/', Auth.register),
    path('auth/login/', Auth.login),
    path('datasource/database/', Datasource.database),
    path('datasource/table-schema/', Datasource.get_table_details),
    path('datasource/query-builder/', Datasource.query_builder),
    path('database/add-db/', AddDB),
    path('db_list/', DBView),
    path('get_table_columdata/',get_table_columdataView),
    path('get_db_data/',get_db_data),
    path('get_db_details/',get_db_details),
]
