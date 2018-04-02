//CRUD operation on todo's schema
//I'm requiring this todomodel to perform crud operations on this model
var todos = require('../model/todomodel');
var symbol = require('../model/apiModel');
var request = require('request');

module.exports = function(app){
    //find a specific document in this todo model's collection
    var result;

    app.get('/api/todo/api', function(req,res){
        request({
            uri:"https://api.iextrading.com/1.0/ref-data/symbols",
            method:"get"},function(error,response,body){
                result = JSON.parse(body);
            });
            symbol.create(result);
            res.send(result);
            //res.send({'hello':'world'});
        // symbol.find({symbol:'AMAZ'}, function(err, ans){
        //     if(err) throw err;
        //     res.send(ans);
        // })
        // apiModel.find({volume:2890354}, function(err,results){
        //     res.send(results);
        // })
    });

    // app.get('/api/todos/:uname', function(req,res){
    //    todos.find({username:req.params.uname},
    //     function(err,results){
    //         if(err) throw err;
    //         res.send(results);
    //    })
    // });

    // app.get('api/todos/data', function(req,res){
    //     apiModel.create(result,function(err,ans){
    //         res.send(ans);
    //     });
    // });

    app.get('/api/submitdata', function(req,res){
        request({
            uri:api.iextrading.com/1.0/stock/symbol/price,
            method:"get"},function(error,response,body){
                res.send(body);
            });
    })
}