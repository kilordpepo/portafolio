import React from "react";
import { makeStyles, Link, Typography } from "@material-ui/core";
import { styles } from "../../../../styles/styles";
import IconMaker from '../IconMaker/IconMaker';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    minWidth: styles.sizes.sidebarDimensions.minWidth,
    maxWidth: styles.sizes.sidebarDimensions.maxWidth,
    backgroundColor: styles.colors.darkGray
  },
  container: {
    display: "flex",
    justifyContent: "center"
  },
  text: {
    color: "gray",
    textAlign: "center",
    paddingBottom: styles.sizes.specialThick.spacingThick2
  },
  icon: {
    color: "gray",
  },
  icon2: {
    color: "white",
  },
  link: {
    margin: styles.sizes.specialThick.spacingThick1,
    marginTop: styles.sizes.thickness.thick16,
    marginBottom: styles.sizes.specialThick.spacingThick2,
    height: 24
  }
}));

const Footer = () => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleMouseOver = (event, index) => {
    setSelectedIndex(index);
  };

  const selectIconColor = (index) => {
    return (selectedIndex === index) ? classes.icon2 : classes.icon;
  };

  const arrValues = ["https://www.facebook.com/", 
  "https://www.instagram.com/", 
  "https://www.linkedin.com/", 
  "https://github.com/"];

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {arrValues.map((text, index) => (
          <Link
          href={text}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
          >
            <IconMaker index={index + 4} 
            icon={selectIconColor(index + 1)} 
            mouseOver={(event) => handleMouseOver(event, index + 1)} 
            mouseOut={(event) => handleMouseOver(event, 0)} 
            />
          </Link>
        ))}
      </div>
      <div className={classes.container}>
        <Typography className={classes.text} variant="body2">
          2020 &copy; Paola & Pepo, C.A.<br />All Rights Reserved.
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
