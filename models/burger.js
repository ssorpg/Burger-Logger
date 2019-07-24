// REQUIRES
const orm = require('../config/orm');



// FUNCTIONS
async function getAllBurgers() {
    return await orm.selectAll();
}

async function makeNewBurger(burger) {
    await orm.insertOne(burger);
}

async function eatBurger(burger) {
    await orm.insertOne(burger);
}



// EXPORTS
module.exports = {
    getAllBurgers: getAllBurgers,
    makeNewBurger: makeNewBurger,
    eatBurger: eatBurger
};