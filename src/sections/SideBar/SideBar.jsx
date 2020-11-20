import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./components/Footer/SideBarFooter";
import SelectedListItem from "./components/NavLinks/SideBarLinks";
import ProfilePic from "./components/ProfilePic/SideBarProfile";
import { styles } from "../../../../styles/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    width: styles.sizes.sidebarDimensions.width,
    minWidth: styles.sizes.sidebarDimensions.minWidth,
    maxWidth: styles.sizes.sidebarDimensions.maxWidth,
    height: "100%",
    backgroundColor: styles.colors.gray1,
    border: `${styles.sizes.thickness.thick1}px solid black`
  },
  overlap: {
    position: "relative",
    bottom: styles.sizes.thickness.thick10
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
