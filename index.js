const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let ejs = require('ejs');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('form');
});

app.post("/home", function (req, res) {
    const name = req.body.name; 
    res.render('index', { name: name });
});
   
app.listen(port, () => console.log(`JOFS app listening on port ${port}!`));