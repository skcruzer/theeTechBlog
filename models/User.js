const pls = require('passport-local-sequelize')
const { DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

const User = pls.defineUser(sequelize, {
  // requirements for username field
  username: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = User
