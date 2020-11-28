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
import { styles } from "../../styles/styles";
import IconMaker from "../IconMaker/IconMaker";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    minWidth: styles.sizes.sidebarDimensions.minWidth,
    maxWidth: styles.sizes.sidebarDimensions.maxWidth,
    backgroundColor: styles.colors.darkGray,
    color: "gray",
    textTransform: "uppercase"
  },
  icon: {
    color: "gray"
  },
  icon2: {
    color: "white"
  },
  list: {
    "& .Mui-selected": {
      color: "white"
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

const SelectedListItem = ({ items, iconImage }) => {
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
            <Link href={text[1]} underline='none' color='inherit'>
              <ListItem
                button
                selected={selectedIndex === index}
                onClick={event => handleListItemClick(event, index)}
                key={text[0]}
              >
                <ListItemIcon>
                  <IconMaker
                    icon={iconImage[index]}
                    iconColor={selectIconColor(index)}
                  />
                </ListItemIcon>
                <ListItemText primary={text[0]} />
              </ListItem>
            </Link>
          ))}
        </List>
      </ThemeProvider>
    </div>
  );
};

SelectedListItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.array),
  iconImage: PropTypes.arrayOf(PropTypes.string)
};

export default SelectedListItem;
