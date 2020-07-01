const mongoose = require('mongoose');

const geoSchema = mongoose.Schema({
    name : String,
    location: {
      type: {
        type: String
      },
      coordinates: []
    }
    
    
  });


const GeoSchema = mongoose.model('GeoSchema', geoSchema);

module.exports = { GeoSchema }


