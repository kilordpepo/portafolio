import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import { styles } from "../../../../styles";
import { useStyles } from "./styles";
import { SectionSubtitle } from "../index";

const SkillMeter = ({ subtitle, skills, scrolling, page, animationOver }) => {
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
    if (animationKey === "Sl") {
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

  useEffect(() => {
    if (scrolling) {
      for (let i = 0; i < skills.length; i++) {
        confirmingPosition(i);
      }
    }
  });

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
      {skills.map((sk, index) => (
        <div
          id={`${sk.key}-progress-bar`}
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
  subtitle: PropTypes.shape({
    text: PropTypes.string.isRequired,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    borderColor: PropTypes.string,
    padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    alignItems: PropTypes.string
  }),
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
