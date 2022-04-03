const express =require("express")
const cors = require('cors')

const Router =express.Router()

const Product =require("../models/product.models");





Router.use(cors())


Router.post("/",async(req,res)=>{
    try {
        const product =await Product.create(req.body);
        res.status(200).send(product);
    } catch (error) {
        res.send(error)
    }
   

});

// Router.get("/",async(req,res)=>{
//     try {
//         const products =await Product.find({});
//         res.status(200).send(products);
//     } catch (error) {
//         res.send(error)
//     }
   

// });


// Router.get("/",async(req,res)=>{
//     try {
//         const products =await Product.find({}).sort({price:1});
//         res.status(200).send(products);
//     } catch (error) {
//         res.send(error)
//     }
   

// });


Router.get("/",async(req,res)=>{
    try {
        const products =await Product.find({}).sort({price:1});
        res.status(200).send(products);
    } catch (error) {
        res.send(error)
    }
   

});


Router.get("/:id", async (req, res) => {
    try {
      const product = await Product.findById(req.params.id).lean().exec();
   
  
      return res.status(200).send(product);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  Router.patch("/:id", async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
    
  
      return res.status(200).send(product);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  




module.exports=Router