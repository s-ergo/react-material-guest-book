import { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.down("md")]: {
    root: {
      margin: "3% 0",
    },
  },
}));

function HomepageLink({ homePage }) {
  const classes = useStyles();

  return (
    <a className={classes.root} href={"http://" + homePage}>
      <i className="material-icons">link</i>
    </a>
  );
}

export default memo(HomepageLink);
