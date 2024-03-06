const sequelize = require("./database.js")


module.exports = {
    addRecipe: (req, res) => {
        const {name, discription} = req.body

        sequelize.query(`
            INSERT INTO recipes (name, discription)
            VALUES (
                '${name}',
                '${discription}'
            )
            RETURNING *;
        `).then(dbRes => {
            res.status(200).send(dbRes[0])
        })
    }
}