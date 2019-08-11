const mongoose= require('mongoose');
var my_schema= mongoose.Schema({
                                name:
                                {
                                    type:String,
                                    required:true
                                },
                                age:
                                {
                                    type:Number,
                                    required:true
                                },
                                gender:
                                {
                                    type:String,
                                    required:true
                                }
});

var my_model= mongoose.model('my_model',my_schema);
module.exports= my_model;