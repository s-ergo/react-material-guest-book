import { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.down("md")]: {
    root: {
      width: "100%",
    },
  },
}));

function ImageTemplate(img) {
  const classes = useStyles();

  return (
    <>
      <img className={classes.root} src={img.src} alt="preview" />
    </>
  );
}

export default memo(ImageTemplate);
