var express = require('express');
var cors = require('cors');
var proxy = require('express-http-proxy');

var app = express();
var PORT = 8100;
var USER_SERVCE_BASE_URL = 'htpp://localhost:8101';
var ACCOUNT_SERVCE_BASE_URL = 'htpp://localhost:8102';
var OPERATON_SERVCE_BASE_URL = 'htpp://localhost:8103';
var EMPLYEE_SERVCE_BASE_URL = 'htpp://localhost:8104';
var PAYMENT_SERVCE_BASE_URL = 'htpp://localhost:8105';

app.use(cors());
app.use(express.json());

app.use('/', proxy(USER_SERVCE_BASE_URL));
app.use('/accounts', proxy(ACCOUNT_SERVCE_BASE_URL));
app.use('/operaton', proxy(OPERATON_SERVCE_BASE_URL));
app.use('/employee', proxy(EMPLYEE_SERVCE_BASE_URL));
app.use('/payment', proxy(PAYMENT_SERVCE_BASE_URL));

app.listen(PORT, () => console.log(`Gateway  started on PORT : ${PORT}`));