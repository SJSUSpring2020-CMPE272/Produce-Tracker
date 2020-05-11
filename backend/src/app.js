'use strict';
const nodemailer = require('nodemailer');

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
  app.get('/queryAllOrders', (req, res) => {
    network.queryAllOrders()
        .then((response) => {
            let record = JSON.parse(response);
            res.send(record);
        });
});

app.get('/getOrder', (req, res) => {
    network.getOrder(req.query.key)
        .then((response) => {
            let orderRecord = JSON.parse(response);
            res.send(orderRecord);
        });
});

app.post('/createNewOrder', (req, res) => {
    console.log(req.body);
        network.createNewOrder(req.body.barcode, req.body.grocery_name, req.body.grocery_address,req.body.grocery_employeeid,
            req.body.grocery_health,req.body.grocery_email,req.body.grocery_date ,
            req.body.delivery_name,req.body.delivery_health,req.body.delivery_address,req.body.delivery_employeeid,req.body.delivery_email,
            req.body.delivery_date,req.body.consumer_name,
            req.body.consumer_address,req.body.consumer_email,req.body.consumer_date)
            .then((response) => {
                res.send(response);
        });
});

app.post('/reportCorona', (req, res) => {

    network.reportCorona(req.body.barcode, req.body.type)
        .then((response) => {
            let transport = nodemailer.createTransport({
                host: 'smtp.mailtrap.io',
                port: 2525,
                auth: {
                   user: '7ee2a90121e570',
                   pass: '6034b80ea1644d'
                }
            });
            const message = {
                from: 'coronavirus@tracker.com', // Sender address
                to: req.body.consumer_email,         // List of recipients
                subject: 'Alert | Employee tested positive for Corona', // Subject line
                text: 'One of the employees who was part of the transaction ' + req.body.barcode + ' is tested positive for Covid-19. Please be safe' // Plain text body
            };
            transport.sendMail(message, function(err, info) {
                if (err) {
                  console.log(err)
                } else {
                    res.send(response);
                }
            });
        
        });
});

app.listen(process.env.PORT || 8081);