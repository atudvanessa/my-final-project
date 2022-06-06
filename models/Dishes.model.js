const mongoose = require('mongoose');

const DishesSchema = new mongoose.Schema({
    
},
{timestamps: true}
);
module.exports = mongoose.model('Dishes',DishesSchema)