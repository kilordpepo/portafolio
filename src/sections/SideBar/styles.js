import { makeStyles } from "@material-ui/core";
import { styles } from "../../styles";

export const useStyles = makeStyles(theme => ({
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
