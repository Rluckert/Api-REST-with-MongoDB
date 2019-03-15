const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    UsersSchema = new Schema({
        name: {
            type: String,
            required: [true, 'El nombre es requerido']

        },
        identification: {
            type: String,
            required: [true, 'La identificación es requerida']

        },
        cellphone: {
            type: String,
            required: [true, 'El celular es requerido']

        },
        country: {
            type: Schema.Types.ObjectId,
            ref: 'Country',
            required: [true, 'El país es requerido']

        }
    })

//mongo pluraliza y pone en minúsculas
module.exports = mongoose.model('User', UsersSchema)