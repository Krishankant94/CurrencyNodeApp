const users = [
  { name: "krishan", age: 25 },
  { name: "Ajay", age: 29 },
];

class User {
  getUsers() {
    return users;
  }
}

module.exports = new User();
