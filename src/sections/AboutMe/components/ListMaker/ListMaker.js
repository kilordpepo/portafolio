import React from "react";
import PropTypes from "prop-types";
import { styles } from "../../../../styles";
import { makeStyles, Chip } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  listWrapper: {
    listStyle: "none",
    padding: 0,
    margin: 0
  },
  listItem: {
    marginBottom: styles.sizes.thickness.thick8
  },
  listTitle: {
    color: styles.colors.white,
    fontWeight: "bold",
    fontFamily: styles.fontFamilies.Merriweather,
    borderBottom: `${styles.sizes.thickness.thick2} solid ${styles.colors.lightBlue}`
  },
  listColon: {
    color: styles.colors.white,
    fontWeight: "bold"
  },
  chipLabel: {
    color: styles.colors.white,
    fontWeight: "bold"
  },
  chip1: {
    background: styles.colors.green
  },
  chip2: {
    background: styles.colors.red
  }
}));

const ListMaker = ({ list }) => {
  const classes = useStyles();
  const selectColor = text =>
    text === "Unavailable" ? classes.chip2 : classes.chip1;

  return (
    <ul className={classes.listWrapper}>
      {list.map(text => (
        <li className={classes.listItem} key={`${text.title}-item`}>
          <span className={classes.listTitle}>{text.title}</span>
          <span className={classes.listColon}> : </span>
          {!text.chip && <span>{text.value}</span>}
          {text.chip && (
            <Chip
              label={text.value}
              size='small'
              className={`${classes.chipLabel} ${selectColor(text.value)}`}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

ListMaker.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      chip: PropTypes.bool
    })
  )
};

export default ListMaker;
