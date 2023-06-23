const express = require('express')
const router = express.Router()

const {
    read,
    list,
    create,
    update,
    remove
} = require('../Controllers/fisherman')
// middleware
const { auth } = require('../Middleware/auth')
const { upload } = require('../Middleware/upload')

//http://localhost:5000/api/fisherman
router.get('/fisherman', list)
router.get('/fisherman/:id', read)
router.post('/fisherman', upload, create)
router.put('/fisherman/:id',upload, update)
router.delete('/fisherman/:id', remove)




module.exports = router