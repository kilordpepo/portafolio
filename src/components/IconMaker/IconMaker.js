import React from "react";
import PropTypes from "prop-types";
import {
  HomeOutlinedIcon,
  PersonOutlineOutlinedIcon,
  MailOutlineOutlinedIcon,
  NotesOutlinedIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  GitHubIcon,
  MenuIcon,
  SendIcon,
  LocationOnIcon,
  PhoneEnabledIcon,
  LaptopMacIcon,
  SettingsIcon,
  StorageIcon,
  ICONS
} from "./index";

const IconMaker = ({ icon, iconColor, sizeNum, mouseOver, mouseOut }) => {
  return (
    <>
      {icon === ICONS.home && (
        <HomeOutlinedIcon className={iconColor} style={{ fontSize: sizeNum }} />
      )}
      {icon === ICONS.person && (
        <PersonOutlineOutlinedIcon
          className={iconColor}
          style={{ fontSize: sizeNum }}
        />
      )}
      {icon === ICONS.text && (
        <NotesOutlinedIcon
          className={iconColor}
          style={{ fontSize: sizeNum }}
        />
      )}
      {icon === ICONS.mail && (
        <MailOutlineOutlinedIcon
          className={iconColor}
          style={{ fontSize: sizeNum }}
        />
      )}
      {icon === ICONS.facebook && (
        <FacebookIcon
          className={iconColor}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
        />
      )}
      {icon === ICONS.instagram && (
        <InstagramIcon
          className={iconColor}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
        />
      )}
      {icon === ICONS.linkedIn && (
        <LinkedInIcon
          className={iconColor}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
        />
      )}
      {icon === ICONS.gitHub && (
        <GitHubIcon
          className={iconColor}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
        />
      )}
      {icon === ICONS.burger && (
        <MenuIcon className={iconColor} style={{ fontSize: sizeNum }} />
      )}
      {icon === ICONS.sendMail && (
        <SendIcon className={iconColor} style={{ fontSize: sizeNum }} />
      )}
      {icon === ICONS.location && (
        <LocationOnIcon className={iconColor} style={{ fontSize: sizeNum }} />
      )}
      {icon === ICONS.phone && (
        <PhoneEnabledIcon className={iconColor} style={{ fontSize: sizeNum }} />
      )}
      {icon === ICONS.laptop && (
        <LaptopMacIcon className={iconColor} style={{ fontSize: sizeNum }} />
      )}
      {icon === ICONS.engine && (
        <SettingsIcon className={iconColor} style={{ fontSize: sizeNum }} />
      )}
      {icon === ICONS.data && (
        <StorageIcon className={iconColor} style={{ fontSize: sizeNum }} />
      )}
    </>
  );
};

IconMaker.propTypes = {
  icon: PropTypes.string.isRequired,
  iconColor: PropTypes.objectOf(PropTypes.string),
  mouseOver: PropTypes.func.isRequired,
  mouseOut: PropTypes.func.isRequired,
  sizeNum: PropTypes.number
};

export default IconMaker;
