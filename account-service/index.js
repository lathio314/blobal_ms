var express = require('express');

var app = express();
var PORT = 8105;

app.use(express.json());



app.listen(PORT, () => console.log(`Account Microservice  started on PORT : ${PORT}`));