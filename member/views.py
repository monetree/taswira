import json
import jwt
from django.http import (
    JsonResponse, 
    HttpResponseBadRequest, 
    HttpResponseNotAllowed,
    HttpResponseServerError,
)
from .models import DBConnection, SSHConnection, Company
from django.contrib.auth.hashers import make_password, check_password
from .utils import get_connection_details, get_ssh_connection_details, get_table_schema, get_query_result


class Auth:
    def register(request):
        if request.method == "POST":
            body               = request.body
            convert            = body.decode("utf-8")
            data               = json.loads(convert)

            email    = data["email"]
            name     = data["name"]
            username = data["username"]
            password = data["password"]

            obj = Company.objects.create(
                email    = email,
                name     = name,
                username = username,
                password = make_password(data['password']),
                token    = jwt.encode({'username': username}, 'secret', algorithm='HS256').decode('ascii')
            )

            if obj:
                return JsonResponse({"code":200, "msg":"success"})
            else:
                return HttpResponseBadRequest(JsonResponse({"code": 500, "msg": "intsernal server error"}))

        else:
            return HttpResponseBadRequest( JsonResponse({"code":405, "msg": "bad request"}))
    
    def login(request):
        if request.method == "POST":
            body               = request.body
            convert            = body.decode("utf-8")
            data               = json.loads(convert)

            username = data["username"]
            password = data["password"]

            count = Company.objects.filter(
                username = username
            ).count()
            if not count:
                return HttpResponseBadRequest(JsonResponse({"code": 500, "msg": "Login failed"}))

            encoded_password = list(Company.objects.filter(username = username).values('password'))[0]["password"]
            match = check_password(password, encoded_password)

            if match:
                user = list(Company.objects.values('id','name', 'username', 'token').order_by("-id")[:1])[0]
                return JsonResponse({"code":200, "msg":"success", "company": user})
            else:
                return HttpResponseBadRequest(JsonResponse({"code": 500, "msg": "Login failed"}))
        else:
            return HttpResponseBadRequest( JsonResponse({"code":405, "msg": "bad request"}))

class Datasource:
    def database(request):
        if request.method == "POST":
            body               = request.body
            convert            = body.decode("utf-8")
            data               = json.loads(convert)

            host     = data["host"]
            user     = data["user"]
            password = data["password"]
            database = data["database"]
            db_type  = data["db_type"]
            port     = data["port"]
            company  = int(data["company"])

            obj = DBConnection.objects.create(
                host     = host,
                user     = user,
                password = password,
                database = database,
                db_type  = db_type,
                port     = port,
                company_id  = company
            )

            if obj:
                return JsonResponse({"code":200, "msg":"success"})
            else:
                return HttpResponseBadRequest(JsonResponse({"code": 500, "msg": "Login failed"}))

        else:
            company_id = request.GET.get("company_id")
            id = request.GET.get("id")
            if id:
                response_data = {}
                connection_data = list(DBConnection.objects.filter(id=id).values())[0]
                if connection_data['ssh_tunnel']:
                    ssh_data = list(SSHConnection.objects.filter(db_id = id).values())[0]
                    response_data['data'] = get_ssh_connection_details( connection_data , ssh_data)
                else:
                    response_data['data'] = get_connection_details(connection_data)
                return JsonResponse(response_data)
            else:
                res = list(DBConnection.objects.filter(company_id=company_id).values())
                return JsonResponse(res, safe=False)

    def get_table_details(request):
        id         = request.GET.get("id")
        table_name = request.GET.get("table_name")
        database_name = request.GET.get("database_name")
        connection_data = list(DBConnection.objects.filter(id=id).values())[0]
        res = get_table_schema(connection_data, table_name, database_name)
        return JsonResponse(res, safe=False)

    def query_builder(request):
        id    = request.GET.get("id")
        query = request.GET.get("query")
        connection_data = list(DBConnection.objects.filter(id=id).values())[0]
        res   = get_query_result(connection_data, query)
        return JsonResponse(res, safe=False)

