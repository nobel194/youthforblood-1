// express routing
var express= require('express');
var donors_nearby= express.Router();
var search= require('./registration_route');

//path
var path= require('path');

//schema required
var register= require('./schemas/registration_schema');

 //get request 
 donors_nearby.get('/',(req,res)=>
{
    res.sendFile(path.join(__dirname,"public","dons_nearby.html"));

})

search.get('/',async(req,res)=>
{
   try{
        console.log(req.body);
    const data= await register.find({bloodgroup:req.params.bloodgroup });
    //res.send(data);
    res.render('1', {data: data})
}
 catch(error)
 {
     res.send(error);
 }
   
 /*app.get('/registredUsers', (req, res) => {
    register.find({}, (err, data) => {
        //find{ name: req.name}
        // data = data[6];
        console.log(data);
        // res.render("1", { name: data.name,age:data.age,gender:data.gender, fileName: data.imageLocation });
        res.render('1', {data: data})
    });
    
})*/

})


module.exports= donors_nearby;