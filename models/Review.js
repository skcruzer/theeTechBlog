const { DataTypes, Model } = require('sequelize')
const sequelize = require('../config/connection')

class Review extends Model { }
// create a table for blog reviews
Review.init({
  body: {
    type: DataTypes.STRING,
    allownull: false
  }
}, { sequelize, modelName: 'review' })

module.exports = Review