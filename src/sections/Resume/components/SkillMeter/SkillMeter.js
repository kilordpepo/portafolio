import React, { useState } from "react";
import PropTypes from "prop-types";
import { styles } from "../../../../styles";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  skillItem: {
    marginBottom: styles.sizes.thickness.thick6,
    padding: `0 ${styles.sizes.thickness.thick11}`,
    [theme.breakpoints.down("sm")]: {
      padding: 0
    }
  },
  skillLabel: {
    color: styles.colors.white,
    fontFamily: styles.fontFamilies.Merriweather,
    marginBottom: styles.sizes.thickness.thick5
  },
  progressBar: {
    width: styles.sizes.globalDimensions.percentageFull,
    backgroundColor: styles.colors.gray
  },
  actualProgress: {
    display: "flex",
    justifyContent: "flex-end",
    height: styles.sizes.thickness.thick6,
    backgroundColor: styles.colors.lightBlue,
    lineHeight: styles.sizes.thickness.thick6,
    transition: `all ${styles.transitionDuration.speed2000}ms ease-out`
  },
  percentage: {
    color: "white",
    fontSize: styles.sizes.specialThick.spacingThick2,
    fontWeight: "bold",
    position: "relative",
    bottom: styles.sizes.specialThick.spacingThick3,
    left: styles.sizes.specialThick.spacingThick3
  },
  progressPointer: {
    boxSizing: "border-box",
    border: `${styles.sizes.specialThick.spacingThick2} solid transparent`,
    borderBottom: `${styles.sizes.thickness.thick11} solid ${styles.colors.mediumBlue}`,
    position: "relative",
    bottom: styles.sizes.specialThick.spacingThick3,
    left: styles.sizes.thickness.thick5
  }
}));

const SkillMeter = ({ skills, scrolling, page, animationOver }) => {
  const classes = useStyles();
  const [animated, setAnimated] = useState(0);

  const startAnimation = (animationKey, percentage, index) => {
    setAnimated(index + 1);
    let elem = document.getElementById(`${animationKey}-progress`);
    let label = document.getElementById(`${animationKey}-label`);
    let actualWidth = 0;
    elem.style.width = percentage + "%";
    const frame = () => {
      if (actualWidth >= percentage) {
        clearInterval(id);
      } else {
        actualWidth++;
        label.innerHTML = actualWidth + "%";
      }
    };
    const id = setInterval(
      frame,
      styles.transitionDuration.speed2000 / percentage
    );
    if (animationKey === "Ps") {
      animationOver();
    }
  };

  const confirmingPosition = index => {
    let elem = document.getElementById(`${skills[index].key}-progress`);
    let elemHeight = elem.clientHeight;
    const pageScroll = page.scrollTop;
    const pageView = page.clientHeight;
    const scrollPosition = pageScroll + pageView;
    const elemPosition =
      elem.getBoundingClientRect().top + pageScroll + elemHeight;
    if (scrollPosition > elemPosition && animated <= index) {
      startAnimation(skills[index].key, skills[index].percentage, index);
    }
  };

  const confirmAll = () => {
    for (let i = 0; i < skills.length; i++) {
      confirmingPosition(i);
    }
  };

  const animate = () => {
    if (scrolling) {
      confirmAll();
    }
  };

  animate();

  return (
    <div>
      {skills.map((sk, index) => (
        <div
          id={`${sk.key}-progressBar`}
          key={sk.key}
          className={classes.skillItem}
        >
          <Typography className={classes.skillLabel} variant='subtitle1'>
            {sk.skill.toUpperCase()}
          </Typography>
          <div className={classes.progressBar}>
            <div
              id={`${sk.key}-progress`}
              className={classes.actualProgress}
              style={{ width: "0%" }}
            >
              <span className={classes.percentage} id={`${sk.key}-label`}>
                0%
              </span>
              <div className={classes.progressPointer}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

SkillMeter.propTypes = {
  animationOver: PropTypes.func,
  page: PropTypes.object.isRequired,
  scrolling: PropTypes.bool.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      skill: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      key: PropTypes.string.isRequired
    })
  )
};

export default SkillMeter;
