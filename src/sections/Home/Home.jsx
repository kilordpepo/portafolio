import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fullname, BackgroundVid } from "./components/index";

const useStyles = makeStyles(theme => ({
  home: {
    width: "100%",
    height: "100%"
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
