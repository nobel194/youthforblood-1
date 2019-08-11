



//donor registration schema

const mongoose= require('mongoose');


var event_schema= mongoose.Schema({
                                place:
                                {
                                    type:String,
                                    required:true,
                                    message: "place is required",
                                    trim:true
                                },
                                date:
                                {
                                    type:Date,
                                    required:true,
                                    message: "date is required",
                                    trim:true,
                                },
                               
                               organizer:
                                {
                                    type:String,
                                    required:true,
                                    message: "organiser is required",
                                    trim:true
                                },
                                isApproved:
                                {
                                    type:Boolean,
                                    default:false,
                                    trim:true
                                }
                               
                
});

var event_model= mongoose.model('event_model',event_schema);
module.exports= event_model;