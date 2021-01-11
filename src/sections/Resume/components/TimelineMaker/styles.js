import { makeStyles } from "@material-ui/core";
import { styles } from "../../../../styles";

export const useStyles = makeStyles(theme => ({
  subtitle: {
    marginBottom: styles.sizes.thickness.thick21
  },
  timelineWrapper: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: styles.sizes.thickness.thick6
    }
  },
  timelineCard: {
    display: "flex",
    marginBottom: styles.sizes.thickness.thick16,
    [theme.breakpoints.down("sm")]: {
      marginBottom: styles.sizes.specialThick.spacingThick2
    }
  },
  dates: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxSizing: "border-box",
    width: styles.sizes.specialThick.spacingThick4,
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  dateYear: {
    color: styles.colors.white,
    fontSize: styles.sizes.thickness.thick8,
    position: "relative",
    right: styles.sizes.thickness.thick5
  },
  dateYearMobile: {
    color: styles.colors.white,
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "inline",
      position: "relative",
      left: styles.sizes.thickness.thick7
    }
  },
  dateYearFrom: {
    bottom: styles.sizes.specialThick.spacingThick2
  },
  dateYearTo: {
    top: styles.sizes.specialThick.spacingThick2
  },
  info: {
    padding: `${styles.sizes.thickness.thick3} 0`,
    [theme.breakpoints.down("sm")]: {
      padding: 0
    }
  },
  dateline: {
    borderLeft: `${styles.sizes.thickness.thick2} solid ${styles.colors.lightBlue}`
  },
  datelineCircle: {
    position: "relative",
    right: styles.sizes.specialThick.spacingThick1,
    width: styles.sizes.thickness.thick5,
    height: styles.sizes.thickness.thick5,
    border: `${styles.sizes.thickness.thick2} solid ${styles.colors.lightBlue}`,
    borderRadius: styles.sizes.globalDimensions.percentageHalf
  },
  cardContent: {
    padding: styles.sizes.thickness.thick11,
    marginLeft: styles.sizes.thickness.thick6
  },
  cardTitle: {
    color: styles.colors.white,
    fontFamily: styles.fontFamilies.Merriweather,
    fontSize: styles.sizes.thickness.thick10,
    fontWeight: "bold"
  },
  cardReference: {
    color: styles.colors.lightBlue,
    fontFamily: styles.fontFamilies.Roboto,
    fontWeight: "bold"
  },
  cardLocation: {
    color: styles.colors.white
  },
  cardText: {
    color: styles.colors.silver,
    textAlign: "justify"
  }
}));
