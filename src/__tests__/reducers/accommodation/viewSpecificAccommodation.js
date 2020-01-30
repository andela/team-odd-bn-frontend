import singleAccommodationReducer from '../../../redux/reducers/accommodation/singleAccommodationReducer';

const initialState = {
  singleAccommodation: [],
  singleAccommodationError: [],
  userProfile: [],
};

describe('Expect to view single accommodation', () => {
  it('Should update store with new accommodation data', () => {
    const newAction = {
      type: 'VIEW_SINGLE_ACCOMMODATION_SUCCESS',
      payload: [{ data: 'I am data' }],
    };
    const result = singleAccommodationReducer(initialState, newAction);
    expect(result).toEqual(
      {
        singleAccommodation: [
          { data: 'I am data' },
        ],
        singleAccommodationError: [],
        userProfile: [],
      },
    );
  });

  it('Should save accommodation error into the store', () => {
    const newAction = {
      type: 'VIEW_SINGLE_ACCOMMODATION_ERROR',
      payload: ['server error'],
    };
    const result = singleAccommodationReducer(initialState, newAction);
    expect(result).toEqual(
      {
        singleAccommodation: [],
        singleAccommodationError: ['server error'],
        userProfile: [],
      },
    );
  });
});
