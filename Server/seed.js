const sequelize = require('./database.js')

const seed = () => {
    sequelize.query(`
        DROP TABLE IF EXISTS recipes;
        DROP TABLE IF EXISTS ingredients;
        DROP TABLE IF EXISTS instructions;

        CREATE TABLE recipes (
            recipe_id SERIAL PRIMARY KEY,
            name VARCHAR,
            discription VARCHAR (300)
        );


        CREATE TABLE ingredients (
            ingredient_id SERIAL PRIMARY KEY,
            recipe_id INTEGER,
            ingredient_name VARCHAR,
            measurement_unit VARCHAR,
            FOREIGN KEY (recipe_id) REFERENCES recipes(recipe_id)
        );


        CREATE TABLE instructions (
            instructions_id SERIAL PRIMARY KEY,
            recipe_id INTEGER,
            step INTEGER,
            instructions TEXT,
            FOREIGN KEY (recipe_id) REFERENCES recipes(recipe_id)
        );
        
    `).then(() => {
        console.log('DB has been seeded')
    })
}

module.exports = seed