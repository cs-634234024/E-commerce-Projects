const express = require('express')
const router = express.Router()
const user_controller = require('../controllers/user.controller')

router.get('/' , user_controller.userFindAll)
router.get('/:id' , user_controller.userFindOne)
router.post('/' , user_controller.userCreate)
router.delete('/:username' , user_controller.deleteUserSame)
router.delete('/:id' , user_controller.deleteUserById)
router.patch('/:id' , user_controller.updateUser)

module.exports = router



