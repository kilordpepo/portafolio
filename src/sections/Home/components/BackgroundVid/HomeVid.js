import React from "react";
//import { styles } from "../../../../styles/styles";
import { makeStyles } from "@material-ui/core";
import video from "./video/video_03_gaussian_blur.mp4";
import image from "./image/image_1.jpg";

const useStyles = makeStyles(theme => ({
  videoCont: {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    overflow: "hidden",
    zIndex: "1"
  },
  videoElement: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  bg: {
    position: "absolute",
    background: "black",
    opacity: "0.5",
    zIndex: 2,
    width: "100%",
    height: "100%"
  }
}));

const BackgroundVid = ({ vid }) => {
  const classes = useStyles();
  return (
    <div className={classes.videoCont}>
      <div className={classes.bg}></div>
      <video
        className={classes.videoElement}
        autoplay='autoplay'
        muted
        loop='loop'
      >
        <source src={video} type='video/mp4' />
        <source src='' type='video/webm' />
        <source src='' type='video/ogg' />
      </video>
    </div>
  );
};

export default BackgroundVid;
