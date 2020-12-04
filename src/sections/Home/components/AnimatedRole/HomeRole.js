import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles, Typography } from "@material-ui/core";
import { styles } from "../../../../styles/styles";

const useStyles = makeStyles(theme => ({
  text2: {
    color: "white",
    fontFamily: "Roboto Condensed, sans-serif",
    [theme.breakpoints.only("xs")]: {
      fontSize: "1.1rem"
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "1.7rem"
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "2rem"
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "2.125rem"
    },
    [theme.breakpoints.only("xl")]: {
      fontSize: "3.4rem"
    }
  },
  cursor1: {
    borderLeft: `${styles.sizes.thickness.thick2} solid gray`
  },
  cursor2: {
    borderLeft: `${styles.sizes.thickness.thick2} solid transparent`
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
    typingSpeed: styles.transitionDuration.speed70,
    hide: true,
    start: false,
    blink: false
  });

  useEffect(() => {
    let timer = "";
    const handleType = () => {
      setState(cs => ({
        ...cs, // cs means currentState
        text: getCurrentText(cs)
      }));
      timer = setTimeout(handleType, state.typingSpeed);
    };
    handleType();
    return () => clearTimeout(timer);
  }, [state.typingSpeed]);

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
      setTimeout(() => {
        setState(cs => ({
          ...cs,
          blink: !state.blink
        }));
      }, styles.transitionDuration.speed500);
    }
  }, [state.text, state.message, state.start, state.blink]);

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
      <span className={`${setCursor(state.blink)} ${hideCursor(state.hide)}`} />
    </Typography>
  );
};

AnimatedRole.propTypes = {
  messages: PropTypes.string.isRequired
};

export default AnimatedRole;
