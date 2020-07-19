const express = require("express");
const PORT = process.env.PORT || 4000;
const userRoutes = require("./routes/user.routes");
const currencyRoutes = require("./routes/currency.routes");
const app = express();

app.use(userRoutes);
app.use(currencyRoutes);
app.use((req, res) => {
  res.send("Hi from Node");
});

app.listen(PORT, () => {
  console.log(`Application is listening on ${PORT}`);
});
