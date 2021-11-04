const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const PORT = 11000

app.set('view engine', 'pug')
app.use(express.static(__dirname + '/static'))

app.get('/', (req, res) => {
	res.render('index')
})

app.get('/about', (req, res) => {
	res.render('about')
})

server.listen(PORT, () => {
	console.log(`Escuchando en el puerto ${PORT}`)
})














