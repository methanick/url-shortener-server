const express = require('express')
const router = express.Router()
const {create,get} = require('../controllers/shortUrlController')

router.get('/:urlId',get)
router.post('/shorturl',create)


module.exports = router