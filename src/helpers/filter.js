// eslint-disable-next-line import/prefer-default-export
export const handleFilter = (e, data, key) => {
  const userSearch = e.target.value.trim();
  let items;
  if (key === 'createdAt' || key === 'email') {
    items = data.filter(
      (item) => item[key].toLowerCase().search(userSearch.toLowerCase()) !== -1,
    );
    return items;
  }
  if (key === 'trips.origin') {
    items = data.filter(
      (item) => item.trips.length && (item.trips[0].originId
        .toLowerCase()
        .search(userSearch.toLowerCase()) !== -1),
    );
    return items;
  }
  if (key === 'trips.destination') {
    items = data.filter(
      (item) => item.trips.length
          && (item.trips[0].destinationId
            .toLowerCase()
            .search(userSearch.toLowerCase()) !== -1),
    );
    return items;
  }
  if (key === 'firstName' || key === 'lastName') {
    items = data.filter(
      (item) => (item.user[key]
        .toLowerCase()
        .search(userSearch.toLowerCase()) !== -1),
    );
    return items;
  }
  if (key === 'status' || key === 'tripType') {
    items = data.filter(
      (item) => item[key][key].toLowerCase().search(userSearch.toLowerCase()) !== -1,
    );
    return items;
  }
  if (key === 'user.trips.any') {
    items = data.filter(
      (item) => item.status.status
        .toLowerCase()
        .search(userSearch.toLowerCase()) !== -1
        || item.createdAt.toLowerCase().search(userSearch.toLowerCase())
          !== -1
          || item.tripType.tripType.toLowerCase().search(userSearch.toLowerCase())
          !== -1
        || (item.trips.length
          && item.trips[0].originId
            .toLowerCase()
            .search(userSearch.toLowerCase()) !== -1)
        || (item.trips.length
          && item.trips[0].destinationId
            .toLowerCase()
            .search(userSearch.toLowerCase()) !== -1),
    );
    return items;
  }
  if (key === 'manager.trips.any') {
    items = data.filter(
      (item) => item.user.firstName
        .toLowerCase()
        .search(userSearch.toLowerCase()) !== -1
        || item.user.lastName
          .toLowerCase()
          .search(userSearch.toLowerCase()) !== -1
          || item.tripType.tripType.toLowerCase().search(userSearch.toLowerCase())
          !== -1
        || item.createdAt.toLowerCase().search(userSearch.toLowerCase())
          !== -1
          || (item.trips[0].city.city.toLowerCase().search(userSearch.toLowerCase())
          !== -1),
    );
    return items;
  }

  items = data.filter(
    (item) => item.email.toLowerCase().search(userSearch.toLowerCase()) !== -1
      || item.lastName.toLowerCase().search(userSearch.toLowerCase()) !== -1
      || item.firstName.toLowerCase().search(userSearch.toLowerCase())
        !== -1
      || item.role.type.toLowerCase().search(userSearch.toLowerCase()) !== -1,
  );
  return items;
};
