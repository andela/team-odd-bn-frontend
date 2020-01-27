import { changePageNo, changeItemsPerPage } from '../../redux/actions/PaginationAction';

describe('Pagination actions tests', () => {
  it('Should handle changing page number', () => {
    const newState = changePageNo(2);
    expect(newState).toEqual({
      type: 'PAGENO',
      payload: 2,
    });
  });
  it('Should items per page', () => {
    const newState = changeItemsPerPage(2);
    expect(newState).toEqual({
      type: 'ITEMSPERPAGE',
      payload: 2,
    });
  });
});
