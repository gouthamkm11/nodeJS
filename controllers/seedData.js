var todomodel = require('../model/todomodel');
//Stock
var AlphaVantageAPI = require('alpha-vantage-cli').AlphaVantageAPI;

var yourApiKey = 'ARHOLSJFQCBL6CFC';
var alphaVantageAPI = new AlphaVantageAPI(yourApiKey, 'compact', true);
//stock
module.exports = function(app){
    app.get('/api/setup/', function(req,res){
        //Defining data
        var elements = [
            {
                username: 'Goutham',
                todo: 'Study',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'Kumar',
                todo: 'Job',
                isDone: true,
                hasAttachment: false
            },
            {
                username: 'Somasundaram',
                todo: 'Play',
                isDone: false,
                hasAttachment: false
            }
        ]
        // todomodel.create(elements, function(err,results){
        //     console.log('Call back Fired');
        // })

        // todomodel.find({username:req.params.uname},
        //     function(err,results){
        //         res.send(results);
        // })

        //Find all record in the model.
        todomodel.find({},function(err,results){
            if(err) throw err;
            res.send(results);
        })

        // app.get('/stock/symbol', function(req,res){
        //     var emptyArray = [];
        //     alphaVantageAPI.getDailyData('MSFT').then(function(data){
        //         emptyArray = data;
        //     });
        //     console.log(emptyArray);
        //     res.send('hello');
        // })
    });
}