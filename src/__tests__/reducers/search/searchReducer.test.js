import searchReducers from '../../../redux/reducers/searchReducers/searchReducers';
import { searchKey, searchResults } from '../../../redux/actions/search/searchAction';
import { searchResultsAction, data, keyAction } from '../../../__mocks__/search/search';

describe('Search Reducer ', () => {
  it('Should act on SEARCH_RESULTS', () => {
    const triggerState = searchReducers({}, searchResultsAction);
    expect(triggerState).toEqual({
      payload: searchResultsAction.payload,
    });
  });
  it('Should act on SEARCH_KEY', () => {
    const triggerState = searchReducers({}, keyAction);
    expect(triggerState).toEqual({
      key: keyAction.key,
    });
  });
});
