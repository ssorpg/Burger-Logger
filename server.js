// REQUIRES
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const burgerJS = require('./models/burger');

const PORT = process.env.PORT || 8080;



// FUNCTIONS
app.get('/', async (req, res) => {
    const burgers = await burgerJS.getAllBurgers();

    res.render('index', { burgers: burgers });
});

app.post('/newBurger', async (req, res) => {
    await burgerJS.makeNewBurger(req.body);
});

app.post('/eatBurger', async (req,res) => {
    await burgerJS.eatBurger(req.body);
});



// SERVER INIT
app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:' + PORT);
});