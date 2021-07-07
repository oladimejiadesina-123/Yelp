const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT || 3005
const app = express()
app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
})