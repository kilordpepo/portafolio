import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles, Typography } from "@material-ui/core";
import { styles } from "../../../../styles";

const useStyles = makeStyles(theme => ({
  text2: {
    color: styles.colors.white,
    fontFamily: styles.fontFamilies.Roboto,
    [theme.breakpoints.only("xs")]: {
      fontSize: styles.sizes.fontSizes.subtitle.breakpoints.xs
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: styles.sizes.fontSizes.subtitle.breakpoints.sm
    },
    [theme.breakpoints.only("md")]: {
      fontSize: styles.sizes.fontSizes.subtitle.breakpoints.md
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: styles.sizes.fontSizes.subtitle.breakpoints.lg
    },
    [theme.breakpoints.only("xl")]: {
      fontSize: styles.sizes.fontSizes.subtitle.breakpoints.xl
    }
  },
  cursor1: {
    borderLeft: `${styles.sizes.thickness.thick2} solid ${styles.colors.lightGray}`
  },
  cursor2: {
    borderLeft: `${styles.sizes.thickness.thick2} solid ${styles.colors.transparent}`
  },
  cursorHidden: {
    visibility: "hidden"
  }
}));

const AnimatedRole = ({ messages }) => {
  const classes = useStyles();
  const [animation, setAnimation] = useState({
    text: "",
    message: messages,
    start: false
  });
  const [blink, setBlink] = useState(false);
  const speed = styles.transitionDuration.speed70;

  const getCurrentText = currentState => {
    return currentState.start
      ? currentState.message.substring(0, currentState.text.length + 1)
      : currentState.message.substring(0, currentState.text.length + 0);
  };

  const setCursor = blink => (blink ? classes.cursor2 : classes.cursor1);
  const hideCursor = start => !start && classes.cursorHidden;

  useEffect(() => {
    let timer = "";
    const handleType = () => {
      setAnimation(cs => ({
        ...cs, // cs means currentState
        text: getCurrentText(cs)
      }));
      timer = setTimeout(handleType, speed);
    };
    handleType();
    return () => clearTimeout(timer);
  }, [speed]);

  useEffect(() => {
    if (!animation.start) {
      let timer = "";
      timer = setTimeout(() => {
        setAnimation(cs => ({
          ...cs,
          start: true
        }));
      }, styles.transitionDuration.speed2500);
      return () => clearTimeout(timer);
    } else if (animation.text === animation.message) {
      let timer = "";
      timer = setTimeout(() => {
        setBlink(prev => !prev);
      }, styles.transitionDuration.speed500);
      return () => clearTimeout(timer);
    }
  }, [animation.text, animation.message, animation.start, blink]);

  return (
    <Typography className={classes.text2} variant='h4'>
      {animation.text}
      <span className={`${setCursor(blink)} ${hideCursor(animation.start)}`} />
    </Typography>
  );
};

AnimatedRole.propTypes = {
  messages: PropTypes.string.isRequired
};

export default AnimatedRole;
