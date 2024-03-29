require('./config/config')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application / x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse applicaton / json
app.use(bodyParser.json())


app.get('/', (req, res) => {
	res.send('Hola desde Express')
})

app.get('/usuario', (req, res) => {

	res.json('GET usuario')

})

app.post('/usuario', (req, res) => {

	let body = req.body

	if ( body.nombre === undefined ) {
		
		res.status(400).json({
			ok : false,
			mensaje : 'El nombre es necesario!'
		})

	}
	else {

		res.json({
			body
		})

	}


})

app.put('/usuario/:identificador', (req, res) => {

	let id = req.params.identificador
	res.json({
		id
	})

})

app.delete('/usuario', (req, res) => {

	res.json('DELETE usuario')

})

app.listen(process.env.PORT, () => {
	console.log('escuchando puertos:', process.env.PORT)
})

