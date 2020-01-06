// eslint-disable-next-line import/prefer-default-export
export const cloudinaryWidget = (action) => {
  const widget = cloudinary.createUploadWidget(
    {
      cloudName: 'victorkarangwa4',
      uploadPreset: 'ollljekm',
    },
    (error, result) => {
      const photoList = document.getElementById('photos');
      photoList.innerHTML = ' ';
      if (!error && result && result.event === 'success') {
        const { info: img } = result;
        action(img.url);
      }
      photoList.innerHTML = 'New photos added!';
    },
  );
  widget.open();
};
