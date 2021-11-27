var express = require('express');

var app = express();
var PORT = 8103;

app.use(express.json());



app.listen(PORT, () => console.log(`Operatn Microservice  started on PORT : ${PORT}`));