import React, { useState } from "react";
import { styles } from "../../styles";
import {
  SectionTitle,
  SectionSubtitle,
  TimelineMaker,
  SkillMeter
} from "./components";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  resumeSection: {
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
  resumeContent: {
    width: styles.sizes.globalDimensions.percentageNineTenths,
    maxWidth: styles.sizes.globalDimensions.sections.mediumSize,
    margin: "0 auto",
    padding: `${styles.sizes.thickness.thick21} 0 ${styles.sizes.thickness.thick21} 0`,
    [theme.breakpoints.down("sm")]: {
      paddingTop: styles.sizes.largeThickness.thick3,
      paddingBottom: 0
    }
  },
  information: {
    display: "flex",
    color: styles.colors.silver,
    margin: `${styles.sizes.thickness.thick26} 0 30px 0`,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      marginBottom: 0
    }
  },
  timeline: {
    width: styles.sizes.globalDimensions.percentageHalf,
    padding: `0 ${styles.sizes.specialThick.spacingThick2}`,
    [theme.breakpoints.down("md")]: {
      width: styles.sizes.globalDimensions.percentageFull,
      padding: "0"
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: styles.sizes.thickness.thick11
    }
  },
  subtitle: {
    marginBottom: styles.sizes.thickness.thick21
  },
  skills: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column"
    }
  },
  skillCards: {
    width: styles.sizes.globalDimensions.percentageHalf,
    padding: `0 ${styles.sizes.specialThick.spacingThick2}`,
    [theme.breakpoints.down("md")]: {
      width: styles.sizes.globalDimensions.percentageFull,
      padding: "0"
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: styles.sizes.thickness.thick21
    }
  }
}));

const Resume = () => {
  const classes = useStyles();
  const [scrolling, setScrolling] = useState(false);
  const [pageObject, setPageObject] = useState({});
  const [animationEnd, setAnimationEnd] = useState(false);

  const finishAnimation = () => {
    setAnimationEnd(true);
  };

  const handleScroll = event => {
    if (!animationEnd) {
      const page = event.target;
      setPageObject(page);
      setScrolling(prev => !prev);
    }
  };

  return (
    <div
      className={classes.resumeSection}
      id='resumeSection'
      onScroll={event => handleScroll(event)}
    >
      <div className={classes.resumeContent}>
        <div>
          <SectionTitle
            title='My Resume.'
            iconImage='text'
            styling={{
              fontFamily: styles.fontFamilies.Merriweather,
              fontWeight: "bold"
            }}
          />
        </div>
        <div className={classes.information}>
          <div className={classes.timeline}>
            <div className={classes.subtitle}>
              <SectionSubtitle subtitleText='EXPERIENCE' />
            </div>
            <TimelineMaker
              timeline={[
                {
                  date: {
                    from: "2019",
                    to: "2020"
                  },
                  title: "Porta cum conubia",
                  reference: "Nullam fringilla sapien ac, Helsinki, FI",
                  text:
                    "Lorem ipsum dolor sit amet consectetur adipiscing elit arcu imperdiet dignissim, felis ultrices nunc suspendisse ac risus hac turpis elementum."
                },
                {
                  date: {
                    from: "2018",
                    to: "2019"
                  },
                  title: "Curae primis vehicula",
                  reference: "Elementum quisque himenaeos, Paris, FR",
                  text:
                    "Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra elementum ultrices condimentum turpis rutrum, malesuada rhoncus montes luctus pretium feugiat."
                },
                {
                  date: {
                    from: "2017",
                    to: "2018"
                  },
                  title: "Vitae pulvinar aenean",
                  reference: "Phasellus semper potenti, Zaragoza, ES",
                  text:
                    "Lorem ipsum dolor sit amet consectetur adipiscing elit, lectus sem eu sodales lacus sed, at velit integer netus aliquam libero."
                }
              ]}
            />
          </div>
          <div className={classes.timeline}>
            <div className={classes.subtitle}>
              <SectionSubtitle subtitleText='EDUCATION' />
            </div>
            <TimelineMaker
              timeline={[
                {
                  date: {
                    from: "2016",
                    to: "2017"
                  },
                  title: "Torquent ut",
                  reference: "Pretium primis molestie, NY, USA",
                  text:
                    "Lorem ipsum dolor sit amet consectetur adipiscing elit, nunc quis ad vehicula tristique senectus, venenatis vulputate hendrerit sagittis diam duis."
                },
                {
                  date: {
                    from: "2014",
                    to: "2016"
                  },
                  title: "Nostra nibh viverra",
                  reference: "Diam nascetur, Berlin, DE",
                  text:
                    "Lorem ipsum dolor sit amet consectetur adipiscing elit curae taciti congue, eleifend faucibus duis accumsan in nulla metus posuere penatibus."
                },
                {
                  date: {
                    from: "2013",
                    to: "2014"
                  },
                  title: "Mauris quam",
                  reference: "Orci suspendisse, Warwick, UK",
                  text:
                    "Lorem ipsum dolor sit amet consectetur adipiscing elit, tristique posuere dictumst hac laoreet suspendisse, pretium curae mi morbi vel cras."
                }
              ]}
            />
          </div>
        </div>
        <div className={classes.skills}>
          <div className={classes.skillCards}>
            <div className={classes.subtitle} id='myBar'>
              <SectionSubtitle subtitleText='PROGRAMMING SKILLS' />
            </div>
            <SkillMeter
              animationOver={finishAnimation}
              page={pageObject}
              scrolling={scrolling}
              skills={[
                { skill: "JavaScript", percentage: 95, key: "JS" },
                { skill: "Python", percentage: 84, key: "Py" },
                { skill: "Java", percentage: 92, key: "Jv" }
              ]}
            />
          </div>
          <div className={classes.skillCards}>
            <div className={classes.subtitle}>
              <SectionSubtitle subtitleText='CODING & DESIGN SKILLS' />
            </div>
            <SkillMeter
              animationOver={finishAnimation}
              page={pageObject}
              scrolling={scrolling}
              skills={[
                { skill: "CSS3", percentage: 88, key: "Css" },
                { skill: "HTML5", percentage: 97, key: "Ht" },
                { skill: "PhotoShop", percentage: 87, key: "Ps" }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
