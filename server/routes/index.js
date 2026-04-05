const express = require('express')
const router = express.Router()

const authController = require('../controllers/auth.controller')

router.post('/auth/login', authController.login)
router.post('/auth/verify', authController.verify)

router.get('/user/contacts', (req, res) => {
  res.json({ contacts: [] })
})

module.exports = router