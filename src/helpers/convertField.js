
const convertInput = (payload) => {
  const { name, value } = payload;
  if (name === 'originId' || name === 'destinationId') {
    const newValue = parseInt(value, 10);
    payload.value = newValue;
    return payload;
  }

  return payload;
};

export default convertInput;
