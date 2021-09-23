var express = require('express')
var app = express()

var port = process.env.PORT || 8080

app.get('/', function(req, res) {
  res.json({ mensaje: '¡Hola Mundo!' })
})

app.get('/cervezas', function(req, res) {
  res.json({ mensaje: '¡A beber cerveza!' })
})
app.post('/', function(req, res) {
  res.json({ mensaje: 'Método post' })
})

app.del('/', function(req, res) {
  res.json({ mensaje: 'Método delete' })
})

app.listen(port)
console.log('API escuchando en el puerto ' + port)