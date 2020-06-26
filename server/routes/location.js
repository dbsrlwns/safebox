const express = require('express')
const router = express.Router()
const { Location } = require('../models/location.js')

router.post('/addToFavorite', (req, res) => {
  const location = new Location(req.body)
  
  location.save((err, doc) => {
    if (err) return res.status(400).send(err)
    return res.status(200).json({ success: true })
  })
})

router.get('/getFavoredMovie', (req,res) => {
  Location.find({'userFrom': req.body.userFrom})
  .exec((err,favorites) => {
    if(err) return res.status(400).send(err)
    return res.status(200).json({success:true, favorites })
  })
})


module.exports = router
