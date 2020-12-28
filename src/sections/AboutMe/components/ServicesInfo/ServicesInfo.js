import React from "react";
import PropTypes from "prop-types";
import { styles } from "../../../../styles";
import { makeStyles, Typography } from "@material-ui/core";
import { IconMaker } from "../index";

const useStyles = makeStyles(theme => ({
  servicesContainer: {
    marginTop: styles.sizes.thickness.thick21,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center"
    }
  },
  serviceCard: {
    width: styles.sizes.globalDimensions.percentageThird,
    boxSizing: "border-box",
    padding: `0 ${styles.sizes.specialThick.spacingThick2}`,
    [theme.breakpoints.down("sm")]: {
      width: styles.sizes.globalDimensions.percentageHalf,
      marginBottom: styles.sizes.thickness.thick11
    },
    [theme.breakpoints.down("xs")]: {
      width: styles.sizes.globalDimensions.percentageFull
    }
  },
  serviceIcon: {
    color: styles.colors.lightBlue
  },
  serviceLabel: {
    color: styles.colors.white,
    fontFamily: styles.fontFamilies.Merriweather,
    fontSize: styles.sizes.thickness.thick10,
    fontWeight: "bold"
  },
  serviceText: {
    color: styles.colors.silver,
    marginTop: styles.sizes.thickness.thick6
  }
}));

const ServicesInfo = ({ services }) => {
  const classes = useStyles();
  return (
    <div className={classes.servicesContainer}>
      {services.map(service => (
        <div className={classes.serviceCard} key={`${service.key}-item`}>
          <IconMaker
            icon={service.icon}
            sizeNum={60}
            iconColor={classes.serviceIcon}
          />
          <Typography variant='subtitle1' className={classes.serviceLabel}>
            {service.label}
          </Typography>
          <Typography variant='body2' className={classes.serviceText}>
            {service.text}
          </Typography>
        </div>
      ))}
    </div>
  );
};

ServicesInfo.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};

export default ServicesInfo;
