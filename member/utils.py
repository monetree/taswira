from .models import *
import psycopg2
import mysql.connector 
from sshtunnel import SSHTunnelForwarder
import json

def db_connect(connection_data):
    if connection_data['db_type'] == 'PG':
        connection = psycopg2.connect(user = connection_data['user'] , password = connection_data['password'] , host = connection_data['host'] , port = connection_data['port'] , database = connection_data['database'])
    elif connection_data['db_type'] == 'MYS':
        connection = mysql.connector.connect(user = connection_data['user'] , password = connection_data['password'] , host = connection_data['host'] , port = connection_data['port'] , database = connection_data['database'])
    return connection

def get_table_schema(connection_data, table_name, database_name ):
    connection = db_connect(connection_data)
    cursor = connection.cursor()
    cursor.execute("""DESC {}.{}""".format(database_name, table_name))
    row_headers=[x[0] for x in cursor.description]
    rv = cursor.fetchall()
    json_data=[]
    for result in rv:
            json_data.append(dict(zip(row_headers,result)))
    return json.loads(json.dumps(json_data))

def get_query_result(connection_data, query):
    connection = db_connect(connection_data)
    cursor = connection.cursor()
    cursor.execute("""{}""".format(query))
    row_headers=[x[0] for x in cursor.description]
    rv = cursor.fetchall()
    json_data=[]
    for result in rv:
            json_data.append(dict(zip(row_headers,result)))
    return json.loads(json.dumps(json_data))
    
def get_connection_details(connection_data):
    connection = db_connect(connection_data)
    cursor = connection.cursor()
    cursor.execute("""select table_catalog,table_schema,table_name,column_name from INFORMATION_SCHEMA.COLUMNS""")
    data = cursor.fetchall()
    response_data = {}
    for row in data:
        if response_data.get(row[1],None):
            if response_data[row[1]].get(row[2],None):
                pass
            else:
                response_data[row[1]][row[2]] = []
        else:
            response_data[row[1]] = {}
            response_data[row[1]][row[2]] = []
        response_data[row[1]][row[2]].append(str(row[3]))
    temp_data = []
    dic_keys =response_data.keys()
    for value in dic_keys:
        new_dic ={}
        new_dic['database_name'] = value
        new_dic['tables'] = []
        tables = response_data[value].keys()
        for table in tables:
            table_dic = {}
            table_dic['table_name'] = table
            table_dic['fields'] = response_data[value][table]
            new_dic['tables'].append(table_dic)
        temp_data.append(new_dic)
    temp_data = [ i for i in temp_data if
        i["database_name"] != "information_schema" and 
        i["database_name"] != "sys" and 
        i["database_name"] != "performance_schema" and
        i["database_name"] != "mysql" and 
        i["database_name"] != "postgres" and
        i["database_name"] != "small" and 
        i["database_name"] != "staff" and 
        "template" not in i["database_name"]
      ]
    return temp_data


def get_ssh_connection_details( connection_data , ssh_data):
    server = SSHTunnelForwarder(
        (ssh_data['host'], 22),
          ssh_username=ssh_data['username'],
          ssh_password=ssh_data['password'],
          remote_bind_address=(connection_data['host'], 5432))
    server.start()
    # with SSHTunnelForwarder(
    #       (ssh_data['host'], 22),
    #       ssh_username=ssh_data['username'],
    #       ssh_password=ssh_data['password'],
    #       remote_bind_address=(connection_data['host'], 5432)
    # ) as server:
    if connection_data['db_type'] == 'PG':
        connection = psycopg2.connect(host=connection_data['host'],
          port=server.local_bind_port,
          user=connection_data['user'],
          password=connection_data['password'],
          database=connection_data['database'])
    elif connection_data['db_type'] == 'MYS':
        connection = mysql.connector.connect(host=connection_data['host'],
          port=server.local_bind_port,
          user=connection_data['user'],
          password=connection_data['password'],
          database=connection_data['database'])

    cursor = connection.cursor()
    cursor.execute("""select table_catalog,table_schema,table_name,column_name from INFORMATION_SCHEMA.COLUMNS""")
    data = cursor.fetchall()
    connection.close()
    server.stop()
    response_data = {}
    for row in data:
        if response_data.get(row[1],None):
            if response_data[row[1]].get(row[2],None):
                pass
            else:
                response_data[row[1]][row[2]] = []
        else:
            response_data[row[1]] = {}
            response_data[row[1]][row[2]] = []
        response_data[row[1]][row[2]].append(str(row[3]))
    temp_data = []
    dic_keys =response_data.keys()
    for value in dic_keys:
        new_dic ={}
        new_dic['name'] = value
        new_dic['data'] = []
        tables = response_data[value].keys()
        for table in tables:
            table_dic = {}
            table_dic['name'] = table
            table_dic['data'] = response_data[value][table]
            new_dic['data'].append(table_dic)
        temp_data.append(new_dic)
    return temp_data