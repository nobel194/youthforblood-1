// express routing
var express= require('express');
var login= express.Router();
var admin= require('../schemas/admin');
var Event = require('../schemas/event');

//path
var path= require('path');

 //get request 
login.get('/',(req,res)=>
{
    res.render('login');

})


login.post('/', async(req, res)=>{
   var admindata= await admin.find();
    
   if(admindata[0].username == req.body.username && admindata[0].password == req.body.password )
   {
    let events = await Event.find({isApproved:false}); 
    let count = await Event.count();
    res.render('success',{events, count,name: admindata[0].username})
   }
   else{
    res.send('you are  not logged in');
   }
})




module.exports= login;