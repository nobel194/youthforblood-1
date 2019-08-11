var express= require('express');
var router=express.Router();

var path = require('path');



var apple= require('./schemas/schema');

router.get('/',(req,res)=>
{
    res
    .status(200)
    .sendFile(path.join(__dirname,"public","first.html"));
}
)
router.post('/',async(req,res)=>

{try{
    console.log(req.body);
    var ball= new apple();
     ball.name= req.body.name;
     ball.age= req.body.age;
     ball.gender=req.body.gender;
      await ball.save();
      res.send(ball);
}
catch(err)
{
    res.sendStatus(404);
}


}
)
module.exports= router;