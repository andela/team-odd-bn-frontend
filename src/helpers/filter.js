// eslint-disable-next-line import/prefer-default-export
export const handleFilter = (e, key) => {
  const input = document.getElementById('searchInput');
  const filter = input.value.toUpperCase();
  const allRows = document.getElementsByClassName('tableContainer')[0];
  const singleRow = allRows.getElementsByClassName('entity');
  for (let i = 0; i < singleRow.length; i++) {
    const txtValue = singleRow[i].getElementsByClassName(key)[0]
      .textContent;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      singleRow[i].style.display = '';
    } else {
      singleRow[i].style.display = 'none';
    }
  }
};
