import { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.down("md")]: {
    root: {
      marginBottom: "5%",
    },
  },
}));

function DateStreeng() {
  const date = new Date();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {date.getFullYear()}-{date.getMonth() + 1}-{date.getUTCDate()} &ensp;
      {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
    </div>
  );
}

export default memo(DateStreeng);
