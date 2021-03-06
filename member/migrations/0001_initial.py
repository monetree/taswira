# Generated by Django 2.2.12 on 2020-04-13 17:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(blank=True, max_length=256, null=True)),
                ('name', models.CharField(blank=True, max_length=256, null=True)),
                ('username', models.CharField(blank=True, max_length=256, null=True)),
                ('password', models.CharField(blank=True, max_length=256, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='DBConnection',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('host', models.CharField(max_length=20)),
                ('user', models.CharField(max_length=100)),
                ('password', models.CharField(blank=True, max_length=250, null=True)),
                ('database', models.CharField(blank=True, max_length=250, null=True)),
                ('ssh_tunnel', models.BooleanField(default=False)),
                ('port', models.CharField(blank=True, max_length=20, null=True)),
                ('db_type', models.CharField(max_length=10)),
                ('company', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='member.Company')),
            ],
        ),
    ]
