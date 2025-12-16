//filename: restAPI_dev.js
var express = require("express");
var app = express();

var api_routes = require('./api_routes_dev.js');
app.use('/api', api_routes);

app.use('/demo', express.static('front_end'));
//Start the server.

app.listen(3000, function () {
    console.log("Server is runnning")
    //console.log(employee);
})
