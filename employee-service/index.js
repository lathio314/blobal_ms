var express = require('express');

var app = express();
var PORT = 8104;

app.use(express.json());



app.listen(PORT, () => console.log(`Employee Microservice  started on PORT : ${PORT}`));