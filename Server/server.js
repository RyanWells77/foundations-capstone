const express = require("express")
const cors = require("cors")

const sequelize = require('./database')

const seed = require("./seed.js")

const app = express()

app.post("/api/seed", seed)


sequelize.sync()

app.listen(7777, () => console.log("up on port 7777"))

