var http = require('http');
var MSSQLAdapter = require('./msSqlAdapter');

var connectionStringBuilder;
var response;
function accept(req, res) {
    response = res;
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
    response.setHeader("Cache-Control", "no-cache");

    var data = "";
    req.on('data', function (buffer) {
        console.log(".... Starting MSSQL Adapter at Port 9615");
        data += buffer;
    });
    req.on('end', function () {
        console.log(".... Connect DataSource Details :"+data);
        console.log(".... ");
        command = JSON.parse(data.toString());
        if (command.database == "MySQL") MySQLAdapter.process(command, onProcess);
        if (command.database == "Firebird") FirebirdAdapter.process(command, onProcess);
        if (command.database == "MS SQL") MSSQLAdapter.process(command, onProcess);
        if (command.database == "PostgreSQL") PostgreSQLAdapter.process(command, onProcess);
    });
}

var onProcess = function (result){
    response.end(JSON.stringify(result));
}

http.createServer(accept).listen(9615);
