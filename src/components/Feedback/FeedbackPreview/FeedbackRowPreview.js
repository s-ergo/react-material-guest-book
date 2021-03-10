import { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import DateStreeng from "./DateStreeng";
import HomepageLink from "./HomepageLink";
import ImageTemplate from "./ImageTemplate";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "0.7%",
    listStyleType: "none",
  },

  paper: {
    width: "100%",
  },

  liContainer: {
    height: "100%",
  },

  userData: {
    padding: "2%",
    flexDirection: "column",
    backgroundColor: "#F9F9F9",
  },

  userName: {
    marginBottom: "3%",
  },

  userFeedback: {
    padding: "2%",
  },

  userImage: {
    padding: "2%",
    margin: "auto",
    width: "100%",
    justifyContent: "center",
  },

  button: {
    marginBottom: "6%",
    fontSize: 12,
  },

  [theme.breakpoints.down("md")]: {
    userName: {
      margin: "4% 0",
    },

    userFeedback: {
      margin: "4% 0",
    },
  },
}));

function FeedbackRowPreview({ data, handleSetter }) {
  const classes = useStyles();

  return (
    <li className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container className={classes.liContainer}>
          <Grid item container xs={12} sm={3} className={classes.userData}>
            <Button
              size="small"
              variant="contained"
              className={classes.button}
              onClick={() => handleSetter("nowDisplay", "form")}
            >
              Продолжить редактирование
            </Button>

            <div className={classes.userName}>{data.name}</div>
            {data.homePage && <HomepageLink homePage={data.homePage} />}
            <DateStreeng />
          </Grid>

          <Grid item xs={12} sm={5} className={classes.userFeedback}>
            {data.text}
          </Grid>

          <Grid item container xs={12} sm={4} className={classes.userImage}>
            {data.image && <ImageTemplate src={data.image} />}
          </Grid>
        </Grid>
      </Paper>
    </li>
  );
}

export default memo(FeedbackRowPreview);
