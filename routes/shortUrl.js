const express = require('express')
const router = express.Router()
const {create,get,getAll} = require('../controllers/shortUrlController')

router.get('/shorturls',getAll)
router.post('/shorturl',create)
router.get('/:urlId',get)


module.exports = router