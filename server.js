var express = require('express')
var bodyPaser = require('body-parser')
var port = process.env.PORT || 3000
var knex = require('./db/knex')

var app = express()

app.use(bodyPaser.json())
app.use(bodyPaser.urlencoded({extended: false}))

app.get('/todos', function (req, res) {
  knex.raw('select * from todos').then(function (todos) {
    res.send(todos)
  })
})

app.listen(port, function () {
  console.log('Listening on port :', port)
})
