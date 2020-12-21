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
import file from "./file/EnglishCV.pdf";

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
    minWidth: styles.sizes.largeThickness.thick24,
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
              Full-Stack developer with 4 years of experience developing web
              applications, and some mobile apps, interested in learning and
              obtaining experience in the process.
            </Typography>
            <Typography variant='body1' className={classes.paragraph}>
              Colleagues know me as a committed developer who can always be
              trusted to come up with a new approach. But I know that the
              client's business comes first, and I never try to impose my ideas
              on others. Instead, I spend a lot of time understanding the
              business and the audience before suggesting ideas. I can (and
              often do) work well alone, but I'm at my best collaborating with
              others.
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
                download='EnglishCV'
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
                key: "Frontend",
                icon: "laptop",
                label: "Front-end Development",
                text:
                  "I'm capable of developing web applications with different frameworks that fullfill your project requirements."
              },
              {
                key: "Backend",
                icon: "engine",
                label: "Back-end Development",
                text:
                  "REST services, micro services, serverless, PostgreSQL, MySQL, you name it and I bet I have worked on it. I'm capable of creating services that will work as wanted for you."
              },
              {
                key: "Fullstack",
                icon: "data",
                label: "Full Stack Development",
                text:
                  "If you need me to do the whole process then let's do it, from creating robust backend logic to responsive web pages to display it, I can do it."
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
