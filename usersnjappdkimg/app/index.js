const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const apiport = 3005

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/info', (request, response) => {
  response.send('Info:Node.js, Express, and Postgres API')
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(apiport, () => {
  console.log(`App running on port ${apiport}.`)
})


