import React from "react";
import { styles } from "../../styles";
import { makeStyles } from "@material-ui/core/styles";
import { Fullname, BackgroundVid } from "./components";

const useStyles = makeStyles(theme => ({
  home: {
    width: styles.sizes.globalDimensions.percentageFull,
    height: styles.sizes.globalDimensions.percentageFull
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <BackgroundVid />
      <Fullname />
    </div>
  );
};

export default Home;
