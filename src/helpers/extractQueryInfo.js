import queryString from 'query-string';

const extractQueryInfo = (location) => {
  const searchParams = queryString.parse(location.search);
  const values = searchParams.info;
  return JSON.parse(values);
};

export default extractQueryInfo;
