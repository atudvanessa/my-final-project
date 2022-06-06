const express = require('express');
const RestaurantModel = require('../models/Restaurant.model');
const router = express.Router();

router.post('/create_restaurant',(req, res) =>{
    const body = req.body;
    const post = new RestaurantModel(body);
   Restaurant.save();
   return res.json({message:'Restaurant created successfully',data: restaurant});
});

router.get('/see_restaurants',async (req, res) =>{
    const restaurant = await RestaurantModel.find({});
return res.json({data:post});
});

router.put('/update_restaurant', async (req, res) =>{
    const {_id} = req.body
        const updateRestaurant = await RestaurantModel.findOneAndUpdate({_id: _id}, {...req.body});
        res.json(updateRestaurant);
    });

    router.delete('/delete_restaurant', async (req,res) =>{
        const {_id} = req.body;
        const deleteRestaurant = await RestaurantModel.findOneAndDelete({_id: _id,});
        res.json(deleteRestaurant);
    });