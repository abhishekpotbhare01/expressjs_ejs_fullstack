const express = require('express')
const app = express();
const path = require('path')
const bodyparser = require('body-parser')
const routes = require('../routes/router');
const exp = require('constants');

// configure the app
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//add all static reference settings
app.set(express.static(path.join(__dirname, "public")))

//add all middlewares


