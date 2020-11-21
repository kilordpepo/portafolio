import React from "react";
import { HomeOutlinedIcon, PersonOutlineOutlinedIcon, MailOutlineOutlinedIcon, NotesOutlinedIcon, FacebookIcon, InstagramIcon, LinkedInIcon, GitHubIcon } from "@material-ui/icons";

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
            <div>
              {selectIcon(props.index)}
            </div>
    );
  };
  
  export default IconMaker;
  