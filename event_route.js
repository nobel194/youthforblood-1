
// express routing
var express= require('express');
var event_route= express.Router();
var Event = require('./schemas/event');

//path
var path= require('path');

 
event_route.get('/', async(req,res)=>
{
    let events = await Event.find({isApproved:false}); 
    let count = await Event.count();
    res.render('event_list',{events, count})
    // console.log('i come here')

});


event_route.post('/', async (req,res)=>
{
  var eventdata= {
      place: req.body.place,
      date:req.body.date,
      organizer:req.body.organizer 
  }
  var eventsave= new Event(eventdata).save();

  let events = await Event.find({isApproved:false}); 
    res.render('event_list',{events})

});

event_route.post('/event/:id', async(req, res)=>{
    console.log(req.params.id);
    await Event.findOneAndUpdate({_id:req.params.id},{isApproved:true},{upsert:true});
    res.redirect('/event');
});

module.exports = event_route;

