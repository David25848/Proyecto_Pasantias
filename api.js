const request = require("request");
const http= require("http");
const bodyParser= require("body-parser");
const express= require("express");
const app= express();
//var router_app= require("./routes");
var Currency= require("./models/currency").Currency;
var parsBtc= require("./models/parsBtc").parsBtc;
var Klines = require("./models/klines").Klines;
const methodOverride = require("method-override");
const logger= require("morgan");

app.use("/public",express.static('public'));

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.set("view engine", "jade");


const hostname = 'https://api.binance.com';
const path = "/api/v1/ticker/24hr";
const pathKlines = "/api/v1/klines";

// Currency.find({},function(er, cripto){
//   console.log(cripto);
// });

   /*setInterval(req =>{ request(`${hostname}${path}` , (err,res,api)=>{
    if(err){
      console.log("Se ha producido un error 1")
    }
     // console.log(api)
      var data = JSON.parse(api);
      // console.log(data);   
    
      data.map((currency)=> {
        var currency_symbol = currency['symbol'],
            currency_id= currency['_id'],
            currency_priceChange = currency['priceChange'],
            currency_priceChangePercent  = currency['priceChangePercent'],
            currency_weightedAvgPrice  = currency['weightedAvgPrice'],
            currency_prevClosePrice  = currency['prevClosePrice'],
            currency_lastPrice  = currency['lastPrice'],
            currency_lastQty  = currency['lastQty'],
            currency_bidPrice  = currency['bidPrice'],
            currency_askPrice  = currency['askPrice'],
            currency_openPrice  = currency['openPrice'],
            currency_highPrice  = currency['highPrice'],
            currency_lowPrice  = currency['lowPrice'],
            currency_volume  = currency['volume'],
            currency_quoteVolume  = currency['quoteVolume'],
            currency_openTime  = currency['openTime'],
            currency_closeTime  = currency['closeTime'];
           // console.log(symbol);
        var db = Currency.find({symbol: currency_symbol}, (err, currencies) => {
          if (currencies.length) {
           // console.log('update')
            
            function updateCurrency(currency,cb){
              console.log(currency_symbol);
              Currency.findOne({symbol : currency_symbol}, function (err, docs) {
                  if (docs.length){
                      cb('Name exists already',null);
                  }else{
                      currency.save(function(err){
                          cb(err,currency);
                      });
                  }
              });
          }
          
            Currency.findOne({symbol: currency_symbol},function(err,existingCurrency){

              // console.log(existingCurrency);
              if (!err && existingCurrency){
                  existingCurrency.symbol = currency_symbol;
                  existingCurrency.priceChange = currency_priceChange;
                  existingCurrency.weightedAvgPrice = currency_weightedAvgPrice;
                  existingCurrency.prevClosePrice = currency_prevClosePrice;
                  existingCurrency.lastPrice = currency_lastPrice;
                  existingCurrency.openPrice = currency_openPrice;
                  existingCurrency.highPrice = currency_highPrice;
                  existingCurrency.low = currency_lowPrice;
                  updateCurrency(existingCurrency,function(err2,currency){
                      if (err2 || !currency){
                          console.log('error updated currency: ',err2);
                      }else{
                          console.log('currency updated: ',currency);
                      }
           
                  });
              } 
           });
          } else {
            console.log('new')

            var currency = new Currency({
              symbol:                 currency_symbol,
              priceChange: 	          currency_priceChange,
              priceChangePercent:     currency_priceChangePercent,  
              weightedAvgPrice:       currency_weightedAvgPrice,   
              prevClosePrice:         currency_prevClosePrice,  
              lastPrice:              currency_lastPrice,   
              lastQty:                currency_lastQty,       
              bidPrice:               currency_bidPrice,  
              askPrice:               currency_askPrice,  
              openPrice:              currency_openPrice,  
              highPrice:              currency_highPrice,  
              lowPrice:               currency_lowPrice,  
              volume:                 currency_volume,  
              quoteVolume:            currency_quoteVolume,  
              openTime:               currency_openTime,  
              closeTime:              currency_closeTime
            });
            currency.save(function(err) {
              if(err) {
                console.log("se ha producido error 0");
              }
              console.log("datos guardadados correctamente");
              console.log(currency);
            })
          }
        })
      })
    }) 
  }, 15000)*/
        //  console.log("hola");
        //  console.log('*************************db: ', db)

        // PARS BTC

      
    //   setInterval(interval => {var symbols = Currency.find({}).exec(function(er, currencies){
    //    // console.log('currencies: ', currencies.length)
    //     var result= currencies.filter(symbol => symbol["symbol"].slice(-3) == "BTC");
    //     console.log("result", result.length);
    //     // var slice= currencies[0].symbol.slice(-3);
    //     // console.log(slice);

    //     result.map((currency) => {
    //             let currency_symbol = currency['symbol'];
    //             let currency_priceChange = currency['priceChange'];
    //             let currency_priceChangePercent  = currency['priceChangePercent'];
    //             let currency_weightedAvgPrice  = currency['weightedAvgPrice '];
    //             let currency_prevClosePrice  = currency['prevClosePrice'];
    //             let currency_lastPrice  = currency['lastPrice'];
    //             let currency_lastQty  = currency['lastQty'];
    //             let currency_bidPrice  = currency['bidPrice'];
    //             let currency_askPrice  = currency['askPrice'];
    //             let currency_openPrice  = currency['openPrice'];
    //             let currency_highPrice  = currency['highPrice'];
    //             let currency_lowPrice  = currency['lowPrice'];
    //             let currency_volume  = currency['volume'];
    //             let currency_quoteVolume  = currency['quoteVolume'];
    //             let currency_openTime  = currency['openTime'];
    //             let currency_closeTime  = currency['closeTime'];
    //       if(result.length){
    //          console.log("Update btc");
    //        function updateCurrency(currency,cb){
    //           // console.log(currency_symbol);
    //           Currency.findOne({symbol : currency_symbol}, function (err, docs) {
    //               if (docs.length){
    //                   cb('Name exists already',null);
    //               }else{
    //                   currency.save(function(err){
    //                       cb(err,currency);
    //                   });
    //               }
    //           });
    //         }
          
    //         Currency.findOne({symbol: currency_symbol},function(err,existingCurrency){

              
    //           if (!err && existingCurrency){
    //               existingCurrency.symbol = currency_symbol;
    //               existingCurrency.priceChange = currency_priceChange;
    //               existingCurrency.weightedAvgPrice = currency_weightedAvgPrice;
    //               existingCurrency.prevClosePrice = currency_prevClosePrice;
    //               existingCurrency.lastPrice = currency_lastPrice;
    //               existingCurrency.openPrice = currency_openPrice;
    //               existingCurrency.highPrice = currency_highPrice;
    //               existingCurrency.low = currency_lowPrice;
    //               updateCurrency(existingCurrency,function(err2,currency){
    //                   if (err2 || !currency){
    //                       console.log('error updated btc: ',err2);
    //                   }else{
    //                       console.log('currency updated btc: ',currency);
    //                   }
           
    //               });
    //           } 
    //        });
    //       }else{
    //         console.log("new btc")
    //         var btc= new parsBtc({
    //           symbolBtc:                 currency_symbol,
    //           priceChangeBtc: 	         currency_priceChange,
    //           priceChangePercentBtc:     currency_priceChangePercent,  
    //           weightedAvgPriceBtc:       currency_weightedAvgPrice,   
    //           prevClosePriceBtc:         currency_prevClosePrice,  
    //           lastPriceBtc:              currency_lastPrice,   
    //           lastQtyBtc:                currency_lastQty,       
    //           bidPriceBtc:               currency_bidPrice,  
    //           askPriceBtc:               currency_askPrice,  
    //           openPriceBtc:              currency_openPrice,  
    //           highPriceBtc:              currency_highPrice,  
    //           lowPriceBtc:               currency_lowPrice,  
    //           volumeBtc:                 currency_volume,  
    //           quoteVolumeBtc:            currency_quoteVolume,  
    //           openTimeBtc:               currency_openTime,  
    //           closeTimeBtc:              currency_closeTime  
        
    //       });

    //         btc.save(function(err) {
    //             if(err) {
    //              console.log("se ha producido error btc");
    //             }
              
    //         });
    //            console.log("Datos guardados correctamente btc")
    //       }
    //     })
    //  }) 
    //   }, 15000)
      



      
      // Metodo de klinesS
       
     
       /*Currency.findOne({symbol: 'TRXBTC'},function (err,currency){
            console.log(currency);
       
          //  currencies.map((currency) =>{
         request(`${hostname}${pathKlines}?symbol=TRXBTC&interval=1m&limit=1` , (err,res,api)=>{
            if(err){
              console.log("Se ha producido un error")
            }
            console.log("Consultando Klines")
            // console.log(currency.symbol)
              var klines = JSON.parse(api);

                  console.log("Comienzo*****"+klines+"******Final");

                 klines.map((kline) => {
                  console.log("ENTRA AL METODO++++"+kline);
                  var kline_openTime = kline[0];
                  var kline_open  = kline[1];
                  var kline_high  = kline['High'];
                  var kline_low  = kline['Low'];
                  var kline_close  = kline['Close'];
                  var kline_closeTime = kline['Close_time'];
                  var kline_QuoteAssetVolume  = kline['Quote_asser_volume'];
                  var kline_NumberOfTrades  = kline['Number_of_Trades'];
                  var kline_takerBuyBaseAssetVolume  = kline['Taker_buy_base_asset_volume'];
                  var kline_takerBuyQuoteAssetVolume = kline['Taker_buy_quote_asset_volume'];
                  var kline_ignore  = kline['Ignore'];
                  var kline_id = currency._id ;

                  console.log(kline_openTime);
                  console.log(kline_open);
                  console.log(currency._id);  
                  // console.log(klines);
                  
                    var kline= new Klines({
                      openTime: 	                     kline_openTime,
                      open:                            kline_open,  
                      high:                            kline_high,   
                      low:                             kline_low,  
                      close:                           kline_close,
                      closeTime:                       kline_closeTime,
                      QuoteAssetVolume:                kline_QuoteAssetVolume,
                      NumberOfTrades:                  kline_NumberOfTrades ,
                      closeTakerBuyBaseAssetVolume:    kline_takerBuyBaseAssetVolume,
                      takerBuyQuoteAssetVolume:        kline_takerBuyQuoteAssetVolume,
                      ignore:                          kline_ignore,
                      currency:                        kline_id
                    });
  
                      kline.save(function(err) {
                        if(err) {
                          console.log("se ha producido error");
                        }
                        console.log("Datos guardados correctamente(klines)"+ kline)
                    })
                });

              
            
           });
         });   
              // var db = Klines.find({},(err,klines)=> {
              //   if(klines.length){
              //       function updateKline(kline,cb){
              //         // console.log(kline_symbol);
              //         Klines.findOne({_id : kline_id}, function (err, docs) {
              //             if (docs.length){
              //                 cb('Name exists already',null);
              //             }
              //             else{
              //                 klines.save(function(err){
              //                     cb(err,kline);
              //                 });
              //               }
              //           });
              //       }
                  
              //      Klines.findOne({_id: kline_id},function(err,existingKline){
      
              //       // console.log(existingCurrency);
              //       if (!err && existingKline){
              //           existingKline.openTime = kline_openTime;
              //           existingKline.open = kline_open;
              //           existingKline.high = kline_high;
              //           existingKline.low = kline_low;
              //           existingKline.close = kline_close;
              //           existingKline.closeTime = kline_closeTime;
              //           existingKline.QuoteAssetVolume = kline_QuoteAssetVolume;
              //           existingKline.NumberOfTrades = kline_NumberOfTrades;
              //           existingKline.closeTakerBuyBaseAssetVolume = kline_takerBuyBaseAssetVolume;
              //           existingKline.takerBuyQuoteAssetVolume = kline_takerBuyQuoteAssetVolume;
              //           existingKline.ignore = kline_ignore;
              //           existingKline._id = kline_id;
              //           updateKline(existingKline,function(err2,kline){
              //               if (err2 || !kline){
              //                   console.log('error updated kline: ',err2);
              //               }else{
              //                   console.log('kline updated: ',kline);
              //               }
                
              //               });
              //           } 
              //       });
              //      } 
              //    else {
                        
                  







              // });
            // });
          // });
        // });
      

      //     console.log(currency.symbol);
      //     console.log(klines['Open_time']+"open time");
      //     console.log(klines['Open']);
      //     console.log(klines['High']);
      //     console.log(klines['Low']);


      
      //     });

      //   });
       
      // });*/
     
      // Currency.find({},function (err,currencies){
      //   console.log(currencies);
      // })
      app.get("/",function (req,res) {
       Currency.find({},function (err,currencies){
          if(err) return console.log(err);
          res.send(currencies);
       });
      });
      app.get("/k",function (req,res) {
        Klines.find({},function (err,currencies){
           if(err) return console.log(err);
           res.send(currencies);
        });
       });

      // app.get("/24h",function (req,res) {
      //     Klines.find({},function (err,currencies){
      //       if(err) console.log(err);
      //       res.render("prueba",{currencies:currencies});
      //     });
      // });
  

    
   //app.use("/api",router_api);

  app.listen(4440, ()=>{
        console.log("Express ha iniciado correctamente!");
   })
