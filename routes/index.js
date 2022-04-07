const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./postRoutes.js'))
router.use('/api', require('./reviewRoutes.js'))
// other routers go here...

module.exports = router
