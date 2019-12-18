var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var historiaSchema = new Schema({
    titulo: {type: String},
    pessoa: {type: objectId, ref: 'Pessoa'}
}, {
    versionKey: false
})

var historia = mongoose.model('Historia', historiaSchema, 'historias');

module.exports = historia;