import React from "react";
import { styles } from "../../styles";
import { makeStyles } from "@material-ui/core";
import {
  SectionTitle,
  SectionSubtitle,
  ContactInfo,
  AssembledForm
} from "./components";

const useStyles = makeStyles(theme => ({
  contactSection: {
    boxSizing: "border-box",
    height: styles.sizes.globalDimensions.percentageFull,
    overflowY: "scroll",
    background: styles.colors.mediumGray,
    marginLeft: styles.sizes.sidebarDimensions.width,
    padding: `0 ${styles.sizes.thickness.thick21}`,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      padding: 0
    },
    [theme.breakpoints.only("xl")]: {
      marginLeft: styles.sizes.sidebarDimensions.maxWidth
    }
  },
  contactMessage: {
    width: styles.sizes.globalDimensions.percentageNineTenths,
    maxWidth: styles.sizes.contactMeDimensions.maxWidth,
    margin: "0 auto",
    padding: `${styles.sizes.thickness.thick26} 0 ${styles.sizes.contactMeDimensions.spacing1} 0`,
    [theme.breakpoints.down("sm")]: {
      paddingTop: styles.sizes.contactMeDimensions.spacing3
    }
  },
  title: {
    borderBottom: `${styles.sizes.thickness.thick1} dashed ${styles.colors.lightGray}`,
    paddingBottom: styles.sizes.specialThick.spacingThick1
  },
  contactForm: {
    marginTop: styles.sizes.contactMeDimensions.spacing3
  },
  centerCont: {
    textAlign: "center",
    margin: `0 ${styles.sizes.contactMeDimensions.spacing5}`,
    [theme.breakpoints.down("sm")]: {
      margin: 0
    },
    [theme.breakpoints.only("md")]: {
      margin: `0 ${styles.sizes.contactMeDimensions.spacing2}`
    }
  }
}));

const ContactMe = () => {
  const classes = useStyles();
  return (
    <div className={classes.contactSection}>
      <div className={classes.contactMessage}>
        <div className={classes.title}>
          <SectionTitle title='Contact me.' iconImage='mail' weight='bold' />
        </div>
        <div className={classes.contactForm}>
          <div className={classes.centerCont}>
            <SectionSubtitle subtitleText="LET'S TALK" />
            <AssembledForm />
          </div>
        </div>
        <ContactInfo
          contacts={[
            { icon: "sendMail", link: true, adress: "kilordpepo@gmail.com" },
            { icon: "location", adress: "Zaragoza, Spain" },
            { icon: "phone", adress: "(+34) 617 284 542" }
          ]}
        />
      </div>
    </div>
  );
};

export default ContactMe;
