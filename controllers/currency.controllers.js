const Currency = require("../modal/currency.modal");

function getCurrencies(indRup) {
  const Currencies = new Currency();
  return Currencies.getAll(indRup);
}

module.exports = {
  getCurrencies,
};
