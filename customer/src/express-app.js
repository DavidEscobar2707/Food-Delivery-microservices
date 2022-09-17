const express = require('express');
const cors  = require('cors');
const customer  = require('./api/customer');

module.exports = async (app) => {

    app.use(express.json());
    app.use(express.urlencoded({ extended: true, limit: '1mb'}));
    app.use(cors());
    app.use(express.static(__dirname + '/public'))

    customer(app);
    
}