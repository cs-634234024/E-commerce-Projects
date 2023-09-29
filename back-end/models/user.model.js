const connection = require('../configs/db.config')
const table = "users"
const bcrypt = require('bcrypt')
const saltRound = 10

// Get user all
const userFindAll = (result) =>{
    const sql = `SELECT * FROM ${table} `
    connection.query(sql,(err,user)=>{
        if(err){
            result(err , null)
            return;
        }else{
            result(null , user)
        }
    })

}
// Get user by id or username 
const userFindOne = (id , result) =>{
    const sql = `SELECT * FROM ${table} WHERE user_id = ?`
    connection.query(sql, [id],(err,user)=>{
        if(err){
            result(err , null)
            return;
        }else{
            result(null , user)
        }
    })

}
// Create user
const regisUser = (data , result) => {
    const username = data.username
    const salt = bcrypt.genSaltSync(saltRound )
    data.password = bcrypt.hashSync(data.password , salt)
    const sql = `SELECT COUNT(username) AS count FROM ${table} WHERE username = ?`
    connection.query(sql ,[username] , (err , user)=> {
        if(err){
            result(err , null)
        }else{
            const count = user[0].count
            if(count > 0){
                result(null , {status : "Error" , message : "username have already"})
            }else{
                const sql = `INSERT INTO ${table} SET ?`
                connection.query(sql , [data] ,(err, results) => {
                    if(err){
                        result(err , null)
                    }else{
                        result(null , {status : "ok" , message : "inserted data successfully"})
                    }
                })
            }
        }
    })


}
// delete username same 
const deleteUserSame = (data , result) => {
    const username = data
    const sql = `DELETE FROM ${table} WHERE username = ?`
    connection.query(sql , [username] , (err , results) => {
        if(err) {
            result(err , null)
        }else {
            result(null , {status : "ok" , message : "Deleted data successfully "})
        }
    })
}
const deleteUserById = (id , result) => {
    const sql = `DELETE FROM ${table} WHERE user_id = ?`
    connection.query(sql , [id] , (err , results) => {
        if(err) {
            result(err , null)
        }else {
            result(null , {status : "ok" , message : "Deleted data successfully "})
        }
    })
}


// Update User 

const updateUser = (id ,data, result) => {
    const sql = `UPDATE ${table} SET ? WHERE user_id = ?`
    connection.query(sql , [data , id] , (err , results) => {
        if(err) {
            result(err , null)
        }else {
            result(null , {status : "ok" , message : "Update data successfully "})
        }
    })
}

module.exports = {userFindAll, userFindOne , regisUser , deleteUserSame , updateUser , deleteUserById}