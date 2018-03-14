import express from 'express';
import mongoose from 'mongoose';
import Items from './src/models/items';
import bodyParser from 'body-parser';
import bluebird from 'bluebird';

const app = express(),
    port = process.env.PORT || 3000,
    routes = require('./src/routes/items');


mongoose.Promise = bluebird;
mongoose.connect('127.0.0.1:27017/items');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


routes(app);

app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);