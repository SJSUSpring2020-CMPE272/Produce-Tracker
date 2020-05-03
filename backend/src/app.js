'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

let network = require('./fabric/network.js');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', "http://localhost:3000");
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });

// app.get('/queryAllCars', (req, res) => {
//     network.queryAllCars()
//         .then((response) => {
//             let carsRecord = JSON.parse(response);
//             res.send(carsRecord);
//         });
// });

app.get('/getOrder', (req, res) => {
    network.getOrder(req.query.key)
        .then((response) => {
            let orderRecord = JSON.parse(response);
            res.send(orderRecord);
        });
});



// app.get('/querySingleCar', (req, res) => {
//     console.log(req.query.key);
//     network.querySingleCar(req.query.key)
//         .then((response) => {
//             let carsRecord = JSON.parse(response);
//             res.send(carsRecord);
//         });
// });

app.post('/createRawFood', (req, res) => {
    console.log(req.body);
        network.createRawFood(req.body.orderId, req.body.foodItem, new Date().toISOString())
            .then((response) => {
                res.send(response);
        });
});

app.post('/changeState', (req, res) => {
    network.changeState(req.body.orderId, req.body.type, req.body.entityName, req.body.entityAddress, req.body.quality, new Date().toISOString())
        .then((response) => {
            res.send(response);
        });
});

app.listen(process.env.PORT || 8081);