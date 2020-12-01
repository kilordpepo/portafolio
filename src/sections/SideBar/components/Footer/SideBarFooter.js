import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, Link, Typography } from "@material-ui/core";
import { styles } from "../../../../styles/styles";
import { IconMaker } from "../index";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    backgroundColor: styles.colors.darkGray
  },
  container: {
    display: "flex",
    justifyContent: "center"
  },
  text: {
    color: "gray",
    fontFamily: "Roboto Condensed, sans-serif",
    textAlign: "center",
    paddingBottom: styles.sizes.specialThick.spacingThick2
  },
  icon: {
    color: "gray",
    transition: `color ${styles.transitionDuration.superFast} ease-out`
  },
  icon2: {
    color: "white",
    transition: `color ${styles.transitionDuration.superFast} ease-out`
  },
  link: {
    margin: styles.sizes.specialThick.spacingThick1,
    marginTop: styles.sizes.thickness.thick16,
    marginBottom: styles.sizes.specialThick.spacingThick2,
    height: styles.sizes.thickness.thick13
  }
}));

const Footer = ({ links, iconImage }) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleMouseOver = (event, index) => setSelectedIndex(index);

  const selectIconColor = index =>
    selectedIndex === index ? classes.icon2 : classes.icon;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {links.map((text, index) => (
          <Link
            href={text}
            target='_blank'
            rel='noopener noreferrer'
            className={classes.link}
          >
            <IconMaker
              icon={iconImage[index]}
              iconColor={selectIconColor(index + 1)}
              mouseOver={event => handleMouseOver(event, index + 1)}
              mouseOut={event => handleMouseOver(event, 0)}
            />
          </Link>
        ))}
      </div>
      <div className={classes.container}>
        <Typography className={classes.text} variant='body2'>
          2020 &copy; Paola & Pepo, C.A.
          <br />
          All Rights Reserved.
        </Typography>
      </div>
    </div>
  );
};

Footer.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string),
  iconImage: PropTypes.arrayOf(PropTypes.string)
};

export default Footer;
