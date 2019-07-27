// REQUIRES
const orm = require('../database/orm');



// FUNCTIONS
async function getAllBurgers() {
    return await orm.selectAll('burgers');
}

async function getBurgerByID(burgerID) {
    return await orm.selectOneWhere('burgers', 'id', burgerID);
}

async function getLastBurger() {
    return await orm.selectLastInsert('burgers');
}

async function newBurger(burger) {
    await orm.insertOne('burgers', burger);
}

async function eatBurger(burgerID) {
    await orm.updateOneWhere('burgers', 'devoured', true, 'id', burgerID);
}



// EXPORTS
module.exports = {
    getAllBurgers: getAllBurgers,
    getBurgerByID: getBurgerByID,
    getLastBurger: getLastBurger,
    newBurger: newBurger,
    eatBurger: eatBurger
};