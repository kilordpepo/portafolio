import React from "react";
import { styles } from "../../styles";
import {
  SectionTitle,
  SectionSubtitle,
  ListMaker,
  StyledButton,
  ServicesInfo
} from "./components";
import { makeStyles, Typography, Link } from "@material-ui/core";
import file from "../Home/components/BackgroundVid/image/image_1.jpg"; //Temporal file to test download functionality

const useStyles = makeStyles(theme => ({
  aboutSection: {
    boxSizing: "border-box",
    height: styles.sizes.globalDimensions.percentageFull,
    overflowY: "scroll",
    background: styles.colors.mediumGray,
    marginLeft: styles.sizes.sidebarDimensions.width,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0
    },
    [theme.breakpoints.only("xl")]: {
      marginLeft: styles.sizes.sidebarDimensions.maxWidth
    }
  },
  aboutContent: {
    width: styles.sizes.globalDimensions.percentageNineTenths,
    maxWidth: styles.sizes.globalDimensions.sections.mediumSize,
    margin: "0 auto",
    padding: `${styles.sizes.thickness.thick21} 0 ${styles.sizes.thickness.thick21} 0`,
    [theme.breakpoints.down("sm")]: {
      paddingTop: styles.sizes.largeThickness.thick3
    }
  },
  information: {
    display: "flex",
    color: styles.colors.silver,
    margin: `${styles.sizes.thickness.thick26} 0`,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column"
    }
  },
  paragraphCont: {
    padding: `0 ${styles.sizes.specialThick.spacingThick2}`
  },
  paragraph: {
    marginBottom: styles.sizes.thickness.thick8
  },
  list: {
    padding: `0 ${styles.sizes.specialThick.spacingThick2}`,
    minWidth: "280px",
    [theme.breakpoints.down("md")]: {
      marginTop: styles.sizes.thickness.thick16
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: "auto"
    }
  },
  downloadButton: {
    marginTop: styles.sizes.thickness.thick16
  }
}));

const AboutMe = () => {
  const classes = useStyles();
  return (
    <div className={classes.aboutSection}>
      <div className={classes.aboutContent}>
        <div>
          <SectionTitle
            title='About me.'
            iconImage='person'
            styling={{
              fontFamily: styles.fontFamilies.Merriweather,
              fontWeight: "bold"
            }}
          />
        </div>
        <div className={classes.information}>
          <div className={classes.paragraphCont}>
            <SectionSubtitle
              subtitleText='Full Stack Developer'
              borderColor='transparent'
              alignItems='flex-start'
              padding={0}
            />
            <Typography variant='body1' className={classes.paragraph}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit velit et
              aptent suspendisse, mus dui sodales laoreet ac integer purus nisl
              sem ante, hendrerit a lobortis risus donec tincidunt porttitor
              nascetur diam vestibulum.
            </Typography>
            <Typography variant='body1' className={classes.paragraph}>
              Fringilla vestibulum ridiculus ut vitae penatibus eget hac ligula
              praesent potenti, nostra et ullamcorper tristique cras blandit
              volutpat sapien in, magna mattis nisi curae enim sociis etiam
              vehicula diam. Fames nisi dapibus etiam sagittis per dignissim
              eleifend, nostra euismod integer nascetur non commodo sodales
              lobortis, primis conubia netus ligula nullam interdum.
            </Typography>
          </div>
          <div className={classes.list}>
            <SectionSubtitle
              subtitleText='Personal Information'
              borderColor='transparent'
              alignItems='flex-start'
              padding={0}
            />
            <ListMaker
              list={[
                { title: "Name", value: "Carlos Valero" },
                { title: "Age", value: "25 years" },
                { title: "Residence", value: "Zaragoza, Spain" },
                { title: "Address", value: "Under your bed" },
                { title: "Email", value: "kilordpepo@gmail.com" },
                { title: "Phone", value: "(+34) 617 284 542" },
                { title: "Freelance", chip: true, value: "Available" }
              ]}
            />
            <div className={classes.downloadButton}>
              <Link
                href={file}
                underline='none'
                download='Resume'
                target='_blank'
              >
                <StyledButton buttonText='Download Resume' />
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.services}>
          <SectionSubtitle subtitleText='SERVICES' />
          <ServicesInfo
            services={[
              {
                icon: "laptop",
                label: "Front-end Development",
                text:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit volutpat, non scelerisque ridiculus."
              },
              {
                icon: "engine",
                label: "Back-end Development",
                text:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit et, ad pharetra non."
              },
              {
                icon: "data",
                label: "Full Stack Development",
                text:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum, ligula vivamus quisque."
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
