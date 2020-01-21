import dotenv from 'dotenv';
import { isTravelAdmin } from '../../helpers/isTravelAdmin';

dotenv.config();

describe('Travel Admin test', () => {
  it('Expect to get false', () => {
    const result = isTravelAdmin();
    expect(result).toEqual(false);
  });
});
