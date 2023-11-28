# Event-Management-System
## Web-based Event Management System.
Technologies: Frontend: Angular 16

Backend: C# .NET6

Database: MySQL

ORM: EntityFramework


## Versions:

Angular CLI: 16.2.9

Node: 18.18.2

Package Manager: npm 9.8.1

Angular 16.2.12

.Net: 6.0

# Startup commands

## CMD commands

dotnet tool install dotnet-ef -g

sqllocaldb create ems

sqllocaldb start ems

dotnet ef migrations add NAME

dotnet ef database update

### Certs problem:

dotnet tool update dotnet-dev-certs -g

## Azure Data Studio

New connection

Server: (localdb)\ems

Database: EventManagementSystem


## Run project from cmd

backend: dotnet watch run

frontend: ng serve
