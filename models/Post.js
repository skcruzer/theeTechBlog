const { DataTypes, Model } = require('sequelize')
const sequelize = require('../config/connection')

class Post extends Model { }
// create a table for post
Post.init({
  title: {
    type: DataTypes.STRING,
    allownull: false
  },
  body: {
    type: DataTypes.STRING,
    allownull: false
  }
}, {sequelize, modelName: 'post'})

module.exports = Post