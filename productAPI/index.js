const express = require('express')
const app = express()

app.get('', (req, res) => {
    res.send('productAPI')
})

app.listen(7777)