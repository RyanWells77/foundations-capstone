const sequelize = require('./database.js')

const seed = () => {
    sequelize.query(`
        DROP TABLE IF EXISTS recipes;
        DROP TABLE IF EXISTS ingredients;
        DROP TABLE IF EXISTS instructions;

        CREATE TABLE recipes (
            recipe_id SERIAL PRIMARY KEY,
            recipe_name VARCHAR (250) NOT NULL,
        );


        CREATE TABLE ingredients (
            ingredient_id SERIAL PRIMARY KEY,
            recipe_id INTEGER,
            ingredient_name VARCHAR NOT NULL,
            unit VARCHAR NOT NULL,
            measurement VARCHAR NOT NULL,
            FOREIGN KEY (recipe_id) REFERENCES recipes(recipe_id)
        );


        CREATE TABLE instructions (
            instructions_id SERIAL PRIMARY KEY,
            recipe_id INTEGER,
            instructions TEXT NOT NULL,
            FOREIGN KEY (recipe_id) REFERENCES recipes(recipe_id)
        );
        
    `).then(() => {
        console.log('DB has been seeded')
    })
}

module.exports = seed