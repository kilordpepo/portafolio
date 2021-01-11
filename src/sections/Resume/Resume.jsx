import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { styles, standardClasses } from "../../styles";
import { SectionTitle, TimelineMaker, SkillMeter } from "./components";

const useStyles = makeStyles(theme => ({
  resumeContent: {
    [theme.breakpoints.down("md")]: {
      paddingBottom: 0
    }
  },
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
      marginBottom: styles.sizes.thickness.thick21,
      padding: "0"
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
      <div className={`${standard.sectionContent} ${classes.resumeContent}`}>
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
                    from: { year: "2020", month: "" },
                    to: { year: "Today", month: "" }
                  },
                  title: "Developer",
                  reference: "Hiberus Tecnología, ",
                  location: "Spain",
                  text:
                    "Frontend developer working in javascript with React.JS on highly demanded projects with SCRUM methodology."
                },
                {
                  date: {
                    from: { year: "2019", month: "(aug.)" },
                    to: { year: "2019", month: "(dec.)" }
                  },
                  title: "Full Stack Developer",
                  reference: "LoreBI, C. A., ",
                  location: "Venezuela",
                  text:
                    "Full Stack Developer, maintaining a system capable of managing employee schedules developed with Angular.js on the frontend. I developed a job scheduler in the backend with node.js and also modified some services in other APIs made with Java Spring."
                },
                {
                  date: {
                    from: { year: "2019", month: "(jan.)" },
                    to: { year: "2019", month: "(dec.)" }
                  },
                  title: "Semi-Senior Full Stack Developer",
                  reference: "Teravision Technologies, ",
                  location: "Venezuela",
                  text:
                    "Full Stack web developer, working with Frameworks: Angular, React.JS (with Redux), NestJS, PostgreSQL database, Javascript and Typescript languages, SCRUM methodology, version management with GIT and use of technologies such as Scrumwise and Jira."
                },
                {
                  date: {
                    from: { year: "2018", month: "(july.)" },
                    to: { year: "2018", month: "(dec.)" }
                  },
                  title: "Frontend Developer",
                  reference: "Retorna, ",
                  location: "Venezuela",
                  text:
                    "Frontend web developer at half time using SCRUM to manage the project tasks while working with Angular 6 framework to develop a web site (typescript and node.js), integrating it with AWS services and versioning it with GIT."
                },
                {
                  date: {
                    from: { year: "2017", month: "" },
                    to: { year: "2018", month: "" }
                  },
                  title: "Senior Analyst",
                  reference: "Venezuelan Credit Bank, ",
                  location: "Venezuela",
                  text:
                    "Web developer for the bank's intranet systems, working with Oracle databases, Java and Javascript languages, Angular Framework, Jquery, JPA and spring libraries, IDES Netbeans, Eclipse and JDeveloper and technologies such as java Servlet."
                },
                {
                  date: {
                    from: { year: "2015", month: "(aug.)" },
                    to: { year: "2015", month: "(sept.)" }
                  },
                  title: "Sales consultant and technician",
                  reference: "AWOS, ",
                  location: "Venezuela",
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
                    from: { year: "2013", month: "" },
                    to: { year: "2018", month: "" }
                  },
                  title: "Informatics Engineering",
                  reference: "Catholic University Andres Bello, ",
                  location: "Venezuela",
                  text:
                    "General Secretary of the Student Center, Academic Advisor and student with an average of 15."
                },
                {
                  date: {
                    from: { year: "2001", month: "" },
                    to: { year: "2013", month: "" }
                  },
                  title: "Bachelor of science",
                  reference: "San Ignacio School, ",
                  location: "Venezuela",
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
