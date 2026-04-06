const express = require('express')
const router = express.Router()

const authController = require('../controllers/auth.controller')
const userController = require('../controllers/user.controller')

router.post('/auth/login', authController.login)
router.post('/auth/verify', authController.verify)

router.get('/user/messages/:contactId', userController.getMessages)
router.post('/user/create-message', userController.createMessage)

router.get('/user/contacts', (req, res) => {
  res.json({ contacts: [] })
})

module.exports = router