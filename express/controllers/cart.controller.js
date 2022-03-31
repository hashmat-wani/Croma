const express =require("express")

const Router =express.Router()

const Cart =require("../models/addtocart.model");


Router.post("/",async(req,res)=>{
    try {
        const cart =await Cart.create(req.body);
        res.status(200).send(cart);
    } catch (error) {
        res.send(error)
    }
   

});

Router.get("/",async(req,res)=>{
    try {
        const cart =await Cart.find({});
        res.status(200).send(cart);
    } catch (error) {
        res.send(error)
    }
   

});


module.exports=Router