const handleHomePageValidation = (e) => {
  e.target.value = e.target.value
    .toLowerCase()
    .replace("https://", "")
    .replace("http://", "");
};

export default handleHomePageValidation;
