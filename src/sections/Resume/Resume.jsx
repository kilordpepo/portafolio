import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { styles, standardClasses } from "../../styles";
import { SectionTitle, TimelineMaker, SkillMeter } from "./components";

const useStyles = makeStyles(theme => ({
  information: {
    margin: `${styles.sizes.thickness.thick26} 0 ${styles.sizes.thickness.thick16} 0`,
    [theme.breakpoints.down("md")]: {
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
  const standard = standardClasses();
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
      className={standard.sectionContainer}
      onScroll={event => handleScroll(event)}
    >
      <div className={standard.sectionContent}>
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
        <div className={`${standard.sectionInfo} ${classes.information}`}>
          <div className={classes.timeline}>
            <TimelineMaker
              subtitle={{ text: "EXPERIENCE" }}
              timeline={[
                {
                  date: {
                    from: "2020",
                    to: "Present"
                  },
                  title: "Developer",
                  reference: "Hiberus Tecnología, Zaragoza, ES",
                  text:
                    "Frontend developer working in javascript with React.JS on highly demanded projects with SCRUM methodology."
                },
                {
                  date: {
                    from: "aug. 2019",
                    to: "dec. 2019"
                  },
                  title: "Full Stack Developer",
                  reference: "LoreBI, C. A., Caracas, VE",
                  text:
                    "Full Stack Developer, maintaining a system capable of managing employee schedules developed with Angular.js on the frontend. I developed a job scheduler in the backend with node.js and also modified some services in other APIs made with Java Spring."
                },
                {
                  date: {
                    from: "jan. 2019",
                    to: " dec. 2019"
                  },
                  title: "Semi-Senior Full Stack Developer",
                  reference: "Teravision Technologies",
                  text:
                    "Full Stack web developer, working with Frameworks: Angular, React.JS (with Redux), NestJS, PostgreSQL database, Javascript and Typescript languages, SCRUM methodology, version management with GIT and use of technologies such as Scrumwise and Jira."
                },
                {
                  date: {
                    from: "july 2018",
                    to: "dec. 2018"
                  },
                  title: "Frontend Developer",
                  reference: "Retorna, CL",
                  text:
                    "Frontend web developer at half time using SCRUM to manage the project tasks while working with Angular 6 framework to develop a web site (typescript and node.js), integrating it with AWS services and versioning it with GIT."
                },
                {
                  date: {
                    from: "2017",
                    to: "2018"
                  },
                  title: "Senior Analyst",
                  reference: "Venezuelan Credit Bank, Caracas, VE",
                  text:
                    "Web developer for the bank's intranet systems, working with Oracle databases, Java and Javascript languages, Angular Framework, Jquery, JPA and spring libraries, IDES Netbeans, Eclipse and JDeveloper and technologies such as java Servlet."
                },
                {
                  date: {
                    from: "aug. 2015",
                    to: "sept. 2015"
                  },
                  title: "Sales consultant and technician",
                  reference: "AWOS, Caracas, VE",
                  text:
                    "Technician with phones and computers while advising two employees on how to approach the customer and sell technology devices."
                }
              ]}
            />
          </div>
          <div className={classes.timeline}>
            <TimelineMaker
              subtitle={{ text: "EDUCATION" }}
              timeline={[
                {
                  date: {
                    from: "2013",
                    to: "2018"
                  },
                  title: "Informatics Engineering",
                  reference: "Catholic University Andres Bello, Caracas, VE",
                  text:
                    "General Secretary of the Student Center, Academic Advisor and student with an average of 15."
                },
                {
                  date: {
                    from: "2001",
                    to: "2013"
                  },
                  title: "Bachelor of science",
                  reference: "San Ignacio School, Caracas, VE",
                  text:
                    "Student with an average of 15, participant in extracurricular activities such as basketball and swimming."
                }
              ]}
            />
          </div>
        </div>
        <div className={classes.skills}>
          <div className={classes.skillCards}>
            <SkillMeter
              subtitle={{ text: "CODING SKILLS" }}
              animationOver={finishAnimation}
              page={pageObject}
              scrolling={scrolling}
              skills={[
                { skill: "JavaScript", percentage: 90, key: "JS" },
                { skill: "SQL", percentage: 80, key: "Sq" },
                { skill: "Python", percentage: 60, key: "Py" },
                { skill: "Java", percentage: 50, key: "Jv" }
              ]}
            />
          </div>
          <div className={classes.skillCards}>
            <SkillMeter
              subtitle={{ text: "FRAMEWORKS SKILLS" }}
              animationOver={finishAnimation}
              page={pageObject}
              scrolling={scrolling}
              skills={[
                { skill: "React", percentage: 90, key: "Re" },
                { skill: "NestJS", percentage: 80, key: "NJ" },
                { skill: "Angular", percentage: 70, key: "An" },
                { skill: "Serverless", percentage: 60, key: "Sl" }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
