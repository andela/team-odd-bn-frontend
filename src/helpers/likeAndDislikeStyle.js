const likeAndDislikeColor = (data) => {
  const holder = data && data.allAboutWhoReacted;
  if (holder && holder.liked) { return { like: '#2d6272' }; }
  if (holder && holder.disliked) { return { dislike: '#2d6272' }; }
  return { dislike: '#32c8f4', like: '#32c8f4' };
};
export default likeAndDislikeColor;
