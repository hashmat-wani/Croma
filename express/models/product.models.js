const mongoose =require("mongoose");

const productSchema = mongoose.Schema(
    {
        imageUrl:{type:String,require:true}, 
        name: {type:String,require:true}, 
        brand: {type:String,require:true}, 
        price: {type:String,require:true}, 
        strikedOffPrice: {type:String,require:true}, 
        type:{type:String,require:true},  
    }
);

module.exports =mongoose.model("product",productSchema)