const product_model = require("../models/products.model")

const createProduct = (req , res) => {
    const product = req.body
    product_model.createProducts(product , (err , results) =>{
        if(err) {
            res.send(err)
            return
        }
        res.send(results)
    })
}

const getAllProducts = (req, res) => {
    product_model.getAllProducts((err, results) => {
        if(err){
            res.send(err)
        }
        res.json(results)
    })
}

const newProduct = (req , res) => {
    product_model.newProduct_Filter((err , results) => {
        if(err){
            res.send(err)
        }
        res.json(results)
    })

}

module.exports = {createProduct , getAllProducts , newProduct}
