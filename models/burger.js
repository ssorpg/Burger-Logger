// REQUIRES
const orm = require('../config/orm');



// FUNCTIONS
async function getAllBurgers() {
    return await orm.selectAll('burgers');
}

async function getBurgerByID(burgerID) {
    return await orm.selectWhere('burgers', 'id', burgerID);
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
    newBurger: newBurger,
    eatBurger: eatBurger
};