import averageRatings from '../../helpers/averageRatings';

const allRatings = [
  {
    ratings: [{
      rating: '2',
    }],
  },
];
const emptRatings = [
  {
    ratings: [],
  },
];

describe('Expect to find avaerage rating', () => {
  it('Should display all totoal average', () => {
    const rate = averageRatings(allRatings);
    expect(rate).toEqual([2]);
  });
  it('Should return 0 for empty rates', () => {
    const rate = averageRatings(emptRatings);
    expect(rate).toEqual([0]);
  });
});
