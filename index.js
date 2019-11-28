// server.js
const EXPRESS = require('express');
const APP = EXPRESS();
const PATH = require("path");

APP.get('/', function(request, response) {
    response.sendFile(PATH.join(__dirname, 'index.html'));
});

APP.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});