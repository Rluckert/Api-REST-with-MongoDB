const express = require('express'),
Country = require('./routes/country'),
User = require ('./routes/user'),
api = express.Router()


api.get('/', async(req, res) =>{
    await res.status(200).send({
        message: 'Api RESTful funcionando'
    })
})

api.post('/countries', Country.postCountries)
api.get('/countries', Country.getCountries)
api.get('/users', User.getUsers)
api.post('/user', User.postUser)
api.get('/user/:id', User.getUser)
api.put('/user/:id', User.putUser)
api.delete('/user/:id', User.deleteUser)


module.exports = api