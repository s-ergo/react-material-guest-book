import { memo, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 850,
    margin: "auto",
    padding: "3%",
    position: "absolute",
    top: "15%",
    left: 0,
    right: 0,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    borderRadius: 5,
    background: "#fff",
  },

  h2: {
    marginBottom: "5%",
  },

  closeForm: {
    position: "absolute",
    top: "2%",
    right: "1%",
  },

  wrapper: {
    display: "flex",
    justifyContent: "space-between",
  },

  userInfo: {
    width: "32%",
  },

  feedbackTextarea: {
    width: "100%",
    margin: "4% 0",
  },

  button: {
    minWidth: "31%",
    fontSize: 12,
  },

  [theme.breakpoints.down("md")]: {
    root: {
      width: "100%",
      height: "auto",
      position: "relative",
    },

    closeForm: {
      top: "1%",
    },

    wrapper: {
      flexDirection: "column",
    },

    userInfo: {
      width: "100%",
      marginBottom: "3%",
    },

    button: {
      width: "100%",
      margin: "4% 0 1% 0",
    },
  },
}));

function Form({ funct, data }) {
  const classes = useStyles();
  const imageLoader = useRef(null);

  return (
    <form
      onSubmit={(e) => funct.handleFeedbackSend(e, data)}
      className={classes.root}
    >
      <h2 className={classes.h2}>Мой комментарий:</h2>

      <IconButton
        aria-label="delete"
        className={classes.closeForm}
        onClick={() => funct.handleSetter("nowDisplay", "startButton")}
      >
        <CloseIcon />
      </IconButton>

      <span className={classes.wrapper}>
        <TextField
          required
          name="name"
          id="name"
          label="Имя (на английском)"
          helperText=""
          variant="outlined"
          className={classes.userInfo}
          defaultValue={data.name}
          onInput={(e) => {
            funct.handleNameValidation(e);
            funct.handleChange(e);
          }}
        />

        <TextField
          error={data.isError}
          required
          id="mail"
          name="mail"
          label="E-mail"
          className={classes.userInfo}
          defaultValue={data.mail}
          helperText={data.errors}
          variant="outlined"
          onInput={(e) => {
            funct.handleEmailOnInput(e);
            funct.handleSetter("errors", "");
            funct.handleSetter("isError", false);
          }}
          onBlur={(e) => {
            funct.handleChange(e);
            funct.handleEmailOnBlurValidation(e, funct);
          }}
        />

        <TextField
          id="homePage"
          name="homePage"
          label="Моя домашняя страница"
          className={classes.userInfo}
          defaultValue={data.homePage}
          variant="outlined"
          onInput={(e) => funct.handleHomePageValidation(e)}
          onBlur={(e) => funct.handleChange(e)}
        />
      </span>

      <TextField
        required
        id="outlined-multiline-static"
        name="text"
        className={classes.feedbackTextarea}
        label="Текст комментария"
        multiline
        rows={8}
        defaultValue={data.text}
        variant="outlined"
        onBlur={(e) => funct.handleChange(e)}
      />

      <span className={classes.wrapper}>
        <input
          hidden
          type="file"
          ref={imageLoader}
          onChange={(e) => funct.handleImage(e, funct)}
        />

        <Button
          className={classes.button}
          variant="contained"
          size="small"
          onClick={(e) => imageLoader.current.click()}
        >
          {data.buttonValue}
        </Button>

        <Button
          className={classes.button}
          variant="contained"
          size="small"
          onClick={() => funct.handleSetter("nowDisplay", "preview")}
        >
          Предварительный просмотр
        </Button>

        <Button
          className={classes.button}
          size="small"
          variant="contained"
          type="submit"
        >
          Опубликовать
        </Button>
      </span>
    </form>
  );
}

export default memo(Form);
