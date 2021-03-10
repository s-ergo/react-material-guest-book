const handleImage = (e, funct) => {
  const target = e.target.files[0];
  const type = target.type.split("/");
  const typeArr = ["jpg", "jpeg", "gif", "png"];

  if (!typeArr.includes(type[1])) {
    funct.handleSetter("buttonValue", "Недопустимый формат");
    return;
  } else {
    funct.handleSetter("buttonValue", "Изображение загружено");
  }

  const reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);

  reader.onload = function (e) {
    const image = new Image();
    image.src = e.target.result;

    image.onload = function () {
      let imgWidth = image.width;
      let imgHeight = image.height;
      const orientation = imgWidth / imgHeight;

      if (imgHeight > 240 || imgWidth > 320) {
        if (orientation <= 1 || imgHeight * (320 / imgWidth) > 240) {
          imgWidth = imgWidth * (240 / imgHeight);
          imgHeight = 240;
        } else {
          imgHeight = imgHeight * (320 / imgWidth);
          imgWidth = 320;
        }
      }

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = imgWidth;
      canvas.height = imgHeight;
      ctx.drawImage(image, 0, 0, imgWidth, imgHeight);

      const preview = new Image(imgWidth, imgHeight);
      preview.src = canvas.toDataURL("image/jpeg", 1.0);
      funct.handleSetter("image", preview.src);
    };
  };
};

export default handleImage;
