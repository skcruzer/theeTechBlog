const router = require('express').Router()
const { Post, User, Review } = require('../models')
const passport = require('passport')

// get all reviews
router.get('/reviews', passport.authenticate('jwt'), async function (req, res) {
  const reviews = await Review.findAll({ include: [Post] })
  res.json(reviews)
})

// create a review
router.post('/reviews', passport.authenticate('jwt'), async function (req, res) {
  const review = await Review.create(req.body)
  res.json(review)
})

module.exports = router