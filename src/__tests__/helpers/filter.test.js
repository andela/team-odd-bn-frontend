import { handleFilter } from '../../helpers/filter';
import { payload, users } from '../../__mocks__/search/search';

describe('Search filter test', () => {
  it('should filter by date requested ', () => {
    const filteredItems = handleFilter({ target: { value: '2020' } }, payload, 'createdAt');
    expect(filteredItems).toEqual(payload);
  });
  it('should filter by email ', () => {
    const filteredItems = handleFilter({ target: { value: '@' } }, users, 'email');
    expect(filteredItems).toEqual(users);
  });
  it('should filter by origin ', () => {
    const filteredItems = handleFilter({ target: { value: '' } }, payload, 'trips.origin');
    expect(filteredItems).toEqual(payload);
  });
  it('should filter by destination ', () => {
    const filteredItems = handleFilter({ target: { value: '' } }, payload, 'trips.destination');
    expect(filteredItems).toEqual(payload);
  });
  it('should filter by first name ', () => {
    const filteredItems = handleFilter({ target: { value: '' } }, payload, 'firstName');
    expect(filteredItems).toEqual(payload);
  });
  it('should filter by last name ', () => {
    const filteredItems = handleFilter({ target: { value: '' } }, payload, 'lastName');
    expect(filteredItems).toEqual(payload);
  });
  it('should filter by status', () => {
    const filteredItems = handleFilter({ target: { value: '' } }, payload, 'status');
    expect(filteredItems).toEqual(payload);
  });
});
