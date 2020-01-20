export default (error) => {
  let err = error.response
    ? error.response
    : (error.response = { data: { message: 'Ooops! Network Error' } });
  err = error.response.data.message
    ? error.response.data.message
    : error.response.data.error;
  err = typeof err === 'object' ? err : [err];
  return err;
};
