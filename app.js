const express = require('express')
const app = express();
const path = require('path')
const bodyparser = require('body-parser')
const routes = require('./routes/router');
const exp = require('constants');
const connection = require('./db/MysqlConnection')



// configure the app
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.set(express.static(path.join(__dirname, "public")))

//add all middlewares

app.use(bodyparser.urlencoded({ extended: false }))
app.use("/css", express.static(path.resolve(__dirname, "public/css")));

app.use("/js", express.static(path.resolve(__dirname, "public/js")));

app.use("/", routes);





//start the server

app.listen(3001, function () {
    console.log("Server started at port 3001");
});

module.exports = {
    app
}

