const handleNameValidation = (e) => {
  if (e.target.value.match(/[^0-9A-Z a-z]/gi)) {
    e.target.value = e.target.value.replace(/[^0-9A-Z a-z]/gi, "");
  }
};

export default handleNameValidation;
