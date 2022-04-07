const router = require('express').Router()
const { Post, User } = require('../models')
const passport = require('passport')

// get all posts
router.get('/posts', passport.authenticate('jwt'), async function (req, res) {
  const posts = await Post.findAll({ include: [User] })
  res.json(posts)
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