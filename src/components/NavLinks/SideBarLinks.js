import React from "react";
import PropTypes from 'prop-types';
import { makeStyles, Link, List, ListItem, ListItemIcon, ListItemText, createMuiTheme, ThemeProvider } from "@material-ui/core";
import { styles } from "../../styles/styles";
import IconMaker from '../../sections/SideBar/components/IconMaker/IconMaker';

const useStyles = makeStyles((theme) => ({
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

const SelectedListItem = ({ items }) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const selectIconColor = (index) => {
    return (selectedIndex === index) ? classes.icon2 : classes.icon;
  };

  const arrValues = items;
  
    return (
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
          <List
            className={classes.list}
            component="nav"
            aria-label="main mailbox folders"
          >
          {arrValues.map((text, index) => (
            <Link href={text[1]} underline="none" color="inherit">
              <ListItem 
              button 
              selected={selectedIndex === index} 
              onClick={(event) => handleListItemClick(event, index)}
              key={text[0]}
              >
                <ListItemIcon>
                  <IconMaker icon={text[2]} iconColor={selectIconColor(index)} />
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
  items: PropTypes.array.isRequired
};

export default SelectedListItem;
