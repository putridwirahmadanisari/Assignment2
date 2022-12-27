const jwt = require('jsonwebtoken');
const SECRET = 'rahasiaaa';

function generateToken(payload) {
  const token = jwt.sign(payload, SECRET);

  return token;
}

function verifyToken(token) {
  const decode = jwt.verify(token, SECRET);

  return decode;
}

module.exports = {
  generateToken,
  verifyToken,
};
