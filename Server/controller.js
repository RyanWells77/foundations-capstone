const sequelize = require("./database.js")


module.exports = {

    addRecipe: (req, res) => {
        const { recipe_name, ingredients, instructions } = req.body
        console.log(req.body)

        sequelize.query(`
            INSERT INTO recipes (recipe_name)
            VALUES (
                '${recipe_name}'
                );
            `);
        sequelize.query(`
        INSERT INTO instructions (instructions)
        VALUES (
            '${instructions}'
            );
        `);

        // There should be in the req.body an array of ingredients. in the array there should be objects that contain (ingredient_name, unit, measurment) keys and values
        ingredients.forEach(ingredients => {
            const { ingredient_name, unit, measurement } = ingredients
            sequelize.query(`
                INSERT INTO ingredients (ingredient_name, unit, measurement)
                VALUES (
                    '${ingredient_name}',
                    '${unit}',
                    '${measurement}'
                    );
               ` ).then(dbRes => {
                // res.status(200).send(dbRes[0])
            })
                .catch(err => {
                    console.log(err)
                })
        }
        )
        res.sendStatus(200)
    },

    getRecipe: (req, res) => {
        sequelize.query(`
        SELECT recipe_name FROM recipes ORDER BY recipe_name ASC
    `)
            .then(dbRes => {
                res.status(200).send(dbRes[0])
            })
            .catch(err =>
                console.log(err))
    },

    displayRecipe: (req, res) => {
        console.log(res.body)
        const {recipeName} = req.query
        sequelize.query(`
        SELECT r.recipe_name, i.ingredient_name, i.unit, i.measurement, instr.instructions
        FROM recipes r
        LEFT JOIN ingredients i ON r.recipe_id = i.recipe_id
        LEFT JOIN instructions instr ON r.recipe_id = instr.recipe_id
        WHERE r.recipe_name = '${recipeName}'
        
        `)
        .then(dbRes =>{
            res.status(200).send(dbRes[0])
        })
        .catch(err => {
            console.log(err)
        })
    }
}