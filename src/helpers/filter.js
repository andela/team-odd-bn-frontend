// eslint-disable-next-line import/prefer-default-export
export const handleFilter = (e, data, key) => {
  let items;
  if (key === 'createdAt' || key === 'email') {
    items = data.filter(
      (item) => item[key].toLowerCase().search(e.target.value.toLowerCase()) !== -1,
    );
    return items;
  }
  if (key === 'trips.origin') {
    items = data.filter(
      (item) => item.trips.length && (item.trips[0].originId
        .toLowerCase()
        .search(e.target.value.toLowerCase()) !== -1),
    );
    return items;
  }
  if (key === 'trips.destination') {
    items = data.filter(
      (item) => item.trips.length
          && (item.trips[0].destinationId
            .toLowerCase()
            .search(e.target.value.toLowerCase()) !== -1),
    );
    return items;
  }
  if (key === 'firstName' || key === 'lastName') {
    items = data.filter(
      (item) => (item.user[key]
        .toLowerCase()
        .search(e.target.value.toLowerCase()) !== -1),
    );
    return items;
  }
  items = data.filter(
    (item) => item[key][key]
      .toLowerCase()
      .search(e.target.value.toLowerCase()) !== -1,
  );
  return items;
};
