const router = require('express').Router()
const { Post, User, Review } = require('../models')
const passport = require('passport')

// get all posts
router.get('/posts', passport.authenticate('jwt'), async function (req, res) {
  const posts = await Post.findAll({ include: [User] })
  res.json(posts)
})

// get one post by id
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

// delete a post by id
router.delete('/posts/:id', passport.authenticate('jwt'), async function(req, res) {
  const post = await Post.destroy({where: {id: req.params.id}})
  res.sendStatus(200)
})

// update a post by id
router.put('/posts/:id', passport.authenticate('jwt'), async function (req, res) {
  const post = await Post.update(req.body, { where: { id: req.params.id } })
  res.json(post)
})

module.exports = router