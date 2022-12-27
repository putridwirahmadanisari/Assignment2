const data = __dirname + '/../data/db.json';
const fs = require('fs');
const { verifyToken } = require('../helper/jwt');

async function authentication(req, res, next) {
  try {
    const token = req.headers.token;
    const userDecode = verifyToken(token);
    const dataUsers = await JSON.parse(fs.readFileSync(data, 'utf-8'));
    const user = dataUsers.users;
    const findUserById = user.find((element) => element.id == userDecode.id);

    if (!findUserById) {
      return res.status(401).json({ message: 'Invalid user Id' });
    }

    res.dataUser = findUserById;
    return next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}

module.exports = authentication;
