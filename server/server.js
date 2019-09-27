require('./config/config')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application / x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse applicaton / json
app.use(bodyParser.json())

app.get('/usuario', function (req, res){

	res.json('GET usuario')

})

app.post('/usuario', function (req, res){

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

app.put('/usuario/:identificador', function (req, res){

	let id = req.params.identificador
	res.json({
		id
	})

})

app.delete('/usuario', function (req, res){

	res.json('DELETE usuario')

})

app.listen(process.env.PORT, () => {
	console.log('escuchando puertos:', process.env.PORT)
})
