const data = __dirname + '/../data/db.json';
const fs = require('fs');
const { generateToken } = require('../helper/jwt');

class userController {
  static async userLogin(req, res) {
    const { username, password } = req.body;
    try {
      const dataUsers = await JSON.parse(fs.readFileSync(data, 'utf-8'));
      const { users } = dataUsers;
      const user = users.find((element) => element.username == username);

      if (user) {
        const isCorrectPassword = user.password == password;

        if (isCorrectPassword) {
          const token = generateToken({
            id: user.id,
            username: user.username,
          });

          res.status(200).json({ message: 'Login success!', token });
        } else {
          res.status(400).json({ message: 'Wrong password!' });
        }
      } else {
        res.status(400).json({ message: 'Username not found!' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = userController;
