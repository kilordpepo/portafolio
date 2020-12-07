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
    height: styles.sizes.globalDimensions.percentageFull,
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
    color: styles.colors.white,
    fontFamily: styles.fontFamilies.Merriweather,
    fontWeight: "bold",
    textTransform: "uppercase",
    [theme.breakpoints.only("xs")]: {
      fontSize: styles.sizes.fontSizes.title.breakpoints.xs
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: styles.sizes.fontSizes.title.breakpoints.sm
    },
    [theme.breakpoints.only("md")]: {
      fontSize: styles.sizes.fontSizes.title.breakpoints.md
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: styles.sizes.fontSizes.title.breakpoints.lg
    },
    [theme.breakpoints.only("xl")]: {
      fontSize: styles.sizes.fontSizes.title.breakpoints.xl
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
