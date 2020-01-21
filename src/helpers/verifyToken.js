import jwt from 'jsonwebtoken';

const verifyToken = (token) => jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
  if (err) {
    return false;
  }
  return decoded;
});

export default verifyToken;
