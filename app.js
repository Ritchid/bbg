
const express = require('express')
const app = express()
const PORT = 3000

app.set('views engine', 'ejs')

app.use(express.static(__dirname + '/public'))



app.get('/', (req, res) => {
    res.render(__dirname + "/views/index.ejs");
})

app.get('/visitors', (req, res) => {
    res.render(__dirname + '/views/landing.ejs')
})

app.get('/partners', (req, res) => {
    res.render(__dirname + '/views/partners.ejs')
})

app.get('/officers', (req, res) => {
    res.render(__dirname + '/views/officers.ejs')
})

app.get('/membership', (req, res) => {
    res.render(__dirname + '/views/membership.ejs')
})

app.get('/events', (req, res) => {
    res.render(__dirname + '/views/events.ejs')
})

app.get('/join', (req, res) => {
    res.render(__dirname + '/views/join.ejs')
})

app.get('/apply', (req, res) => {
    res.render(__dirname + '/views/apply.ejs')
})

app.get('/signIn', (req, res) => {
    res.render(__dirname + '/views/signIn.ejs')
})

app.get('/members', (req, res) => {
    res.render(__dirname + '/views/members.ejs')
})

app.listen(PORT)