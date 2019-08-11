



//donor nearby schema

const mongoose= require('mongoose');



var donorsnear_schema= mongoose.Schema({
                                patientname:
                                {
                                    type:String,
                                    required:true,
                                    message: "Name is required",
                                    trim:true
                                },
                              
                                gender:
                                {
                                    type:String,
                                    required:true,
                                    message: "Gender is required",
                                    trim:true
                                },
                               
                                requiredblood:
                                {
                                    type:String,
                                    required:true,
                                    message: "Bloodgroup is required",
                                    trim:true                          
                                },
                                number:
                                {
                                    type:String,
                                    required:true,
                                    trim:true,
                                    message: "Contact Number is required",
                                    min:[9800000000,'invalid Contact Number'],
                                    max:[9999999999,'invalid Contact Number']
                                },
                                hospitalname:
                                {
                                    type:String,
                                    trim:true
                                },
                                hospitaladdress:
                                {
                                    type:String, 
                                    trim:true
                                }
                                
                
});

var donorsnear_model= mongoose.model('donorsnear_model',donorsnear_schema);
module.exports= donorsnear_model;