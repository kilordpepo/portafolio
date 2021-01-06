import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles, TextField } from "@material-ui/core";
import { styles } from "../../styles";

const useStyles = makeStyles(theme => ({
  inputCont: {
    margin: 0
  },
  helperTextCont: {
    color: styles.colors.red,
    margin: `${styles.sizes.thickness.thick3} ${styles.sizes.thickness.thick8} 0 ${styles.sizes.thickness.thick8}`,
    fontSize: styles.sizes.fontSizes.helperText,
    textAlign: "left",
    fontFamily: styles.fontFamilies.Roboto
  }
}));

const StyledTextField = withStyles({
  root: {
    "& label": {
      color: styles.colors.lightGray,
      fontWeight: "bold"
    },
    "& label.Mui-focused": {
      color: styles.colors.white,
      "&.Mui-error": {
        color: styles.colors.red
      }
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: `${styles.sizes.thickness.thick2} solid ${styles.colors.lightGray}`,
        transition: `border ${styles.transitionDuration.speed200}ms`,
        borderRadius: 0
      },
      "&:hover fieldset": {
        borderColor: styles.colors.lightGray
      },
      "&.Mui-focused fieldset": {
        borderColor: styles.colors.white
      },
      "&.Mui-error": {
        "&:hover fieldset": {
          borderColor: styles.colors.red
        },
        "&.Mui-focused fieldset": {
          borderColor: styles.colors.red
        }
      }
    },
    "& .MuiOutlinedInput-input": {
      color: styles.colors.white
    }
  }
})(TextField);

const InputTextField = ({
  label,
  size,
  textarea,
  id,
  name,
  value,
  onChange,
  error,
  helperText
}) => {
  const classes = useStyles();

  const empty = (
    <span className={classes.helperTextCont} style={{ visibility: "hidden" }}>
      spacing
    </span>
  );

  return (
    <div className={classes.inputCont}>
      <StyledTextField
        label={label}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        error={error}
        variant='outlined'
        size='small'
        fullWidth
        multiline={textarea}
        rows={size}
      />
      <p className={classes.helperTextCont}>{helperText || empty}</p>
    </div>
  );
};

InputTextField.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.number,
  textarea: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string
};

export default InputTextField;
