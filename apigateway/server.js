const express = require('express')
const httpProxy = require('express-http-proxy')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', httpProxy('http://localhost:7788', { timeout: 2000}))
app.use('/products', httpProxy('http://localhost:7777', { timeout: 2000}))


app.listen(9988)