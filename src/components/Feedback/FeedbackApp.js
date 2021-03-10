import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import FeedbackPreview from "./FeedbackPreview/FeedbackRowPreview";
import Form from "./Form/Form";
import handleEmailOnBlurValidation from "./Form/handleEmailOnBlurValidation";
import handleEmailOnInput from "./Form/handleEmailOnInput";
import handleFeedbackSend from "./Form/handleFeedbackSend";
import handleHomePageValidation from "./Form/handleHomePageValidation";
import handleImage from "./Form/handleImage";
import handleNameValidation from "./Form/handleNameValidation";
import StartButton from "./StartButton/StartButton";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "3%",
  },
}));

function FeedbackApp() {
  const classes = useStyles();

  const [data, setData] = useState({
    name: "",
    mail: "",
    homePage: "",
    text: "",
    isError: false,
    errors: "",
    image: "",
    buttonValue: "Добавить изображение",
    nowDisplay: "startButton",
  });

  const handleSetter = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const funct = {
    handleChange,
    handleSetter,

    handleNameValidation,
    handleImage,
    handleEmailOnBlurValidation,
    handleHomePageValidation,
    handleFeedbackSend,
    handleEmailOnInput,
  };

  return (
    <div className="App">
      <h1>Гостевая книга</h1>
      <main className={classes.root}>
        {data.nowDisplay === "startButton" && (
          <StartButton handleSetter={handleSetter} />
        )}

        {data.nowDisplay === "form" && <Form data={data} funct={funct} />}

        <ul>
          {data.nowDisplay === "preview" && (
            <FeedbackPreview data={data} handleSetter={handleSetter} />
          )}
        </ul>
      </main>
    </div>
  );
}

export default FeedbackApp;
