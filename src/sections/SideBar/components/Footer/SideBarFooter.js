import React from "react";
import { makeStyles, Link, Typography } from "@material-ui/core";
import { FacebookIcon, InstagramIcon, LinkedInIcon, GitHubIcon } from '@material-ui/icons';
import { styles } from "../../../../styles/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: styles.sizes.sidebarDimensions.width,
    minWidth: styles.sizes.sidebarDimensions.minWidth,
    maxWidth: styles.sizes.sidebarDimensions.maxWidth,
    backgroundColor: styles.colors.gray1,
  },
  container: {
    display: "flex",
    justifyContent: "center"
  },
  text: {
    color: "gray",
    textAlign: "center",
    paddingBottom: styles.sizes.thickness.thick6,
  },
  icon: {
    color: "gray",
    margin: styles.sizes.thickness.thick4,
    marginTop: styles.sizes.thickness.thick9,
    marginBottom: styles.sizes.thickness.thick6,
  },
  icon2: {
    color: "white",
    margin: styles.sizes.thickness.thick4,
    marginTop: styles.sizes.thickness.thick9,
    marginBottom: styles.sizes.thickness.thick6,
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

  const arrValues = [["https://www.facebook.com/", <FacebookIcon 
  className={selectIconColor(1)} 
  onMouseOver={(event) => handleMouseOver(event, 1)} 
  onMouseOut={(event) => handleMouseOver(event, 0)} 
  />], 
  ["https://www.instagram.com/", <InstagramIcon 
  className={selectIconColor(2)} 
  onMouseOver={(event) => handleMouseOver(event, 2)} 
  onMouseOut={(event) => handleMouseOver(event, 0)}
  /> ], 
  ["https://www.linkedin.com/", <LinkedInIcon 
  className={selectIconColor(3)} 
  onMouseOver={(event) => handleMouseOver(event, 3)} 
  onMouseOut={(event) => handleMouseOver(event, 0)}
  />], 
  ["https://github.com/", <GitHubIcon 
  className={selectIconColor(4)} 
  onMouseOver={(event) => handleMouseOver(event, 4)} 
  onMouseOut={(event) => handleMouseOver(event, 0)}
  />]];

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {arrValues.map((text, index) => (
          <Link
          href={text[0]}
          target="_blank"
          rel="noopener"
          >
            {text[1]}
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
