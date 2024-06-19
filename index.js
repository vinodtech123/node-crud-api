const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/products',productRoute);

// connecting my app to mongodb using mongoose client
mongoose.connect('mongodb+srv://vinod:cwG6keehepfgr9mn@backendb.wjhdqvv.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackenDB')
.then(() => {
    console.log('Connected to Database!')
    app.listen(3000, () => {
        console.log('server is running on 3000 port');
    })
})
.catch((error)=>{console.log('Connection failed', error)});