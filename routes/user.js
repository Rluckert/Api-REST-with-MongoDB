const User = require('../models/user'),
c = console.log;

const apiResponse = (req, res, err, data) => {
    if (err) {
        res.status(500).send({
            message: 'Error interno del servidor -> ' + err.message
        })
    } else {
        if (data) {
            res.status(200).send({
                data
            })
        } else {
            res.status(400).send({
                message: 'No existen datos con los parámetros de búsqueda' + err.message
            })
        }
    }

}


const getUsers = async (req, res) => {
    await User
    .find({})
    .populate('country', 'countryName')
    .sort({'_id':-1})
    .exec((err, data) => apiResponse(req, res, err, data)) 
}

const postUser = async (req, res) => {
    let Usuario = new User(req.body)
    c(Usuario)
    Usuario.save((err, data) => apiResponse(req, res, err, data))
}

const getUser = async (req, res) => {
    await User
    .findById(req.params.id)
    .exec((err, data) => apiResponse(req, res, err, data))
    

}

const putUser = async (req, res) => {
    await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err,data) => apiResponse(req,res,err, data)
    )

}

const deleteUser = async (req, res) => {
    await User.findByIdAndRemove(
        req.params.id,
        (err,data) => apiResponse(req,res,err, data)
    )

}

module.exports = {
    getUsers,
    postUser,
    getUser,
    putUser,
    deleteUser
}

