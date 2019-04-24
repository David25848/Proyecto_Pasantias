var express = require("express");
var router= express.Router();
const Currency= require("./models/currency").Currency;

router.get("/",function (req,res) {
  Currency.find({},function (err,currencies){
    if(err) console.log(err);
    res.render("index",{currencies: currencies});
  })
});



module.exports = router;
