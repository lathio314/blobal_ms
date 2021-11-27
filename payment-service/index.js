var express = require('express');

var app = express();
var PORT = 8102;

app.use(express.json());



app.listen(PORT, () => console.log(`Payment Microservice  started on PORT : ${PORT}`));