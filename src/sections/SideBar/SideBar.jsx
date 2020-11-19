import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./Footer";
import SelectedListItem from "./NavLinks";
import ProfilePic from "./ProfilePic";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "16%",
    minWidth: 200,
    maxWidth: 240,
    height: "100%",
    backgroundColor: "rgb(61, 61, 61)",
    border: "1px solid black",
  },
  overlap: {
    position: "relative",
    bottom: 40,
  }
}));

const SideBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div><ProfilePic /></div>
      <div className={classes.overlap}><SelectedListItem /></div>
      <div><Footer /></div>
    </div>
  )
}

export default SideBar;