var mongoose = require('mongoose');
var historia = require('../models/historia');

exports.createHistoria = function (req, res) {
    var obj = req.body;
    var model = new historia(obj);
    model.save(function (err) {
        if (err) {
            res.send(err);
            return;
        } else {
            res.send("Created!");
        }
    })
}

exports.getHistorias = function (req, res) {
    historia.find({},function(err,data){
        if(err){
            res.json(err);
        }else{
            res.json(data);
        }
    }).populate('pessoa')
}