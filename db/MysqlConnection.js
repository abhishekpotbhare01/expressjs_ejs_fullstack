
const mysql = require('mysql')

var mysqlConnection = mysql.createConnection({

    host: '127.0.0.1',
    user: "root",
    password: "root",
    database: "expressdemo1",
    port: 3306
});
mysqlConnection.connect((err) => {

    if (err) {
        console.log("Connection failed...");
    }
    else {
        console.log("Connection successed");
    }

});

module.exports = {
    mysqlConnection
}

