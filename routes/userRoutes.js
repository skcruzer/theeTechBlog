const router = require('express').Router()
const { User } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

// route for user to register by entering username and password
router.post('/users/register', (req, res) => {
  const {
    username
    // any other properties you need
  } = req.body

  User.register(new User({
    username
    // any other properties you need
  }), req.body.password, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

// route for user to login with username and password
router.post('/users/login', (req, res) => {
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) { console.log(err) }
    res.json(user ? jwt.sign({ id: user.id }, process.env.SECRET) : null)
  })
})

router.get('/users/profile', passport.authenticate('jwt'), (req, res) => res.json(req.user))

module.exports = router
