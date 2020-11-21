import React from "react";
import { makeStyles, Avatar, Typography } from "@material-ui/core";
import { styles } from "../../../../styles/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: styles.sizes.sidebarDimensions.width,
    minWidth: styles.sizes.sidebarDimensions.minWidth,
    maxWidth: styles.sizes.sidebarDimensions.maxWidth,
    backgroundColor: styles.colors.darkGray,
  },
  pic: {
    width: "100%",
    height: styles.sizes.sidebarDimensions.minWidth,
  },
  text: {
    color: "white",
    backgroundColor: styles.colors.transparentLightBlue,
    padding: styles.sizes.specialThick.spacingThick1,
    position: "relative",
    bottom: styles.sizes.thickness.thick22
  }
}));

const ProfilePic = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar 
      alt={props.alt} 
      variant="square" 
      className={classes.pic} 
      src={props.src}>
        Carlos Valero
      </Avatar>
      <Typography 
      variant="h5" 
      component="div" 
      align="center" 
      className={classes.text}
      >
        Carlos Valero
      </Typography>
    </div>
  );
};

export default ProfilePic;
