const getAverageRatings = (data) => {
  const combineRatings = data.map((item) => {
    const { ratings } = item;
    if (ratings.length !== 0) {
      const calculateRatings = ratings.reduce((accumulator, currentValue) => {
        const newData = parseInt(currentValue.rating, 10);
        return accumulator + newData;
      }, 0);
      const totalAverage = calculateRatings / ratings.length;
      return totalAverage;
    }
    return 0;
  });
  return combineRatings;
};

export default getAverageRatings;
