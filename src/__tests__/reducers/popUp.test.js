import popUpReducer from '../../redux/reducers/popUpReducer';
import initialState from '../../redux/store/initialState';


describe('Pop up tests ', () => {
  it('Should handle pop ups redux', () => {
    const newState = popUpReducer(initialState.popUpsDisplay, {
      type: 'POP_UP',
      payload: 2,
    });
    expect(newState).toEqual({
      bookAccommodation: 'none',
      currentPopUp: 'editTrip',
      deleteComment: 'none',
      editTrip: 'none',
    });
  });
});
