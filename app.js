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
            item: "Hand Sanitizer",

        })
    } catch (error) {
    }
});
app.get('/surgical-masks', (req, res) => {
    try {
        res.render('masks', {
            item: "Surgical Masks"
        })
    } catch (error) {
    }
});
app.get('/soap', (req, res) => {
    try {
        res.render('soap', {
            item: "Hand Soap"
        })
    } catch (error) {
    }
});
app.get('/spray', (req, res) => {
    try {
        res.render('spray', {
            item: "Lysol Spray"
        })
    } catch (error) {
    }
});
app.get('/wipes', (req, res) => {
    try {
        res.render('wipes', {
            item: "Lysol Wipes"
        })
    } catch (error) {
    }
});
app.listen(2002);