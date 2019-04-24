const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    mongoose.connect('mongodb://localhost/parsBtc', {useNewUrlParser: true}, function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
});

var parsBtc_schema= new Schema({

  symbolBtc:{ type:String,require: true},
  priceChangeBtc:{ type:Number},
  weightedAvgPriceBtc:{ type:String},
  prevClosePriceBtc: {type:String},
  lastPriceBtc: {type:String},
  openPriceBtc: {type:String},
  highPriceBtc: {type:String},
  lowPriceBtc:  {type:String}
  
});

var parsBtc= mongoose.model("parsBtc",parsBtc_schema);
module.exports.parsBtc = parsBtc;
      