import React from "react";
import { useFormik } from "formik";
import { makeStyles } from "@material-ui/core";
import { styles } from "../../../../styles";
import { InputTextField, StyledButton } from "../index";

const useStyles = makeStyles(theme => ({
  inputCont: {
    marginTop: styles.sizes.thickness.thick15,
    textAlign: "center"
  },
  profileInput: {
    boxSizing: "border-box",
    display: "inline-block",
    padding: `0 ${styles.sizes.specialThick.spacingThick2}`,
    width: styles.sizes.globalDimensions.percentageHalf,
    [theme.breakpoints.down("xs")]: {
      display: "block",
      paddingBottom: styles.sizes.thickness.thick6,
      width: styles.sizes.globalDimensions.percentageFull
    }
  },
  textareaInput: {
    marginTop: styles.sizes.thickness.thick14,
    padding: `0 ${styles.sizes.specialThick.spacingThick2}`
  },
  buttonCont: {
    marginTop: styles.sizes.thickness.thick14,
    textAlign: "center"
  }
}));

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = "Name is required";
  } else if (/[^A-Za-zÀ-ȕ\s']/i.test(values.name)) {
    errors.name = "Do not use numbers or special characters";
  } else if (!/[A-Za-zÀ-ȕ]{2}/i.test(values.name)) {
    errors.name = "Write a name with at least 2 characters";
  } else if (/.{25}/i.test(values.name)) {
    errors.name = "Write a name with less than 25 characters";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.text) {
    errors.text = "You must write a message";
  } else if (/.{400}/i.test(values.text)) {
    errors.text = "Do not write more than 400 characters";
  }

  return errors;
};

const AssembledForm = () => {
  const classes = useStyles();
  const {
    values: { name: nameValue, email: emailValue, text: textValue },
    touched: { name: touchedName, email: touchedEmail, text: touchedText },
    errors: { name: errorsName, email: errorsEmail, text: errorsText },
    handleSubmit,
    handleChange
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      text: ""
    },
    validate: validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <form
      className={classes.inputCont}
      onSubmit={handleSubmit}
      autoComplete='off'
    >
      <div className={classes.profileInput}>
        <InputTextField
          label='Name'
          id='name'
          name='name'
          value={nameValue}
          onChange={handleChange}
          error={touchedName && Boolean(errorsName)}
          helperText={touchedName && errorsName}
        />
      </div>
      <div className={classes.profileInput}>
        <InputTextField
          label='Email'
          id='email'
          name='email'
          value={emailValue}
          onChange={handleChange}
          error={touchedEmail && Boolean(errorsEmail)}
          helperText={touchedEmail && errorsEmail}
        />
      </div>
      <div className={classes.textareaInput}>
        <InputTextField
          label='How can we help you?'
          id='text'
          name='text'
          value={textValue}
          onChange={handleChange}
          error={touchedText && Boolean(errorsText)}
          helperText={touchedText && errorsText}
          size={6}
          textarea
        />
      </div>
      <div className={classes.buttonCont}>
        <StyledButton buttonText='Send message' type='submit' />
      </div>
    </form>
  );
};

export default AssembledForm;
