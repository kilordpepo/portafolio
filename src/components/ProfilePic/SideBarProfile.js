import React from "react";
import PropTypes from 'prop-types';
import { makeStyles, Avatar, Typography } from "@material-ui/core";
import { styles } from "../../styles/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minWidth: styles.sizes.sidebarDimensions.minWidth,
    maxWidth: styles.sizes.sidebarDimensions.maxWidth,
    backgroundColor: styles.colors.darkGray,
  },
  pic: {
    width: "100%",
    height: "100%",
    minHeight: styles.sizes.sidebarDimensions.minWidth,
    maxHeight: "auto",
  },
  text: {
    color: "white",
    backgroundColor: styles.colors.transparentLightBlue,
    padding: styles.sizes.specialThick.spacingThick1,
    position: "relative",
    bottom: styles.sizes.thickness.thick22
  }
}));

const ProfilePic = ({ alt, src }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar 
      alt={alt} 
      variant="square" 
      className={classes.pic} 
      src={src}>
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

ProfilePic.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default ProfilePic;