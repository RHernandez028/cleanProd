/*
    Author: Emmanuel Cortes
    Date: 3.13.20
    File: app.js
*/

// Using NPM I installed ejs and express
const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
// For all static files they are to be stored in the public folder which was set by using the express.static('public')
app.use(express.static('public'));

// This app.set statement is setting ejs as the view engine
app.set("view engine", "ejs");
// All pages that are to be rendered will be stored in the 'views' folder
app.set("views", path.join(__dirname, "views"));

// This app.get will be the home page and will render the index page as the main route
app.get('/', (req, res) => {
    try {
        res.render('index', {
        })
    } catch (error) {
    }
});

// For every other app.get, the ending of the url will be the dedicated item, so for example if a user was wanting to go to the gloves page, at the end of the url the /gloves would have to be added. Inside the app.get res.render will render out the page from the views folder
app.get('/gloves', (req, res) => {
    try {
        res.render('gloves', {
        })
    } catch (error) {
    }
});

app.get('/hand-sanitizer', (req, res) => {
    try {
        res.render('handsan', {
        })
    } catch (error) {
    }
});

app.get('/surgical-masks', (req, res) => {
    try {
        res.render('masks', {
        })
    } catch (error) {
    }
});

app.get('/soap', (req, res) => {
    try {
        res.render('soap', {
        })
    } catch (error) {
    }
});

app.get('/spray', (req, res) => {
    try {
        res.render('spray', {
        })
    } catch (error) {
    }
});

app.get('/wipes', (req, res) => {
    try {
        res.render('wipes', {
        })
    } catch (error) {
    }
});


app.listen(2002);