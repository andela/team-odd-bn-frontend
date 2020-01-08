import jwt from 'jsonwebtoken';

const generateToken = (payload, secretKey) => jwt.sign(payload, secretKey, { expiresIn: '1h' });
export default generateToken;
