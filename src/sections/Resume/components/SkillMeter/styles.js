import { makeStyles } from "@material-ui/core";
import { styles } from "../../../../styles";

export const useStyles = makeStyles(theme => ({
  subtitle: {
    marginBottom: styles.sizes.thickness.thick21
  },
  skillItem: {
    marginBottom: styles.sizes.thickness.thick6,
    padding: `0 ${styles.sizes.thickness.thick11}`,
    [theme.breakpoints.down("sm")]: {
      padding: 0
    }
  },
  skillLabel: {
    color: styles.colors.white,
    fontFamily: styles.fontFamilies.Merriweather,
    marginBottom: styles.sizes.thickness.thick5
  },
  progressBar: {
    width: styles.sizes.globalDimensions.percentageFull,
    backgroundColor: styles.colors.gray
  },
  actualProgress: {
    display: "flex",
    justifyContent: "flex-end",
    height: styles.sizes.thickness.thick6,
    backgroundColor: styles.colors.lightBlue,
    lineHeight: styles.sizes.thickness.thick6,
    transition: `all ${styles.transitionDuration.speed2000}ms ease-out`
  },
  percentage: {
    color: "white",
    fontSize: styles.sizes.specialThick.spacingThick2,
    fontWeight: "bold",
    position: "relative",
    bottom: styles.sizes.specialThick.spacingThick3,
    left: styles.sizes.specialThick.spacingThick3
  },
  progressPointer: {
    boxSizing: "border-box",
    border: `${styles.sizes.specialThick.spacingThick2} solid transparent`,
    borderBottom: `${styles.sizes.thickness.thick11} solid ${styles.colors.mediumBlue}`,
    position: "relative",
    bottom: styles.sizes.specialThick.spacingThick3,
    left: styles.sizes.thickness.thick5
  }
}));
