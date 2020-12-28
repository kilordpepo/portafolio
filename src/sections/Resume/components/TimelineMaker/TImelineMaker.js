import React from "react";
import PropTypes from "prop-types";
import { styles } from "../../../../styles";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  timelineWrapper: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: styles.sizes.thickness.thick6
    }
  },
  timelineCard: {
    display: "flex",
    marginBottom: styles.sizes.thickness.thick16,
    [theme.breakpoints.down("sm")]: {
      marginBottom: styles.sizes.specialThick.spacingThick2
    }
  },
  dates: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  dateYear: {
    color: styles.colors.white,
    position: "relative",
    right: styles.sizes.thickness.thick5
  },
  dateYearMobile: {
    color: styles.colors.white,
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "inline",
      position: "relative",
      left: styles.sizes.thickness.thick7
    }
  },
  dateYearFrom: {
    bottom: styles.sizes.specialThick.spacingThick2
  },
  dateYearTo: {
    top: styles.sizes.specialThick.spacingThick2
  },
  info: {
    padding: `${styles.sizes.thickness.thick3} 0`,
    [theme.breakpoints.down("sm")]: {
      padding: 0
    }
  },
  dateline: {
    borderLeft: `${styles.sizes.thickness.thick2} solid ${styles.colors.lightBlue}`
  },
  datelineCircle: {
    position: "relative",
    right: styles.sizes.specialThick.spacingThick1,
    width: styles.sizes.thickness.thick5,
    height: styles.sizes.thickness.thick5,
    border: `${styles.sizes.thickness.thick2} solid ${styles.colors.lightBlue}`,
    borderRadius: styles.sizes.globalDimensions.percentageHalf
  },
  cardContent: {
    padding: styles.sizes.thickness.thick11,
    marginLeft: styles.sizes.thickness.thick6
  },
  cardTitle: {
    color: styles.colors.white,
    fontFamily: styles.fontFamilies.Merriweather,
    fontSize: styles.sizes.thickness.thick10,
    fontWeight: "bold"
  },
  cardReference: {
    color: styles.colors.lightBlue,
    fontFamily: styles.fontFamilies.Roboto,
    fontWeight: "bold"
  },
  cardText: {
    color: styles.colors.silver
  }
}));

const TimelineMaker = ({ timeline }) => {
  const classes = useStyles();

  return (
    <ul className={classes.timelineWrapper}>
      {timeline.map(time => (
        <li
          key={`${time.date.from}-${time.date.to}`}
          className={classes.timelineCard}
        >
          <div className={classes.dates}>
            <span className={classes.dateYear}>{time.date.to}</span>
            <span className={classes.dateYear}>{time.date.from}</span>
          </div>
          <div className={classes.info}>
            <span className={`${classes.dateYearMobile} ${classes.dateYearTo}`}>
              {time.date.to}
            </span>
            <div className={classes.datelineCircle}></div>
            <div className={classes.dateline}>
              <div className={classes.cardContent}>
                <Typography className={classes.cardTitle} variant='subtitle1'>
                  {time.title.toUpperCase()}
                </Typography>
                <Typography className={classes.cardReference} variant='caption'>
                  {time.reference.toUpperCase()}
                </Typography>
                <Typography className={classes.cardText}>
                  {time.text}
                </Typography>
              </div>
            </div>
            <div className={classes.datelineCircle}></div>
            <span
              className={`${classes.dateYearMobile} ${classes.dateYearFrom}`}
            >
              {time.date.from}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

TimelineMaker.propTypes = {
  timeline: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.shape({
        from: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired
      }),
      title: PropTypes.string.isRequired,
      reference: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};

export default TimelineMaker;
