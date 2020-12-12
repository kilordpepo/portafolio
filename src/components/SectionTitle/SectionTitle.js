import React from "react";
import PropTypes from "prop-types";
import { styles } from "../../styles";
import { makeStyles, Typography } from "@material-ui/core";
import IconMaker from "../IconMaker/IconMaker";

const useStyles = makeStyles(theme => ({
  titleCont: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: styles.sizes.globalDimensions.percentageFull
  },
  titleStyle: {
    fontFamily: "serif"
  },
  blue: {
    color: styles.colors.lightBlue
  }
}));

const SectionTitle = ({ iconImage, title, family, weight, size }) => {
  const classes = useStyles();
  return (
    <div className={classes.titleCont}>
      <Typography
        variant='h4'
        className={`${classes.blue} ${classes.titleStyle}`}
        style={{ fontFamily: family, fontWeight: weight, fontSize: size }}
      >
        {title}
      </Typography>
      <IconMaker icon={iconImage} sizeNum={40} iconColor={classes.blue} />
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  iconImage: PropTypes.string.isRequired,
  family: PropTypes.string.isRequired,
  weight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default SectionTitle;
