import popUpAction from '../../redux/actions/popUpAction';

describe('Pagination actions tests', () => {
  it('Should handle changing page number', () => {
    const newState = popUpAction(2);
    expect(newState).toEqual({
      type: 'POP_UP',
      payload: 2,
    });
  });
});
