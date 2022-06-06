const express = require('express');
const orderModel = require('../models/order.model');
const router = express.Router();

router.post('/create_order',(req, res) =>{
    const body =req.body;
    const order = new orderModel(body);
order.save();
return res.json({messsage:'order created successfully',data: order});
});

router.get('/see_orders',async (req, res) =>{
    const order = await orderModel.find({});
return res.json({data:order});
});

router.delete('/delete_order', async (req,res) =>{
    const {_id} = req.body;
    const deleteorder = await orderModel.findOneAndDelete({_id: _id,});
    res.json(orderPost);
});


module.exports = router;