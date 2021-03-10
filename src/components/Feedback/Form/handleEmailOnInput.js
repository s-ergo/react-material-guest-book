const handleEmailOnInput = (e) => {
  e.target.value = e.target.value.toLowerCase();
  if (e.target.value.match(/[^@0-9a-z-\.]/gi)) {
    e.target.value = e.target.value.replace(/[^@0-9a-z-\.]/gi, "");
  }
};

export default handleEmailOnInput;
