// EXPRESS
const express = require('express');
const app = express.Router();



// MODELS
const burger = require('../models/burger');



// ROUTES
app.get('/', async (req, res) => {
    try {
        const burgers = await burger.getAllBurgers();

        const uneatenBurgers = burgers.filter(burger => { return !burger.devoured; });
        const eatenBurgers = burgers.filter(burger => { return burger.devoured; });

        res.status(200).render('index',
            {
                uneatenBurgers: uneatenBurgers,
                eatenBurgers: eatenBurgers
            });
    }
    catch (err) {
        res.status(500).end();
        throw err;
    }
});

app.post('/api/burgers', async (req, res) => {
    if (!req.body.burger_name) {
        return res.status(400).end();
    }

    try {
        await burger.newBurger(req.body);

        const toRender = await burger.getLastBurger();

        res.status(200).json(toRender);
    }
    catch (err) {
        res.status(500).end();
        throw err;
    }
});

app.put('/api/burgers/:id', async (req, res) => {
    try {
        await burger.eatBurger(req.params.id);

        res.status(200).end();
    }
    catch (err) {
        res.status(500).end();
        throw err;
    }
});



// EXPORTS
module.exports = app;