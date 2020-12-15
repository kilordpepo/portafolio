import React from "react";
import { styles } from "../../styles";
import { makeStyles, withStyles, Button } from "@material-ui/core";

const CssButton = withStyles(theme => ({
  root: {
    color: styles.colors.lightBlue,
    transition: `color ${styles.transitionDuration.speed200}ms`,
    "&:hover": {
      color: styles.colors.black,
      backgroundColor: styles.colors.lightBlue,
      transition: `color ${styles.transitionDuration.speed200}ms`
    },
    "&.MuiButton-outlined": {
      border: `${styles.sizes.thickness.thick2} solid ${styles.colors.lightBlue}`,
      borderRadius: 0
    },
    "& .MuiButton-label": {
      fontWeight: "bold"
    }
  }
}))(Button);

const StyledButton = ({ buttonText, type }) => {
  return (
    <CssButton variant='outlined' type={type}>
      {buttonText}
    </CssButton>
  );
};

export default StyledButton;
