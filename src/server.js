import express from "express"
import "dotenv/config"
import cors from "cors"

import { resolve } from "path"
import allRotes from "./routes/all.routes.js"

import './utils/passport.js'

const app = express()

const PORT = process.env.PORT || 5001

app.use(cors())
app.use(express.json())
app.use(express.static(resolve("/uploads")))

app.use(allRotes)

app.listen(PORT, () => console.log(`Server running ${PORT}`))
