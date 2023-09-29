
const user_model = require('../models/user.model')

const userFindOne = (req , res) =>{
    const id = req.params.id
    user_model.userFindOne(id,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.json(result)
        }

    })
}
const userFindAll = (req , res) =>{
    user_model.userFindAll((err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.json(result)
        }

    })
}

const userCreate = (req , res) => {
    const data = req.body
    user_model.regisUser(data ,(err , results) => {
        if(err) {
            res.send(err)
        }else {
            res.send(results)
        }
    })
}

const deleteUserSame = (req , res) => {
    const username = req.params.username
    user_model.deleteUserSame(username , (err , results) => {
        if(err) {
            res.send(err)
        }else {
            res.send(results)
        }
    })
}

const deleteUserById = (req , res) => {
    const id = req.params.id
    user_model.deleteUserById(id, (err , results) => {
        if(err) {
            res.send(err)
        }else {
            res.send(results)
        }
    })
}

const updateUser = (req , res) => {
    const id = req.params.id
    const data  = req.body
    user_model.updateUser(id , data, (err , results) => {
        if(err) {
            res.send(err)
        }else {
            res.send(results)
        }
    })
}

module.exports = {userFindAll, userFindOne ,userCreate , deleteUserSame , updateUser , deleteUserById }