import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import apiCall from '../../../helpers/apiCall';
import { searchKey, searchResults } from '../../../redux/actions/search/searchAction';
import { searchResultsAction, data, keyAction } from '../../../__mocks__/search/search';


describe('Password reset Actions', () => {
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });
  it('it Should dispatch searchResults', async () => {
    const calledActions = searchResults(data);
    expect(calledActions).toEqual(searchResultsAction);
  });
  it('it Should dispatch searchKey', async () => {
    const calledActions = searchKey('createdAt');
    expect(calledActions).toEqual(keyAction);
  });
});
