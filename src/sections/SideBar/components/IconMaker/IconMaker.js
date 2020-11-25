import React from "react";
import PropTypes from 'prop-types';
import { HomeOutlinedIcon, 
  PersonOutlineOutlinedIcon, 
  MailOutlineOutlinedIcon, 
  NotesOutlinedIcon, 
  FacebookIcon, 
  InstagramIcon, 
  LinkedInIcon, 
  GitHubIcon, icons } from "./index";

const IconMaker = ({ icon, iconColor, mouseOver, mouseOut }) => {
  const selectIcon = (icon) => {
    if (icon === icons.home) {
      return <HomeOutlinedIcon className={iconColor} />;
    } else if (icon === icons.person) {
      return <PersonOutlineOutlinedIcon className={iconColor} />;
    } else if (icon === icons.text) {
      return <NotesOutlinedIcon className={iconColor} />;
    } else if (icon === icons.mail) {
      return <MailOutlineOutlinedIcon className={iconColor} />;
    } else if (icon === icons.facebook) {
      return <FacebookIcon className={iconColor} onMouseOver={mouseOver} onMouseOut={mouseOut} />;
    } else if (icon === icons.instagram) {
      return <InstagramIcon className={iconColor} onMouseOver={mouseOver} onMouseOut={mouseOut} />;
    } else if (icon === icons.linkedIn) {
      return <LinkedInIcon className={iconColor} onMouseOver={mouseOver} onMouseOut={mouseOut} />;
    } else if (icon === icons.gitHub) {
      return <GitHubIcon className={iconColor} onMouseOver={mouseOver} onMouseOut={mouseOut} />;
    };
  };
  return (
          <>
            {selectIcon(icon)}
          </>
  );
};

IconMaker.propTypes = {
  icon: PropTypes.string.isRequired,
  iconColor: PropTypes.object.isRequired,
  mouseOver: PropTypes.func.isRequired,
  mouseOut: PropTypes.func.isRequired
};

export default IconMaker;
