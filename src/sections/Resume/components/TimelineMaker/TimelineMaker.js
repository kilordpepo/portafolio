import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Typography } from "@material-ui/core";
import { styles } from "../../../../styles";
import { SectionSubtitle } from "../index";

const useStyles = makeStyles(theme => ({
  subtitle: {
    marginBottom: styles.sizes.thickness.thick21
  },
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

const TimelineMaker = ({ subtitle, timeline }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.subtitle}>
        <SectionSubtitle
          subtitleText={subtitle.text}
          size={subtitle.size}
          borderColor={subtitle.borderColor}
          padding={subtitle.padding}
          alignItems={subtitle.alignItems}
        />
      </div>
      <ul className={classes.timelineWrapper}>
        {timeline.map((time, index) => (
          <li
            key={`lapse-num${index}-${time.date.from}-${time.date.to}`}
            className={classes.timelineCard}
          >
            <div className={classes.dates}>
              <span className={classes.dateYear}>{time.date.to}</span>
              <span className={classes.dateYear}>{time.date.from}</span>
            </div>
            <div className={classes.info}>
              <span
                className={`${classes.dateYearMobile} ${classes.dateYearTo}`}
              >
                {time.date.to}
              </span>
              <div className={classes.datelineCircle} />
              <div className={classes.dateline}>
                <div className={classes.cardContent}>
                  <Typography className={classes.cardTitle} variant='subtitle1'>
                    {time.title.toUpperCase()}
                  </Typography>
                  <Typography
                    className={classes.cardReference}
                    variant='caption'
                  >
                    {time.reference.toUpperCase()}
                  </Typography>
                  <Typography className={classes.cardText}>
                    {time.text}
                  </Typography>
                </div>
              </div>
              <div className={classes.datelineCircle} />
              <span
                className={`${classes.dateYearMobile} ${classes.dateYearFrom}`}
              >
                {time.date.from}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

TimelineMaker.propTypes = {
  subtitle: PropTypes.shape({
    text: PropTypes.string.isRequired,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    borderColor: PropTypes.string,
    padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    alignItems: PropTypes.string
  }),
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
