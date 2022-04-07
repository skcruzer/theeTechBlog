const User = require('./User.js')
const Post = require('./Post.js')
const Review = require('./Review.js')

// relationship between user and post models
User.hasMany(Post, { 
  foreignKey: 'uid' 
})
Post.belongsTo(User, { 
  foreignKey: 'uid' 
})

Post.hasMany(Review, {
  foreignKey: 'pid'
})
Review.belongsTo(Post, {
  foreignKey: 'pid'
})

module.exports = { User, Post, Review }
