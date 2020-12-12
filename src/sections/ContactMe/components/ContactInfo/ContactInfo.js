import React from "react";
import PropTypes from "prop-types";
import { styles } from "../../../../styles";
import { makeStyles, Typography, Link } from "@material-ui/core";
import { IconMaker } from "../index";

const useStyles = makeStyles(theme => ({
  contactInfo: {
    marginTop: styles.sizes.contactMeDimensions.spacing4,
    textAlign: "center"
  },
  contactCard: {
    width: styles.sizes.globalDimensions.percentageThird,
    boxSizing: "border-box",
    display: "inline-block",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      width: styles.sizes.globalDimensions.percentageFull,
      marginBottom: styles.sizes.thickness.thick11
    }
  },
  icon: {
    color: styles.colors.lightBlue
  },
  contactText: {
    color: styles.colors.white,
    fontFamily: "sans-serif"
  },
  emailAdress: {
    color: "inherit"
  }
}));

const ContactInfo = ({ contacts }) => {
  const classes = useStyles();
  return (
    <div className={classes.contactInfo}>
      {contacts.map(info => (
        <div className={classes.contactCard}>
          <IconMaker icon={info.icon} sizeNum={40} iconColor={classes.icon} />
          <Typography variant='h6' className={classes.contactText}>
            {info.link && (
              <Link
                href={`mailto:${info.adress}`}
                className={classes.emailAdress}
                underline='none'
              >
                {info.adress}
              </Link>
            )}
            {!info.link && info.adress}
          </Typography>
        </div>
      ))}
    </div>
  );
};

ContactInfo.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      link: PropTypes.boolean,
      adress: PropTypes.string.isRequired
    })
  )
};

export default ContactInfo;
