const express = require("express")
const cors = require("cors")
const sequelize = require('./database')
const seed = require("./seed.js")

const {addRecipe, getRecipe, displayRecipe} = require('./controller.js')
const app = express()  


app.use(express.json())
app.use(cors())

// seed()

app.post("/api/seed", seed)
app.post("/api/recipe", addRecipe)
app.get('/api/recipes', displayRecipe)
app.get("/api/recipe", getRecipe)


sequelize.sync()

app.listen(7777, () => console.log("up on port 7777"))

