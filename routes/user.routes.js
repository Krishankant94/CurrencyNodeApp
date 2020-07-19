const router = require("express").Router();
const userControllers = require("../controllers/user.controllers");

/*Get all the users*/
router.get("/users", (req, res) => {
  const users = userControllers.getUsers();
  res.send(users);
});

module.exports = router;
