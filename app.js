const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
app.use(express.static('public'));
// app.use(expressLayouts)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.get('/', (req, res) => {
    try {
        res.render('index', {
        })
    } catch (error) {
    }
});
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
        res.render('soap', {
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