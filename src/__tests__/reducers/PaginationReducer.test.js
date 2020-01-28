import PaginationReducer from '../../redux/reducers/PaginationReducer';
import initialState from '../../redux/store/initialState';


describe('Pagination tests ', () => {
  it('Should handle update page number', () => {
    const newState = PaginationReducer(initialState.pagination, {
      type: 'PAGENO',
      payload: 2,
    });
    expect(newState).toEqual({
      pageNo: 2,
      itemsPerPage: 5,
    });
  });
  it('Should update items per page', () => {
    const newState = PaginationReducer(initialState.pagination, {
      type: 'ITEMSPERPAGE',
      payload: 2,
    });
    expect(newState).toEqual({
      pageNo: 0,
      itemsPerPage: 2,
    });
  });
});
