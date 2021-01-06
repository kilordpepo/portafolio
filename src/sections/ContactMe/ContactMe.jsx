import React from "react";
import { makeStyles } from "@material-ui/core";
import { styles, standardClasses } from "../../styles";
import {
  SectionTitle,
  SectionSubtitle,
  ContactInfo,
  AssembledForm
} from "./components";

const useStyles = makeStyles(theme => ({
  contactSection: {
    padding: `0 ${styles.sizes.thickness.thick21}`
  },
  contactMessage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: styles.sizes.globalDimensions.percentageNineTenths,
    width: styles.sizes.globalDimensions.percentageNineTenths,
    maxWidth: styles.sizes.globalDimensions.sections.mediumSize,
    maxHeight: styles.sizes.globalDimensions.sections.mediumSize,
    margin: "0 auto",
    padding: `${styles.sizes.thickness.thick21} 0 ${styles.sizes.thickness.thick11} 0`,
    [theme.breakpoints.down("sm")]: {
      paddingTop: styles.sizes.largeThickness.thick3
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: styles.sizes.globalDimensions.sections.largeSize
    }
  },
  contactForm: {
    marginTop: styles.sizes.thickness.thick21,
    [theme.breakpoints.down("sm")]: {
      marginTop: styles.sizes.largeThickness.thick1
    }
  },
  centerCont: {
    textAlign: "center",
    margin: `0 ${styles.sizes.largeThickness.thick10}`,
    [theme.breakpoints.down("sm")]: {
      margin: 0
    },
    [theme.breakpoints.only("md")]: {
      margin: `0 ${styles.sizes.largeThickness.thick2}`
    }
  }
}));

const ContactMe = () => {
  const classes = useStyles();
  const standard = standardClasses();
  return (
    <div className={`${classes.contactSection} ${standard.sectionContainer}`}>
      <div className={`${classes.contactMessage}`}>
        <div>
          <SectionTitle
            title='Contact me.'
            iconImage='mail'
            weight='bold'
            styling={{
              fontFamily: styles.fontFamilies.Merriweather,
              fontWeight: "bold"
            }}
          />
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
