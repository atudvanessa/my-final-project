const express = require ('express');
const UserModel = require('../models/User.model');
const router = express.Router();

router.post('/create_account',(req, res) =>{
    const body = req.body;
    const user = new UserModel(body);
    user.save();
    return res.json({message:'User created successfully',data: user});
});

router.post('/login',async(req, res) =>{
    const {number, password, email} = req.body;
    const isUserFound = await UserModel.findOne({number:number,password: password,email:email});
    res.json(isUserFound? {message:'user found',user:isUserFound} : {message:'user not found'} );
    
});

router.put('/update_profile', async(req, res) =>{
    const {_id} = req.body
        const updateUser = await UserModel.findOneAndUpdate({_id: _id}, {...req.body});
        res.send(updateUser);
    });

    router.delete('/delete_account',async(req,res) =>{
        const {_id, password} = req.body;
        const deleteUser = await UserModel.findOneAndDelete({_id: _id,password: password});
        res.json
         deleteUser.deletedCount >0
         ? {success: true, message: 'Account deleted'}
         : {success: false, message: "could not delete user"}
    });


    module.exports = router;