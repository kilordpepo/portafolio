import React from "react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import NotesOutlinedIcon from "@material-ui/icons/NotesOutlined";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const IconMaker = (props) => {
    const selectIcon = (index) => {
      return index === 0 ? <HomeOutlinedIcon className={props.icon} />
          :  index === 1 ? <PersonOutlineOutlinedIcon className={props.icon} />
          :  index === 2 ? <NotesOutlinedIcon className={props.icon} />
          :  index === 3 ? <MailOutlineOutlinedIcon className={props.icon} />
          :  index === 4 ? <FacebookIcon className={props.icon} onMouseOver={props.mouseOver} onMouseOut={props.mouseOut} />
          :  index === 5 ? <InstagramIcon className={props.icon} onMouseOver={props.mouseOver} onMouseOut={props.mouseOut} />
          :  index === 6 ? <LinkedInIcon className={props.icon} onMouseOver={props.mouseOver} onMouseOut={props.mouseOut} />
          : <GitHubIcon className={props.icon} onMouseOver={props.mouseOver} onMouseOut={props.mouseOut} />;
    };
    return (
            <>
              {selectIcon(props.index)}
            </>
    );
  };
  
export default IconMaker;
  