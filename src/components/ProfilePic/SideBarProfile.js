import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Avatar, Typography } from "@material-ui/core";
import { styles } from "../../styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: styles.sizes.globalDimensions.percentageFull,
    backgroundColor: styles.colors.darkGray
  },
  pic: {
    width: styles.sizes.globalDimensions.percentageFull,
    height: styles.sizes.globalDimensions.sections.spacingLeft,
    [theme.breakpoints.down("xs")]: {
      height: styles.sizes.globalDimensions.sections.minSpacingLeft
    },
    [theme.breakpoints.only("xl")]: {
      height: styles.sizes.globalDimensions.sections.maxSpacingLeft
    }
  },
  text: {
    color: styles.colors.white,
    backgroundColor: styles.colors.transparentLightBlue,
    fontFamily: styles.fontFamilies.Merriweather,
    fontWeight: "bold",
    padding: styles.sizes.specialThick.spacingThick1,
    position: "relative",
    bottom: styles.sizes.thickness.thick22
  }
}));

const ProfilePic = ({ alt, src }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar alt={alt} variant='square' className={classes.pic} src={src}>
        Carlos Valero
      </Avatar>
      <Typography
        variant='h5'
        component='div'
        align='center'
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
