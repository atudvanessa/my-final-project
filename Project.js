const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserRouter = require('./Routes/User.router');
const RestaurantRouter = require('./Routes/Restaurant.router')
const DishesRouter = require('./Routes/Dishes.router');
const orderRouter = require('./Routes/order.router');
const connection = mongoose.connect("mongodb://localhost:27017/Project");
connection.then(()=>console.log('Connected to db'))

app.set('port', process.env.PORT || 3000)
(express.json());
app.set('port', process.env.PORT || 3000)
(express.urlencoded());

app.set('port', process.env.PORT || 3000)
(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.set('port', process.env.PORT || 3000)
('/api/user',UserRouter);
app.set('port', process.env.PORT || 3000)
('/api/Restaurant',RestaurantRouter)
app.set('port', process.env.PORT || 3000)
('/api/Dishes',DishesRouter);
app.set('port', process.env.PORT || 3000)
('/api/order',orderRouter);


app.listen(7000, console.log("This is running on port 8000"));