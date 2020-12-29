import React from "react";
import { makeStyles } from "@material-ui/core";
import { styles } from "../../../../styles";
import videoMp4 from "./video/video_03_gaussian_blur.mp4";
import videoWebm from "./video/video_03_gaussian_blur.webm";
import videoOgg from "./video/video_03_gaussian_blur.ogv";
import image from "./image/image_1.jpg";

const useStyles = makeStyles(theme => ({
  videoCont: {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "absolute",
    width: styles.sizes.globalDimensions.percentageFull,
    height: styles.sizes.globalDimensions.percentageFull,
    top: 0,
    left: 0,
    overflow: "hidden",
    zIndex: styles.depth.specificLayers.firstLevel
  },
  videoElement: {
    width: styles.sizes.globalDimensions.percentageFull,
    height: styles.sizes.globalDimensions.percentageFull,
    objectFit: "cover"
  },
  bg: {
    position: "absolute",
    background: styles.colors.black,
    opacity: "0.5",
    zIndex: styles.depth.specificLayers.secondLevel,
    width: styles.sizes.globalDimensions.percentageFull,
    height: styles.sizes.globalDimensions.percentageFull
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
        <source src={videoMp4} type='video/mp4' />
        <source src={videoWebm} type='video/webm' />
        <source src={videoOgg} type='video/ogg' />
      </video>
    </div>
  );
};

export default BackgroundVid;
