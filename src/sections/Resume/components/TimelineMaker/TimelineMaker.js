import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { SectionSubtitle } from "../index";

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
            key={`lapse-num${index}-${time.date.from.year}-${time.date.to.year}`}
            className={classes.timelineCard}
          >
            <div className={classes.dates}>
              <span className={classes.dateYear}>
                {`${time.date.to.year} `}
                {`${time.date.to.month}`}
              </span>
              <span className={classes.dateYear}>
                {`${time.date.from.month} `}
                {`${time.date.from.year}`}
              </span>
            </div>
            <div className={classes.info}>
              <span
                className={`${classes.dateYearMobile} ${classes.dateYearTo}`}
              >
                {`${time.date.to.year} `}
                {time.date.to.month}
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
                    <span className={classes.cardLocation}>
                      {time.location.toUpperCase()}
                    </span>
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
                {`${time.date.from.year} `}
                {time.date.from.month}
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
        from: PropTypes.shape({
          year: PropTypes.string.isRequired,
          date: PropTypes.string
        }),
        to: PropTypes.shape({
          year: PropTypes.string.isRequired,
          date: PropTypes.string
        })
      }),
      title: PropTypes.string.isRequired,
      reference: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};

export default TimelineMaker;
