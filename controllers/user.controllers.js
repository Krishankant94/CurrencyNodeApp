const user = require("../modal/user.modal");

function getUsers() {
  return user.getUsers();
}

module.exports = {
  getUsers,
};
