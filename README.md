# Stimulsoft-NodeJs-Setup
This is the setup project for demonstarting inclusion of Stimulsoft Designer/Viewer in NodeJs environment


Bottomline in here is that we need to include an adapter (javascript adapter) that are specific to database vendors to 
connect Stimulsoft JS to database.
For the analogy.. these adapters are the JDBC of StimulsoftJS.

In here ,MSSQL adapter is considered.


# Some points to be noted


 1. Stimulsoft adapter will need 'mssql' npm module..Hence the following commands need to be executed to install node modules by the standards.
```
     cd  ..\stimulsoft_adapters
          npm install --save
```

2. Start the adapter . This serves as the driver script to create connection for reporting library instance.

   ``` 
    cd  ..\stimulsoft_adapters
    
    node mssql_adapter_server.js
   ```
