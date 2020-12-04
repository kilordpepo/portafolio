import React, { useState, useEffect } from "react";
import { styles } from "../../../../styles/styles";
import { makeStyles, Typography, Fade } from "@material-ui/core";
import AnimatedRole from "../AnimatedRole/HomeRole";

const useStyles = makeStyles(theme => ({
  homeCont: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    height: "100%",
    position: "absolute",
    top: 0,
    left: styles.sizes.sidebarDimensions.width,
    right: 0,
    zIndex: "3",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      left: 0
    },
    [theme.breakpoints.only("xl")]: {
      left: styles.sizes.sidebarDimensions.maxWidth
    }
  },
  bannerCont: {
    textAlign: "center"
  },
  text1: {
    color: "white",
    fontFamily: "Merriweather, serif",
    fontWeight: "bold",
    textTransform: "uppercase",
    [theme.breakpoints.only("xs")]: {
      fontSize: "2rem"
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "3rem"
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "3.5rem"
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "3.75rem"
    },
    [theme.breakpoints.only("xl")]: {
      fontSize: "6rem"
    }
  },
  highlightText: {
    color: styles.colors.lightBlue,
    display: "inline"
  }
}));

const Fullname = () => {
  const classes = useStyles();
  const [appear, setAppear] = useState(false);

  useEffect(() => {
    let timer = "";
    timer = setTimeout(() => {
      setAppear(true);
    }, styles.transitionDuration.speed1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className={classes.homeCont}>
      <div className={classes.bannerCont}>
        <Fade in={appear} timeout={styles.transitionDuration.speed2000}>
          <Typography className={classes.text1} variant='h2'>
            Carlos
            <div className={classes.highlightText}> Valero</div>
          </Typography>
        </Fade>
        <br />
        <AnimatedRole messages={"I am a Full Stack Developer"} />
      </div>
    </div>
  );
};

export default Fullname;
