const mongoose = require('mongoose');

const RestaurantsSchema = new mongoose.Schema({
    
},
{timestamps: true}
);
module.exports = mongoose.model('Restaurants',RestaurantsSchema)