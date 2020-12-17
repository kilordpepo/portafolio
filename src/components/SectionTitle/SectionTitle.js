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
    borderBottom: `${styles.sizes.thickness.thick1} dashed ${styles.colors.lightGray}`,
    paddingBottom: styles.sizes.thickness.thick2,
    height: styles.sizes.globalDimensions.percentageFull
  },
  titleStyle: {
    fontFamily: "serif"
  },
  blue: {
    color: styles.colors.lightBlue
  }
}));

const SectionTitle = ({ iconImage, title, styling }) => {
  const classes = useStyles();
  return (
    <div className={classes.titleCont}>
      <Typography
        variant='h4'
        className={`${classes.blue} ${classes.titleStyle}`}
        style={{ ...styling }}
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
  styling: PropTypes.shape({
    fontFamily: PropTypes.string.isRequired,
    fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  })
};

export default SectionTitle;
