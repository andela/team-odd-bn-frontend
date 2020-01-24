const newAccommodation = (data, likes) => {
  const accommodation = data.map((item, index) => {
    const findLikesDislikes = likes[index];
    item.LikesDislikes = findLikesDislikes;
    return item;
  });
  return accommodation;
};

export default newAccommodation;
