const express = require('express')

const router = express.Router();
const path = require('path')

const connection = require('../db/MysqlConnection')


router.get("/", function (req, resp) {

    console.log("inside / request ")
    const indexPath = path.join(__dirname, '../public/index.html');
    resp.sendFile(indexPath);
    // resp.render("index")


});

router.post("/validate-login", function (req, resp) {

    console.log("request" + req.url)


    connection.mysqlConnection.query("select * from User where username=? and password=?", [req.body.uname, req.body.pwd], function (err, data, field) {

        console.log("err :", err)
        console.log("data :", data);

        if (err) {
            resp.status(500).send("Something Wrong");
        }

        if (Array.isArray(data) && data.length === 0) {
            resp.status("404").send("Not Found");
        }
        else {
            resp.render("welcomePage", { User: data[0] });
            
        }

    })





});

module.exports = router;