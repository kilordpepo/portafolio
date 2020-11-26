import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Footer, SelectedListItem, ProfilePic } from "./components/index";
import { styles } from "../../styles/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    width: styles.sizes.sidebarDimensions.width,
    minWidth: styles.sizes.sidebarDimensions.minWidth,
    maxWidth: styles.sizes.sidebarDimensions.maxWidth,
    height: "100%",
    backgroundColor: styles.colors.darkGray,
    borderRight: `${styles.sizes.thickness.thick1} solid black`
  },
  overlap: {
    position: "relative",
    bottom: styles.sizes.thickness.thick22
  }
}));

const SideBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <div>
          <ProfilePic alt="Carlos Valero" src="https://i.pinimg.com/236x/18/81/2e/18812e006fca40297d3f8be353a57c18--pig-girl-pig-birthday.jpg" />
        </div>
        <div className={classes.overlap}>
          <SelectedListItem items={[["Home", "./home"], 
          ["About me", "./about-me"], 
          ["Resume", "./resume"], 
          ["Contact me", "./contact-me"]]} 
          iconImage={["home", "person", "text", "mail"]} />
        </div>
      </div>
      <div>
        <Footer links={["https://www.facebook.com/", 
        "https://www.instagram.com/", 
        "https://www.linkedin.com/", 
        "https://github.com/"]} 
        iconImage={["facebook", "instagram", "linkedIn", "gitHub"]} />
      </div>
    </div>
  );
};

export default SideBar;
