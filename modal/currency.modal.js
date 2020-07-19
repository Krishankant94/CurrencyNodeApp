class Currency {
  constructor() {
    this.Currencies = [];
  }

  getPound(inr) {
    const val = Math.round((1 * inr) / 94.118).toFixed(3);
    this.Currencies.push({ currency: "pound", value: val });
  }
  getUSD(inr) {
    const val = Math.round((1 * inr) / 74.898).toFixed(3);
    this.Currencies.push({ currency: "USD", value: val });
  }
  getYen(inr) {
    const val = Math.round((1 * inr) / 0.7).toFixed(3);
    this.Currencies.push({ currency: "Yen", value: val });
  }
  getEuro(inr) {
    const val = Math.round((1 * inr) / 85.604).toFixed(3);
    this.Currencies.push({ currency: "Euro", value: val });
  }
  getAll(inr) {
    this.getPound(inr);
    this.getUSD(inr);
    this.getYen(inr);
    this.getEuro(inr);
    return this.Currencies;
  }
}

module.exports = Currency;
