const connection = require('../configs/db.config')
const table = "products"

const getAllProducts = (result) => {
    const sql = `SELECT * FROM ${table}`
    connection.query(sql , (err, products) => {
        if(err){
            result(err , null)

        }else {
            result(null , products)
        }
    })
}

const createProducts = (product , result) => {
    const sql = `INSERT INTO ${table} SET ? `
     connection.query(sql , [product] , (err, results) => {
        if(err) {
            result(err , null)
        }else{
            result(null , {status : "ok" , message: "Inserted Product Successfully!"})
        }
     })
}

module.exports = {createProducts , getAllProducts}