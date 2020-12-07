import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles, Typography } from "@material-ui/core";
import { styles } from "../../../../styles/styles";

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
  const [state, setState] = useState({
    text: "",
    message: messages,
    hide: true,
    start: false
  });
  const [blink, setBlink] = useState(false);
  const speed = styles.transitionDuration.speed70;

  useEffect(() => {
    let timer = "";
    const handleType = () => {
      setState(cs => ({
        ...cs, // cs means currentState
        text: getCurrentText(cs)
      }));
      timer = setTimeout(handleType, speed);
    };
    handleType();
    return () => clearTimeout(timer);
  }, [speed]);

  useEffect(() => {
    if (!state.start) {
      let timer = "";
      timer = setTimeout(() => {
        setState(cs => ({
          ...cs,
          start: true,
          hide: false
        }));
      }, styles.transitionDuration.speed2500);
      return () => clearTimeout(timer);
    } else if (state.text === state.message) {
      let timer = "";
      timer = setTimeout(() => {
        setBlink(prev => !prev);
      }, styles.transitionDuration.speed500);
      return () => clearTimeout(timer);
    }
  }, [state.text, state.message, state.start, blink]);

  const getCurrentText = currentState => {
    return currentState.start
      ? currentState.message.substring(0, currentState.text.length + 1)
      : currentState.message.substring(0, currentState.text.length + 0);
  };

  const setCursor = blink => (blink ? classes.cursor2 : classes.cursor1);
  const hideCursor = hide => hide && classes.cursorHidden;

  return (
    <Typography className={classes.text2} variant='h4'>
      {state.text}
      <span className={`${setCursor(blink)} ${hideCursor(state.hide)}`} />
    </Typography>
  );
};

AnimatedRole.propTypes = {
  messages: PropTypes.string.isRequired
};

export default AnimatedRole;
