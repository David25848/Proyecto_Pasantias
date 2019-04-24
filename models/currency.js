const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    

    mongoose.connect('mongodb://localhost/currency', {useNewUrlParser: true}, function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
});

var currency_schema= new Schema({

  symbol:                        {type:String,require: true},
  priceChange:                   {type:String},
  weightedAvgPrice:              {type:String},
  prevClosePrice:                {type:String},
  lastPrice:                     {type:String},
  openPrice:                     {type:String},
  highPrice:                     {type:String},
  lowPrice:                      {type:String}  
});

var Currency= mongoose.model("Currency",currency_schema);
module.exports.Currency = Currency;
      