const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  CountrySchema = new Schema({
    countryCode: {
      type: String,
      required: [true, 'El código del país es requerido'],
      unique: true
    },
    countryName: {
      type: String,
      required: [true, 'El nombre del país es requerido'],
      unique: true
    }
  })

//mongodb va a pluralizar y poner en minúsculas el modelo
module.exports = mongoose.model('Country', CountrySchema)