
const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routerStudent = require("./router/student")

app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');
app.set('views','views');

app.use(routerStudent);

app.use('/',(req,res,next)=>{
    res.send("<h1>Page Home</h1>");

});

const server = http.createServer(app);
server.listen(3000);