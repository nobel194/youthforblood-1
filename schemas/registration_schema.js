



//donor registration schema

const mongoose= require('mongoose');

const { isEmail } = require('validator');

var registration_schema= mongoose.Schema({
                                name:
                                {
                                    type:String,
                                    required:true,
                                    message: "Name is required",
                                    trim:true
                                },
                                email:
                                {
                                    type:String,
                                    required:true,
                                    unique: true,
                                    message: "Email is required",
                                    trim:true,
                                    validate:[isEmail,'invalid Email']
                                },
                                gender:
                                {
                                    type:String,
                                    required:true,
                                    message: "Gender is required",
                                    trim:true
                                },
                               
                               bloodgroup:
                                {
                                    type:String,
                                    required:true,
                                    message: "Bloodgroup is required",
                                    trim:true
                                },
                                bodyweight:
                                {
                                    type:Number,
                                    required:true,
                                    trim:true,
                                    message: "Weight is required",
                                    min:[45 ,'weight should be more than 45'],
                                    max:[150,'weight should be less than 150']
                                },

                                age:
                            {
                              type:Number,
                              required:true, 
                              min:[17 ,'age should be more than 16'],
                              max:[150,'age should be less than 150']

                            },
                                address:
                                {
                                    type:String,
                                    required:true,
                                    message: "Address is required",
                                    trim:true
                                },
                                contactno:
                        
                                {
                                    type:String,
                                    required:true,
                                    trim:true,
                                    message: "Contact Number is required",
                                    min:[9800000000,'invalid Contact Number'],
                                    max:[9999999999,'invalid Contact Number']
                                },
                                imageLocation:
                                {
                                    type: String
                                }

                
});

var registration_model= mongoose.model('registration_model',registration_schema);
module.exports= registration_model;