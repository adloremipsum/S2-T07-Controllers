const customQuery = require("../db");

const usersController = {
  getUsers: async function (req, res) {
    // 1. Ir a buscar los usuarios
    // 2. Los ordenamos para poder manipularlos y hacer lo que necesite
    const users = await customQuery();
    console.log(users);

    // 3. Dar al usuario HTML con esta información
    res.render("home", { users });
  },
  createForm: function (req, res) {
    res.render("createForm");
  },
};

module.exports = usersController;
