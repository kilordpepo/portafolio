import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core";
import { styles } from "../../styles";
import IconMaker from "../IconMaker/IconMaker";

const useStyles = makeStyles(theme => ({
  root: {
    width: styles.sizes.globalDimensions.percentageFull,
    backgroundColor: styles.colors.darkGray,
    color: styles.colors.lightGray,
    textTransform: "uppercase",
    fontFamily: styles.fontFamilies.RobotoCond
  },
  icon: {
    color: styles.colors.lightGray
  },
  icon2: {
    color: styles.colors.white
  },
  list: {
    "& .Mui-selected": {
      color: styles.colors.white
    }
  }
}));

const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  }
});

const SelectedListItem = ({ items, iconImage, hide }) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => setSelectedIndex(index);

  const selectIconColor = index =>
    selectedIndex === index ? classes.icon2 : classes.icon;

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <List
          className={classes.list}
          component='nav'
          aria-label='main mailbox folders'
        >
          {items.map((text, index) => (
            <Link
              href={text.path}
              underline='none'
              color='inherit'
              onClick={hide}
            >
              <ListItem
                button
                selected={selectedIndex === index}
                onClick={event => handleListItemClick(event, index)}
                key={text.section}
              >
                <ListItemIcon>
                  <IconMaker
                    icon={iconImage[index]}
                    iconColor={selectIconColor(index)}
                  />
                </ListItemIcon>
                <ListItemText disableTypography='true' primary={text.section} />
              </ListItem>
            </Link>
          ))}
        </List>
      </ThemeProvider>
    </div>
  );
};

SelectedListItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      section: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    })
  ),
  iconImage: PropTypes.arrayOf(PropTypes.string),
  hide: PropTypes.func.isRequired
};

export default SelectedListItem;
