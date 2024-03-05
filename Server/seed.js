const sequelize = require('./database.js')

const seed = () => {
    sequelize.query(`
        DROP TABLE IF EXISTS recipes;

        CREATE TABLE recipes (
            recipie_id SERIAL PRIMARY KEY,
            name VARCHAR,
            discription VARCHAR (300)
        );
    `).then(() => {
        console.log('DB has been seeded')
    })
}

module.exports = seed