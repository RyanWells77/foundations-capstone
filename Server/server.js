const express = require("express")
const cors = require("cors")

const sequelize = require('./database')

const seed = require("./seed.js")
const {addRecipe} = require('./controller.js')

app.use(express.json())
app.use(cors())


const app = express()

app.post("/api/seed", seed)
app.post("/api/recipe",)


sequelize.sync()

app.listen(7777, () => console.log("up on port 7777"))

