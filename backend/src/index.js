var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.get('/pjesme', function(req, res){
   // ovo moze i iz baze
   let pjesme = [
     "pjesma1",
     "pjesma2",
   ]
   res.send(pjesme);
});

app.listen(3000);