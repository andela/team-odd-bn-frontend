import dotenv from 'dotenv';
import verifyToken from '../helpers/verifyToken';
import generateToken from '../helpers/generateToken';


dotenv.config();

const { JWT_KEY } = process.env;

describe('Reducer tests', () => {
  it('Expect token to pass', () => {  
    const randomToken = generateToken({ name: 'John' }, JWT_KEY);
    const result = verifyToken(randomToken);
    expect(result.name).toEqual('John');
  });
});
