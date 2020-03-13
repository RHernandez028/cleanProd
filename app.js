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

app.listen(2002);