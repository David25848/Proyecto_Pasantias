const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    // var Currency = mongoose.model('Currency');

    mongoose.connect('mongodb://localhost/klines', {useNewUrlParser: true}, function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
});

var kline_schema= new Schema({

  openTime:                      {type:Number},	                     
  open:                          {type:Number},                         
  high:                          {type:Number},                           
  low:                           {type:Number},                             
  close:                         {type:Number},                           
  NumberOfTrades:                {type:Number},                  
  closeTakerBuyBaseAssetVolume:  {type:Number}, 
  closeTime:                     {type:Number},                      
  QuoteAssetVolume:              {type:Number},            
  takerBuyQuoteAssetVolume:      {type:Number},    
  ignore:                        {type:Number}                 
  
});

var Klines= mongoose.model("Kline",kline_schema);
module.exports.Klines = Klines;
