 //        console.log(currency['symbol']);
  //        console.log(currency['priceChange']);
  //        console.log(currency['priceChangePercent']);
  //        console.log(currency['weightedAvgPrice']);
  //        console.log(currency['prevClosePrice']);
  //        console.log(currency['lastPrice']);
  //        console.log(currency['lastQty']);
  //        console.log(currency['bidPrice']);
  //        console.log(currency['askPrice']);
  //        console.log(currency['openPrice']);
  //        console.log(currency['highPrice']);
  //        console.log(currency['lowPrice']);
  //        console.log(currency['volume']);
  //        console.log(currency['quoteVolume']);
  //        console.log(currency['openTime']);
  //        console.log(currency['closeTime']);

  //  Currency.find({}, function (err,currency){
        
      //   if(currency != null){
      //     currency.update({},function(err){
      //       if(err) {
      //         console.log("se ha producido error update");
      //       }
      //     })
      //   } else{
      //     currency.save(function(err) {
      //       if(err) {
      //         console.log("se ha producido error 0");
      //       }
      //       console.log("entra en el metodo")
      //     })
      //     console.log("Datos guardados correctamente")
      //   }
      // })


      //Metodo de klinesS

       /* Currency.find({},function (err,currencies){
        var kline;
        currencies.map((currency) =>{
          request(`${hostname}${pathKlines}?symbol=${currency.symbol}&interval=1m&limit=1` , (err,res,api)=>{
            if(err){
              console.log("Se ha producido un error")
            }
            console.log("Segunda consulta")
            console.log(currency.symbol)
            kline = JSON.parse(api);
          });
        });

        console.log(kline);
        //console.log(JSON.parse(api))
          
        /*kline.map((klines) => {
          //let kline_symbol = currency.symbol;
          let kline_openTime = klines['Open_time'];
          let kline_open  = klines['Open'];
          let kline_high  = klines['High'];
          let kline_low  = klines['Low'];
          let kline_close  = klines['Close'];
          let kline_closeTime = klines['Close_time'];
          let kline_QuoteAssetVolume  = klines['Quote_asser_volume'];
          let kline_NumberOfTrades  = klines['Number_of_Trades'];
          let kline_takerBuyBaseAssetVolume  = klines['Taker_buy_base_asset_volume'];
          let kline_takerBuyQuoteAssetVolume = klines['Taker_buy_quote_asset_volume'];
          let kline_ignore  = klines['Ignore'];

          console.log(currency.symbol);
          console.log(klines['Open_time']+"open time");
          console.log(klines['Open']);
          console.log(klines['High']);
          console.log(klines['Low']);


          var klines= new Kline({
            symbol:                          kline_symbol,
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
            ignore:                          kline_ignore
          });

          klines.save(function(err) {
            if(err) {
              console.log("se ha producido error");
            }
            console.log("Datos guardados correctamente(klines)")
          });

        });
       
      });*/

      // if(db){
          //   console.log('update')
          //   console.log(db.status(200)
          //   // })
          // } else {
          //   console.log('new')
          //   // var currency = new Currency({
          //   //   symbol:                 currency_symbol,
          //   //   priceChange: 	          currency_priceChange,
          //   //   priceChangePercent:     currency_priceChangePercent,  
          //   //   weightedAvgPrice:       currency_weightedAvgPrice,   
          //   //   prevClosePrice:         currency_prevClosePrice,  
          //   //   lastPrice:              currency_lastPrice,   
          //   //   lastQty:                currency_lastQty,       
          //   //   bidPrice:               currency_bidPrice,  
          //   //   askPrice:               currency_askPrice,  
          //   //   openPrice:              currency_openPrice,  
          //   //   highPrice:              currency_highPrice,  
          //   //   lowPrice:               currency_lowPrice,  
          //   //   volume:                 currency_volume,  
          //   //   quoteVolume:            currency_quoteVolume,  
          //   //   openTime:               currency_openTime,  
          //   //   closeTime:              currency_closeTime
          //   // });

          //   // currency.save(function(err) {
          //   //   if(err) {
          //   //     console.log("se ha producido error 0");
          //   //   }
          //   //   console.log("datos guardadados correctamente")
          //   //   console.log(currency)
          // }
         
        //  else{
        //   Currency.findOneAndUpdate({}).where('symbol').equals(symbol),{upsert: true, setDefaultsOnInsert:true}.exec(function (err){ 
        //     if(err) {
        //       console.log("se ha producido error update");
        //     }
        //     else console.log("datos actualizados")
    //    })
      
    // })
    // openTime:                      {type:String},	                     
    // open:                          {type:String},                         
    // high:                          {type:String},                           
    // low:                           {type:String},                             
    // close:                         {type:String},                           
    // NumberOfTrades:                {type:String},                  
    // closeTakerBuyBaseAssetVolume:  {type:String}, 
    // closeTime:                     {type:String},                      
    // QuoteAssetVolume:              {type:String},            
    // takerBuyQuoteAssetVolume:      {type:String},    
    // ignore:                        {type:String},   

  //   Currency.find({},function (err,currencies){
  //     console.log("hola1");
  //     currencies.map((currency) =>{
  //      request(`${hostname}${pathKlines}?symbol=${currency.symbol}&interval=1m&limit=1` , (err,res,api)=>{
  //         if(err){
  //           console.log("Se ha producido un error")
  //         }
  //         console.log("Consultando Klines")
  //         // console.log(currency.symbol)
  //         var kline = JSON.parse(api);
  //         console.log(kline);

  //               kline.map((klines) => {
  //         let kline_id = currency._id;
  //         let kline_openTime = klines['Open_time'];
  //         let kline_open  = klines['Open'];
  //         let kline_high  = klines['High'];
  //         let kline_low  = klines['Low'];
  //         let kline_close  = klines['Close'];
  //         let kline_closeTime = klines['Close_time'];
  //         let kline_QuoteAssetVolume  = klines['Quote_asser_volume'];
  //         let kline_NumberOfTrades  = klines['Number_of_Trades'];
  //         let kline_takerBuyBaseAssetVolume  = klines['Taker_buy_base_asset_volume'];
  //         let kline_takerBuyQuoteAssetVolume = klines['Taker_buy_quote_asset_volume'];
  //         let kline_ignore  = klines['Ignore'];
          
  //         console.log(klines);

  //         });
          
  //         var db = Klines.find({},(err,klines)=> {
  //             if(klines.length){
  //                 function updateKline(kline,cb){
  //                   console.log(kline_symbol);
  //                   Klines.findOne({symbol : kline_symbol}, function (err, docs) {
  //                       if (docs.length){
  //                           cb('Name exists already',null);
  //                       }
  //                       else{
  //                           klines.save(function(err){
  //                               cb(err,kline);
  //                           });
  //                       }
  //                   });
  //               }
              
  //               Klines.findOne({symbol: kline_id},function(err,existingKline){
    
  //                 // console.log(existingCurrency);
  //                 if (!err && existingKline){
  //                     existingKline.openTime = kline_openTime;
  //                     existingKline.open = kline_open;
  //                     existingKline.high = kline_high;
  //                     existingKline.low = kline_low;
  //                     existingKline.close = kline_close;
  //                     existingKline.closeTime = kline_closeTime;
  //                     existingKline.QuoteAssetVolume = kline_QuoteAssetVolume;
  //                     existingKline.NumberOfTrades = kline_NumberOfTrades;
  //                     existingKline.closeTakerBuyBaseAssetVolume = kline_takerBuyBaseAssetVolume;
  //                     existingKline.takerBuyQuoteAssetVolume = kline_takerBuyQuoteAssetVolume;
  //                     existingKline.ignore = kline_ignore;
  //                     existingKline._id = kline_id;
  //                     updateKline(existingKline,function(err2,kline){
  //                         if (err2 || !kline){
  //                             console.log('error updated kline: ',err2);
  //                         }else{
  //                             console.log('kline updated: ',kline);
  //                         }
              
  //                         });
  //                     } 
  //                 });
  //               }  else {
                        
  //                     var klines= new Klines({
  //                       symbol:                          kline_symbol,
  //                       openTime: 	                     kline_openTime,
  //                       open:                            kline_open,  
  //                       high:                            kline_high,   
  //                       low:                             kline_low,  
  //                       close:                           kline_close,
  //                       closeTime:                       kline_closeTime,
  //                       QuoteAssetVolume:                kline_QuoteAssetVolume,
  //                       NumberOfTrades:                  kline_NumberOfTrades ,
  //                       closeTakerBuyBaseAssetVolume:    kline_takerBuyBaseAssetVolume,
  //                       takerBuyQuoteAssetVolume:        kline_takerBuyQuoteAssetVolume,
  //                       ignore:                          kline_ignore,
  //                       currency:                        kline_id
  //                     });

  //                       Klines.save(function(err) {
  //                         if(err) {
  //                           console.log("se ha producido error");
  //                         }
  //                         console.log("Datos guardados correctamente(klines)"+ kline_symbol)
  //                     })
                  
  //                     }
  //         });
  //      });
  //    });
  //  });
   