var mongoose = require("mongoose"),
Schema = mongoose.Schema,
objectId = mongoose.Schema.ObjectId;

var moradaSchema = new Schema({
    _id: {type: objectId, auto:true},
    endereco: String,
    cod_postal: String
}, {
    versionKey: false
})

 module.exports = moradaSchema;


