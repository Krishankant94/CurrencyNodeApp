const router = require("express").Router();
const currencyControllers = require("../controllers/currency.controllers");

router.get("/currency", (req, res) => {
  let currencyData = [];
  currencyData = currencyControllers.getCurrencies(req.query.price);
  res.send(currencyData);
});

module.exports = router;
