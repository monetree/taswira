# Generated by Django 2.2.12 on 2020-04-13 17:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('member', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='SSHConnection',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('host', models.CharField(max_length=20)),
                ('username', models.CharField(max_length=100)),
                ('password', models.CharField(blank=True, max_length=250, null=True)),
                ('db', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='member.DBConnection')),
            ],
        ),
    ]
