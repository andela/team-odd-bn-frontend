export const Paginate = (allData, itemsPerPage) => allData
  .map((item, index) => index % itemsPerPage === 0 && allData.slice(index, index + itemsPerPage))
  .filter(Boolean);
export const PaginationStyle = (trips, pageNo) => {
  for (let i = 0; i < trips.length; i++) {
    trips[i].children[0].style.backgroundColor = '#ffffff';
    trips[i].children[0].style.color = '#00b9f2';
  }
  trips[pageNo].children[0].style.backgroundColor = '#00b9f2';
  trips[pageNo].children[0].style.color = '#ffffff';
};
