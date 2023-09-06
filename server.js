const express = require('express')

const app =express()
const port = 5000

app.get('/',(req, res) => {
    res.send({message: 'Hello from the server'})
})

app.listen(port, () => {
    console.log(`server is up http://localhost:${port}`)
})