def AddDB(request):

    if request.method == 'POST':
        response_data = {}
        company = request.user.userprofile.company
        if request.data.get('connection_data',None):
            if request.data['connection_data'].get('db_type',None) in ['PG','MYS']:
                connection_data = request.data['connection_data']
                if request.data.get('ssh_data',None):
                    ssh_data = request.data['ssh_data']
                    check_connection = get_details_ssh( connection_data , ssh_data)
                    if connection_data.get('id',None):
                        db_obj = DBConnection.objects.filter(id = connection_data['id'] , company = company)[0]
                        db_obj.host=connection_data['host']
                        db_obj.user=connection_data['user']
                        db_obj.password = connection_data['password']
                        db_obj.database = connection_data['database']
                        db_obj.db_type = connection_data['db_type']
                        db_obj.port = connection_data['port']
                        db_obj.ssh_tunnel = True
                        db_obj.save()
                        if SSHConnection.objects.filter(db =  db_obj).exists():
                            ssh_data_obj = SSHConnection.objects.filter(db =  db_obj)[0]
                            ssh_data_obj.host = ssh_data['host'] 
                            ssh_data_obj.username = ssh_data['username']
                            ssh_data_obj.password = ssh_data['password']
                            ssh_data_obj.save()
                        else:
                            SSHConnection.objects.create(host = ssh_data['host'] , username = ssh_data['username'],password = ssh_data['password'] , db = db_obj)
                    else:
                        db_obj = DBConnection.objects.create(host=connection_data['host'],user=connection_data['user'],password = connection_data['password'],database = connection_data['database'],db_type = connection_data['db_type'],port = connection_data['port'],company = company,ssh_tunnel = True)
                        SSHConnection.objects.create(host = ssh_data['host'] , username = ssh_data['username'],password = ssh_data['password'] , db = db_obj)
                else:
                    check_connection = get_details(request.data['connection_data'])
                    if connection_data.get('id',None):
                        db_obj = DBConnection.objects.filter(id = connection_data , company = company)[0]
                        db_obj.host=connection_data['host'],
                        db_obj.user=connection_data['user'],
                        db_obj.password = connection_data['password'],
                        db_obj.database = connection_data['database'],
                        db_obj.db_type = connection_data['db_type'],
                        db_obj.port = connection_data['port'],
                        db_obj.company = company,
                        db_obj.ssh_tunnel = True
                        db_obj.save()
                        ssh_data_obj = SSHConnection.objects.filter(db =  db_obj)
                        ssh_data_obj.delete()
                    else:
                        db_obj = DBConnection.objects.create(host=connection_data['host'],user=connection_data['user'],password = connection_data['password'],database = connection_data['database'],db_type = connection_data['db_type'],port = connection_data['port'],company = company,ssh_tunnel = False)
                response_data['db_id'] = int(db_obj.id)
        if response_data != {}:
            return Response(response_data , status = status.HTTP_200_OK)
        if request.data.get('db_id',None) and request.data.get('action',None):
            if request.data['action'] == 'DEL':
                db_obj = DBConnection.objects.filter(id = request.data['db_id'] , company = company)[0]
                if SSHConnection.objects.filter(db =  db_obj).exists():
                    ssh_data_obj = SSHConnection.objects.filter(db =  db_obj)[0]
                    ssh_data_obj.delete()
                db_obj.delete()
                return Response( status = status.HTTP_204_NO_CONTENT)
            return Response({"detail":"Something went wrong"} , status = status.HTTP_400_BAD_REQUEST)
    else:
        return JsonResponse({"code":400, "msg":"bad request"})

def DBView(request):
    res = list(DBConnection.objects.values())
    return JsonResponse(res, safe=False)

def get_db_details(request):
    if request.method == 'POST':
        company = request.user.userprofile.company
        response_data = {}
        if request.data.get('db_id',None):
            connection_data = DBConnection.objects.filter(id = request.data['db_id'] , company = company).values('id','host','user','database','ssh_tunnel','port','db_type','company')[0]
            response_data['connection_data'] = connection_data
            if connection_data['ssh_tunnel']:
                ssh_data = SSHConnection.objects.filter(db_id = connection_data['id']).values('host','username')[0]
                response_data['ssh_data'] = ssh_data 
            return Response(response_data,status = status.HTTP_200_OK)
        return Response({"detail":"You must enter db id"} , status = status.HTTP_400_BAD_REQUEST)

def get_db_data(request):
    if request.method == 'POST':
        company = request.user.userprofile.company
        response_data = {}
        if ((request.data.get('table_name',None) and request.data.get('colums',None) and request.data.get('table_schema',None)) or request.data.get('query',None)) and request.data.get('db_id',None) :
            connection_data = DBConnection.objects.filter(id = request.data['db_id'] , company = company).values()[0]
            if request.data.get('query',None):
                query = request.data['query']
                table_name = connection_data['database']
            else:
                feild_needed = request.data['colums']
                table_name = request.data['table_name']
                table_schema = request.data['table_schema']
                query = create_query(feild_needed,table_schema ,table_name )     
            if connection_data['ssh_tunnel']:
                ssh_data = SSHConnection.objects.filter(db_id = connection_data['id']).values()[0]
                response_data['data'] = get_table_details_ssh( query ,table_name , ssh_data , connection_data , request.user)
            else:
                response_data['data'] = get_table_details(query , table_name  , connection_data,request.user)
            response_data['sheet_name'] = [table_name]
            response_data['status'] =  200
            return Response(response_data,status = status.HTTP_200_OK)
        return Response({"detail":"you must enter table name and colums"} , status = status.HTTP_400_BAD_REQUEST)

def get_table_columdataView(request):
    if request.method == 'POST':
        df = None   
        if request.data.get('sheet_id',None):
            sheet_obj = SheetDetails.objects.filter(id = request.data['sheet_id'])[0]
            file_location_path = os.path.join(SheetFileLocation,sheet_obj.file_name)
            df = pd.read_json(file_location_path,orient='records',dtype=False)
            if request.data.get('column',None):
                response_data ={}
                response_data['column'] = request.data['column']
                value = get_table_data(df,request.data['column'])
                response_data['value'] = value
                return Response(response_data,status = status.HTTP_200_OK)
            else:
                return Response({"detail":"No column in the request"}, status = status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"detail":"some things went wrong"}, status = status.HTTP_400_BAD_REQUEST)