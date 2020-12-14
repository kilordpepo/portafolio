import React from "react";
import PropTypes from "prop-types";
import { styles } from "../../styles";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  subtitleCont: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: styles.colors.white,
    margin: `0 ${styles.sizes.specialThick.spacingThick2}`
  },
  subtitleUnderline: {
    position: "relative",
    bottom: styles.sizes.thickness.thick5,
    padding: `0 ${styles.sizes.thickness.thick6}`,
    borderBottom: `${styles.sizes.thickness.thick2} solid ${styles.colors.lightBlue}`
  },
  subUnderline: {
    position: "relative",
    top: styles.sizes.thickness.thick5,
    marginBottom: styles.sizes.thickness.thick2,
    borderBottom: `${styles.sizes.thickness.thick2} solid ${styles.colors.lightBlue}`
  },
  subtitle: {
    fontFamily: styles.fontFamilies.Merriweather,
    fontWeight: "bold"
  }
}));

const SectionSubtitle = ({ subtitleText, size, borderColor }) => {
  const classes = useStyles();
  return (
    <div className={classes.subtitleCont}>
      <div
        className={classes.subtitleUnderline}
        style={{
          borderColor
        }}
      >
        <div
          className={classes.subUnderline}
          style={{
            borderColor
          }}
        >
          <Typography
            variant='h6'
            className={classes.subtitle}
            style={{ fontSize: size }}
          >
            {subtitleText}
          </Typography>
        </div>
      </div>
    </div>
  );
};

SectionSubtitle.propTypes = {
  subtitleText: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderColor: PropTypes.string
};

export default SectionSubtitle;
