//express server
var express= require('express');
var app= express();
//schema required
var register = require('./schemas/registration_schema');
var nearby= require('./schemas/donorsnear_schema');
var Event = require('./schemas/event');

//mongoose connection
var mongoose= require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true });

//View Engine
app.set("view engine", "hbs");

//body parser 
var bodyparser= require('body-parser');
app.use(bodyparser.urlencoded({ extended:true }));

//path 
var path= require('path');

//middleware
app.use(express.static(path.join(__dirname,"public")));

//var router= require('./route1');
//app.use(router);

//router yo home page
var home_routes= require('./home_route');
app.use(home_routes);

var login = require('./controller/login');
app.use('/login', login);
//router to donor registration
var reg_routes= require('./registration_route');
app.use(reg_routes);
//router to donors nearby
var donornearby_routes= require('./donors_nearby');
app.use(donornearby_routes);
//router to events//


var event_route = require('./event_route');
app.use('/event',event_route);

app.get('/event/add',function(req,res){
    res.render('event')
});

app.get('/event/:id', async(req, res)=>{
    let eventid = await Event.findOne({_id:req.params.id});
    eventid.isApproved = true;
    eventid.save();
    return res.render('success');
});

/*app.get('/registredUsers', (req, res) => {
    register.find({}, (err, data) => {
        //find{ name: req.name}
        // data = data[6];
        console.log(data);
        // res.render("1", { name: data.name,age:data.age,gender:data.gender, fileName: data.imageLocation });
        res.render('1', {data: data})
    });
    
})*/

app.listen(3000);

