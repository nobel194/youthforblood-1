
// express routing
var express= require('express');
var home_route= express.Router();

//path
var path= require('path');

 
home_route.get('/',(req,res)=>
{
    res.sendFile(path.join(__dirname,"public","index.html"));

}
)
module.exports= home_route;