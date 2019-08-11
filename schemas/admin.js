



//donor nearby schema

const mongoose= require('mongoose');



var admin= mongoose.Schema({
                                username:
                                {
                                    type:String,
                                    required:true,
                                    message: "username is required",
                                    trim:true
                                },
                              
                                password:
                                {
                                    type:String,
                                    required:true,
                                    message: "password is required",
                                    trim:true
                                }}
                               
);

var admin_model= mongoose.model('admin_model',admin);
module.exports= admin_model;