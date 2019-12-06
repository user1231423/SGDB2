var mongoose = require('mongoose');
var pessoa = require('../models/pessoas');

exports.getPessoas = function (req, res) {
    pessoa.find({}, function (err, data) {
        if (err) {
            res.send("error!");
        } else {
            res.send(data);
        }
    })
};

exports.createPessoas = function (req, res) {
    var obj = req.body;
    var model = new pessoa(obj);
    model.save(function (err) {
        if (err) {
            res.send(err);
            return;
        } else {
            res.send("Created!");
        }
    })
}

exports.getSinglePessoa = function (req, res) {
    var id = req.params.id;
    pessoa.findById(id, function (err, data) {
        if (err) {
            res.send(err);
            return;
        } else {
            res.send(data);
        }
    })
}

exports.updatePessoa = function (req, res) {
    var id = req.params.id;
    var obj = req.body;

    pessoa.findByIdAndUpdate(id, { nome: obj.nome, apelido: obj.apelido, numTelemovel: obj.numTelemovel, data_de_nascimento: obj.data_de_nascimento }, function (err, data) {
        if (err) {
            res.send(err);
            return;
        } else {
            res.send(data);
        }
    })

    /*
    pessoa.update({_id: id},{$set:  {nome: obj.nome, apelido: obj.apelido, numTelemovel: obj.numTelemovel, data_de_nascimento: obj.data_de_nascimento}}, function(err, results) {
        res.send({error: err, affected: results});
    });*/
}

exports.setMorada = function (req, res) {
    var id = req.params.id;
    var obj = req.body;

    pessoa.find({ _id: id }, function (err, data) {
        var morada = {
            endereco: obj.endereco,
            cod_postal: obj.cod_postal
        };
        if(err){
            res.send(err);
        }else{
            data[0].morada = morada;
            data[0].save(function(err, doc){
                if(err){
                    res.send(err);
                }else{
                    res.send(doc);
                }
            });
        }
     })
}