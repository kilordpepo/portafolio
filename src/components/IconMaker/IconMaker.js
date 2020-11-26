import React from "react";
import PropTypes from 'prop-types';
import { HomeOutlinedIcon, 
  PersonOutlineOutlinedIcon, 
  MailOutlineOutlinedIcon, 
  NotesOutlinedIcon, 
  FacebookIcon, 
  InstagramIcon, 
  LinkedInIcon, 
  GitHubIcon, ICONS } from "./index";

const IconMaker = ({ icon, iconColor, mouseOver, mouseOut }) => {
  return (
          <>
            {icon === ICONS.home && <HomeOutlinedIcon className={iconColor} />}
            {icon === ICONS.person && <PersonOutlineOutlinedIcon className={iconColor} />}
            {icon === ICONS.text && <NotesOutlinedIcon className={iconColor} />}
            {icon === ICONS.mail && <MailOutlineOutlinedIcon className={iconColor} />}
            {icon === ICONS.facebook && <FacebookIcon className={iconColor} onMouseOver={mouseOver} onMouseOut={mouseOut} />}
            {icon === ICONS.instagram && <InstagramIcon className={iconColor} onMouseOver={mouseOver} onMouseOut={mouseOut} />}
            {icon === ICONS.linkedIn && <LinkedInIcon className={iconColor} onMouseOver={mouseOver} onMouseOut={mouseOut} />}
            {icon === ICONS.gitHub && <GitHubIcon className={iconColor} onMouseOver={mouseOver} onMouseOut={mouseOut} />}
          </>
  );
};

IconMaker.propTypes = {
  icon: PropTypes.string.isRequired,
  iconColor: PropTypes.objectOf(PropTypes.string),
  mouseOver: PropTypes.func.isRequired,
  mouseOut: PropTypes.func.isRequired
};

export default IconMaker;
