var express = require("express");

var app = express();

app.get("/", function(req, res, next){
    res.send("Node at IdWeaver by Maxime");
});

var port = process.env.PORT || 3000;
app.listen(port, function(err){
   if(err){
       console.dir(err);
   } else {
       console.log("The server is listening");
   }
});