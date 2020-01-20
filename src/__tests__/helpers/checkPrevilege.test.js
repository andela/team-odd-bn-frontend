import dotenv from 'dotenv';
import { checkPrevilege } from '../../helpers/checkPrevilege';

dotenv.config();

describe('Super Admin test', () => {
  it('Expect to get false', () => {
    const result = checkPrevilege(1);
    expect(result).toEqual(false);
  });
});
