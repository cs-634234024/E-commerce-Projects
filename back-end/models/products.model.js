const connection = require('../configs/db.config')
const table = "products"

const getAllProducts = (result) => {
    const sql = `SELECT * FROM ${table}`
    connection.query(sql, (err, products) => {
        if (err) {
            result(err, null)

        } else {
            result(null, products)
        }
    })
}

const createProducts = (product, result) => {
    const sql = `INSERT INTO ${table} SET ? `
    connection.query(sql, [product], (err, results) => {
        if (err) {
            result(err, null)
        } else {
            result(null, { status: "ok", message: "Inserted Product Successfully!" })
        }
    })
}

const newProduct_Filter = (result) => {
    const sql = `SELECT * FROM ${table} ORDER BY product_id DESC`
    connection.query(sql, (err, results) => {
        if (err) {
            result(err, null)
        } else {
            result(null, results)
        }
    })
}
const   topRatingProduct_Filter = (result) => {
    const sql = `SELECT * FROM ${table} ORDER BY p_rating DESC`
    connection.query(sql, (err, results) => {
        if (err) {
            result(err, null)
        } else {
            result(null, results)
        }
    })
}
const   menProduct_Filter = (result) => {
    const sex = 'men'
    const sql = `SELECT * FROM ${table} WHERE p_type = 'men'`
    connection.query(sql, (err, results) => {
        if (err) {
            result(err, null)
        } else {
            result(null, results)
        }
    })
}
const   femenProduct_Filter = (result) => {
    const sex = 'men'
    const sql = `SELECT * FROM ${table} WHERE p_type = 'femen'`
    connection.query(sql, (err, results) => {
        if (err) {
            result(err, null)
        } else {
            result(null, results)
        }
    })
}

module.exports = { createProducts, getAllProducts, newProduct_Filter, topRatingProduct_Filter , menProduct_Filter , femenProduct_Filter}