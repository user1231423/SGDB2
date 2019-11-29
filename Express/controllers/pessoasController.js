var mongoose = require('mongoose');
var pessoa = require('../models/pessoas');

exports.getPessoas = function (req,res) {
    pessoa.find({}, function(err, data){
        if(err){
            res.send("error!");
        }else{
            res.send(data);
        }
    })
};