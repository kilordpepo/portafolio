import React from "react";
import { styles } from "../../../../styles";
import { makeStyles } from "@material-ui/core";
import { useFormik } from "formik";
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
  const formik = useFormik({
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
      onSubmit={formik.handleSubmit}
      autoComplete='off'
    >
      <div className={classes.profileInput}>
        <InputTextField
          label='Name'
          id='name'
          name='name'
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
      </div>
      <div className={classes.profileInput}>
        <InputTextField
          label='Email'
          id='email'
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </div>
      <div className={classes.textareaInput}>
        <InputTextField
          label='How can we help you?'
          id='text'
          name='text'
          value={formik.values.text}
          onChange={formik.handleChange}
          error={formik.touched.text && Boolean(formik.errors.text)}
          helperText={formik.touched.text && formik.errors.text}
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
