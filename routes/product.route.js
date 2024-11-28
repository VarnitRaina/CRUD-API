const express=require('express')
const Product=require("../models/products.models")
const router=express.Router();
const {getProducts,getProduct,createProduct,updateProduct,deleteProduct}=require('../controllers/product.controller')


router.get('/',getProducts);

router.get('/:id',getProduct)

router.post("/",createProduct)

router.patch("/:id",updateProduct)

router.delete("/:id",deleteProduct)








module.exports=router;