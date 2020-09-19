const express = require('express')
const { prependOnceListener } = require('process')
const app = express()
const port = 3000
app.use(express.json())
app.use(express.urlencoded({extend: true}))

let people = []

app.post('/people', (req, res) => {
    let person = req.body
    console.log(person)

    people.push(person)
    res.status(201).send(person)
})
app.get('/people', (req,res) => {
    res.json(people)
})

app.get('/', (req,res) => {
    res.send('Hello World!')
})

app.get('/hello', (req,res) => {
    res.json({ message: 'Hello!' })
})

app.post('/say', (req,res) => {
    res.status(201).json({ message: 'Hi!' })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})