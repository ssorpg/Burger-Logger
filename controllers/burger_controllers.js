// REQUIRES
const express = require('express');
const app = express.Router();

const burger = require('../models/burger');



// ROUTERS
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
    try {
        await burger.newBurger(req.body);

        const toRender = await burger.getBurgerByID(req.params.id);

        res.status(200).json(toRender);
    }
    catch (err) {
        res.status(500).end();
        throw err;
    }
});

app.delete('/api/burgers/:id', async (req, res) => {
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