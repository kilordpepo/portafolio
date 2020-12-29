import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Hidden,
  Drawer,
  Typography,
  makeStyles
} from "@material-ui/core";
import { Footer, SelectedListItem, ProfilePic, IconMaker } from "./components";
import { styles } from "../../styles";
import { LINKS } from "../../utils/constants";

const useStyles = makeStyles(theme => ({
  sidebarCont: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    width: styles.sizes.globalDimensions.sections.spacingLeft,
    height: styles.sizes.globalDimensions.percentageFull,
    backgroundColor: styles.colors.darkGray,
    borderRight: `${styles.sizes.thickness.thick1} solid ${styles.colors.black}`,
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: styles.depth.globalLayers.highLevel,
    [theme.breakpoints.down("xs")]: {
      width: styles.sizes.globalDimensions.sections.minSpacingLeft
    },
    [theme.breakpoints.down("md")]: {
      overflow: "auto"
    },
    [theme.breakpoints.only("xl")]: {
      width: styles.sizes.globalDimensions.sections.maxSpacingLeft
    }
  },
  appBar: {
    backgroundColor: styles.colors.darkGray
  },
  menuButton: {
    position: "absolute"
  },
  overlap: {
    position: "relative",
    bottom: styles.sizes.thickness.thick22
  },
  text: {
    fontFamily: styles.fontFamilies.Merriweather,
    fontWeight: "bold"
  },
  centerTitle: {
    width: styles.sizes.globalDimensions.percentageFull,
    display: "flex",
    justifyContent: "center"
  },
  drawerPaper: {
    width: styles.sizes.sidebarDimensions.minWidth,
    [theme.breakpoints.only("sm")]: {
      width: styles.sizes.sidebarDimensions.width
    }
  }
}));

const SideBar = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleHiding = () => {
    setMobileOpen(false);
  };

  const assembledSideBar = (
    <div className={classes.sidebarCont}>
      <div>
        <div>
          <ProfilePic
            alt='Carlos Valero'
            src='https://i.pinimg.com/236x/18/81/2e/18812e006fca40297d3f8be353a57c18--pig-girl-pig-birthday.jpg'
          />
        </div>
        <div className={classes.overlap}>
          <SelectedListItem
            items={[
              { section: "Home", path: "./home" },
              { section: "About me", path: "./about-me" },
              { section: "Resume", path: "./resume" },
              { section: "Contact me", path: "./contact-me" }
            ]}
            iconImage={["home", "person", "text", "mail"]}
            hide={handleHiding}
          />
        </div>
      </div>
      <div>
        <Footer
          links={LINKS}
          iconImage={["facebook", "instagram", "linkedIn", "gitHub"]}
        />
      </div>
    </div>
  );

  return (
    <div>
      <Hidden mdUp implementation='css'>
        <AppBar position='fixed' className={classes.appBar}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <IconMaker icon='burger' />
            </IconButton>
            <div className={classes.centerTitle}>
              <Typography variant='h6' className={classes.text} noWrap>
                My Portfolio
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
      </Hidden>
      <Hidden mdUp implementation='css'>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true
          }}
        >
          {assembledSideBar}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation='css'>
        <Drawer variant='permanent' open>
          {assembledSideBar}
        </Drawer>
      </Hidden>
    </div>
  );
};

export default SideBar;
