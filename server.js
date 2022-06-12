const express = require('express')
const app = express()
const cors = require('cors')

const apiRoute = require('./routes')

app.use(cors())
app.use(express.json())

app.use("/api/v1",apiRoute)
app.all('*', (req, res) => {
    res.send("Hello")
})

app.listen(8000, () => {
    console.log("Web run on port 8000");
})