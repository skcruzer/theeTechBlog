const passLoSeq = require('passport-local-sequelize')
const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const User = passLoSeq.defineUser(sequelize, {
  // columns go here
})

module.exports = User