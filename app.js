const express = require('express')
const errorMiddleware = require('./middlewares/errorMiddleware')
const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors({
    credentials: true,
    origin: '*'
}))

//Import Routes
const order = require('./routes/orderRoute')
const product = require('./routes/productRoute')
const feedback = require('./routes/feedbackRoute')

app.use('/api/', product)
app.use('/api/', order)
app.use('/api/', feedback)

// app.use(express.static(path.join(__dirname, "../client/build")))
//
// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "../client/build/index.html"))
// })

app.use(errorMiddleware)

module.exports = app