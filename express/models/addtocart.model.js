const mongoose =require("mongoose");

const cartproductSchema = mongoose.Schema(
    {
        imageUrl:{type:String,require:true}, 
        name: {type:String,require:true}, 
        brand: {type:String,require:true}, 
        price: {type:String,require:true}, 
        strikedOffPrice: {type:String,require:true}, 
        type:{type:String,require:true},  
        userid:{type:mongoose.Schema.Types.ObjectId,ref:"user"}
    }
);

module.exports =mongoose.model("cart",cartproductSchema)