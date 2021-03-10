import axios from "axios";

const handleEmailOnBlurValidation = (e, funct) => {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,})$/;

  if (e.target.value === "") return false;

  if (!e.target.value.match(reg) && e.target.value !== "") {
    funct.handleSetter("errors", "Введите правильный email");
    funct.handleSetter("isError", true);
    return false;
  }

  const checkingMailOriginality = async () => {
    axios
      .post("http://reactgb:8000/check", { mail: e.target.value })
      .then((res) => {
        console.log(res);
        console.log(res.data);

        if (res.data !== 0) {
          funct.handleSetter(
            "errors",
            "Вы уже комментировали. Допустим только один отзыв!"
          );
        } else {
          funct.handleSetter("mail", e.target.value);
        }
      });
  };
  checkingMailOriginality();
};

export default handleEmailOnBlurValidation;
