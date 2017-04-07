// This command gave us access to the entire express API
var express = require('express');

// Create our app
var app = express();

// Command that goes on next line tells app which folder we 
//want to serve. The specific function app.use lets you add
// functionality to express application
 app.use(express.static('public'));

 // Start server
 app.listen(3000, function () {
    console.log('Express server is up on port 3000')
 });
