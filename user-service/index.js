var express = require('express');

var app = express();
var PORT = 8101;

app.use(express.json());



app.listen(PORT, () => console.log(`User Microservice  started on PORT : ${PORT}`));