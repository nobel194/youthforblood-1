// express routing
var express= require('express');
var reg_route= express.Router();
var multer = require('multer')
var upload = multer({ dest: 'public/photos/' });
//path
var path= require('path');

//schema required
 var register= require('./schemas/registration_schema');

 //get request 
reg_route.get('/',(req,res)=>
{
    res.sendFile(path.join(__dirname,"public","reg.html"));

})

//post request
reg_route.post('/', upload.single('avatar'), async(req,res)=>

    {try{
        //console.log(req.body);
        //console.log(req.file);
        var register1= new register(); //object creation
         register1.name= req.body.name;
         register1.email= req.body.email;  
         register1.gender=req.body.gender;
         register1.age=req.body.age;
         register1.bloodgroup=req.body.bloodgroup;
         register1.state=req.body.state;
         register1.zone=req.body.zone;
         register1.district=req.body.district;
         register1.bodyweight=req.body.bodyweight;
         register1.address=req.body.address;
         register1.contactno=req.body.contactno;
         register1.imageLocation = req.file.filename;
         var data= await register1.save();
  
          res.render("2",data);
         // res.render("2", { name: data.name,age:data.age,gender:data.gender, fileName: data.imageLocation });
         // res.send("sucess");
    }
    catch(err)
    {
        console.log(err);
        res.send({ error: err.message });
        
    }
    }



)


reg_route.post('/search', async(req,res)=>{
let groupdata= await register.find({bloodgroup:req.body.requiredblood });
    res.render("1",{groupdata}); 

})


module.exports= reg_route;