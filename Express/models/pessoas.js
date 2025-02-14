var mongoose = require("mongoose"),
Schema = mongoose.Schema,
objectId = mongoose.Schema.ObjectId;
var moradaSchema = require('./morada');

var clubeSchema = new Schema ({
    _id: false,
    nome: {type: String},
    cor: {type: String}
})

var pessoaSchema = new Schema ({
    _id: {type: objectId, auto:true},
    nome: {type: String, required: true},
    apelido: {type: String},
    numTelemovel: {type: String},
    data_de_nascimento: {type: Date, default: Date.now},
    morada: moradaSchema,
    clubes: [clubeSchema]
}, {
    versionKey: false
});

 var pessoa = mongoose.model('Pessoa', pessoaSchema, 'pessoas');

 module.exports = pessoa;

