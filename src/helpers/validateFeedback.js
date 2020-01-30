const feedBackInput = (reason) => {
  const disableButton = {
    color: '#89cff0',
    disable: true,
  };
  const allowButton = {
    color: '#33c6f3',
    disable: false,
  };
  const cleanReason = reason.trimLeft();
  return cleanReason.length < 2 ? disableButton : allowButton;
};

export default feedBackInput;
