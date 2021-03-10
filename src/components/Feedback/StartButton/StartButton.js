import { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles(() => ({
  root: {
    position: "fixed",
    right: "4%",
    bottom: "4%",
  },
}));

function StartButton({ handleSetter }) {
  const classes = useStyles();

  return (
    <Button
      className={classes.root}
      variant="contained"
      startIcon={<EditIcon />}
      color="primary"
      onClick={() => handleSetter("nowDisplay", "form")}
    >
      Мой отзыв
    </Button>
  );
}

export default memo(StartButton);
