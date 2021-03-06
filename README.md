# HardwareSensorSystem

## Preparation for development

Start the MSSQL Server (Developer) with

```
$ docker-compose up -d
```

### Notice

To remove database data, execute command

```
$ docker volume rm hardwaresensorsystem_db
```

## Entity Framework Core migrations

Change to the directory .\src\HardwareSensorSystem and execute the following commands

```
$ dotnet ef migrations add InitialCreate --context ApplicationDbContext --output-dir Migrations\ApplicationDb
$ dotnet ef migrations add InitialCreate --context ConfigurationDbContext --output-dir Migrations\ConfigurationDb
$ dotnet ef migrations add InitialCreate --context PersistedGrantDbContext --output-dir Migrations\PersistedGrantDb
$ dotnet ef migrations add InitialCreate --context SensorTechnologyDbContext --output-dir Migrations\SensorTechnologyDb
```

To manually update the database to the migrations, run the following commands

```
$ dotnet ef database update --context ApplicationDbContext
$ dotnet ef database update --context ConfigurationDbContext
$ dotnet ef database update --context PersistedGrantDbContext
$ dotnet ef database update --context SensorTechnologyDbContext
```
