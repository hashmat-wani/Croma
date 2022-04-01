const cors = require('cors')
const express =require("express");

const Userprofile =require("../models/profile.model");

const Router =express.Router()
Router.use(cors())

Router.post("/",async(req,res)=>{
  
    try {
        const profile = await Userprofile.create(req.body);
        res.status(200).send(profile)  
        console.log(req.body)  
    } catch (error) {
        res.status(500).send({message:error.message})
    }
})

Router.get("/",async(req,res)=>{
  
    try {
        const profile = await Userprofile.find();
        res.status(200).send(profile)  
        console.log(req.body)  
    } catch (error) {
        res.status(500).send({message:error.message})
    }
})

module.exports=Router