const router = require('express').Router()
const { Post, User, Review } = require('../models')
const passport = require('passport')

// get all posts
router.get('/posts', passport.authenticate('jwt'), async function (req, res) {
  const posts = await Post.findAll({ include: [User] })
  res.json(posts)
})

// get one post
router.get('/posts/:id', passport.authenticate('jwt'), async function (req, res) {
  const post = await Post.findOne({ where: {id: req.params.id}, include: [User, Review] })
  res.json(post)
})

// create a post
router.post('/posts', passport.authenticate('jwt'), async function (req, res) {
  const post = await Post.create(
    // use spread operator to include user id with post
    {...req.body,
      uid: req.user.id
    })
  res.json(post)
})

module.exports = router