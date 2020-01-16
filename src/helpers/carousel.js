let slideIndex = 0;
export const showDivs = (currentSlide, trips) => {
  const tripsLength = trips.length - 2;

  if (currentSlide > tripsLength) { slideIndex = 1; }
  if (currentSlide < 1) { slideIndex = tripsLength; }

  for (let i = 0; i <= tripsLength; i++) {
    if (trips[i].className === 'trip') {
      trips[i].style.display = 'none';
    }
  }
  trips[slideIndex].style.display = 'flex';
};

export const plusDivs = (n, trips) => {
  slideIndex += n;

  showDivs(slideIndex, trips);
};
