import React from "react";
import { makeStyles, Link, List, ListItem, ListItemIcon, ListItemText, createMuiTheme, ThemeProvider } from "@material-ui/core";
import { HomeOutlinedIcon, PersonOutlineOutlinedIcon, MailOutlineOutlinedIcon, NotesOutlinedIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 200,
    backgroundColor: "rgb(61, 61, 61)",
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

  const arrValues = [["Home", <HomeOutlinedIcon className={selectIconColor(0)} />, "./home"], 
  ["About me", <PersonOutlineOutlinedIcon className={selectIconColor(1)} />, "./aboute-me"], 
  ["Resume", <NotesOutlinedIcon className={selectIconColor(2)} />, "./resume"], 
  ["Contact me", <MailOutlineOutlinedIcon className={selectIconColor(3)} />, "./contact-me"]];
  
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <List
          className={classes.list}
          component="nav"
          aria-label="main mailbox folders"
        >
        {arrValues.map((text, index) => (
          <Link href={text[2]} underline="none" color="inherit">
            <ListItem 
            button 
            selected={selectedIndex === index} 
            onClick={(event) => handleListItemClick(event, index)}
            key={text[0]}
            >
              <ListItemIcon>
                {text[1]}
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
