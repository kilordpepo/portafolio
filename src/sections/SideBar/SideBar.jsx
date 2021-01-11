import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Hidden,
  Drawer,
  Typography
} from "@material-ui/core";
import { Footer, SelectedListItem, ProfilePic, IconMaker } from "./components";
import { useStyles } from "./styles";
import { LINKS } from "../../utils/constants";
import image from "./image/profile-pic.jpg";

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
          <ProfilePic alt='Carlos Valero' src={image} />
        </div>
        <div className={classes.overlap}>
          <SelectedListItem
            items={[
              { section: "Home", path: "/home" },
              { section: "About me", path: "/about-me" },
              { section: "Resume", path: "/resume" },
              { section: "Contact me", path: "/contact-me" }
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
