const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db')

class Comment extends Model { }
// create a table for comment
Comment.init({
  body: {
    type: DataTypes.STRING,
    allownull: false
  }
}, { sequelize, modelName: 'comment' })

module.exports = Comment