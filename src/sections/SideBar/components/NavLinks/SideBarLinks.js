import React from "react";
import { makeStyles, Link, List, ListItem, ListItemIcon, ListItemText, createMuiTheme, ThemeProvider } from "@material-ui/core";
import { styles } from "../../../../styles/styles";
import IconMaker from './IconMaker.js';

const useStyles = makeStyles((theme) => ({
  root: {
    width: styles.sizes.sidebarDimensions.width,
    minWidth: styles.sizes.sidebarDimensions.minWidth,
    maxWidth: styles.sizes.sidebarDimensions.maxWidth,
    backgroundColor: styles.colors.gray1,
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

const SelectedListItem = () => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const selectIconColor = (index) => {
    return (selectedIndex === index) ? classes.icon2 : classes.icon;
  };

  const arrValues = [["Home", "./home"], 
  ["About me", "./aboute-me"], 
  ["Resume", "./resume"], 
  ["Contact me", "./contact-me"]];
  
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
                  <IconMaker index={index} icon={selectIconColor(index)} />
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

export default SelectedListItem;
