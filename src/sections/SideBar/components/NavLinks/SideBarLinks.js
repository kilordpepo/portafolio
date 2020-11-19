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
    if (selectedIndex === index) {
      return classes.icon2;
    } else {
      return classes.icon;
    }
  };

  const selectIcon = (index) => {
    if (index === 0) {
      return <HomeOutlinedIcon className={selectIconColor(index)} />
    } else if (index === 1) {
      return <PersonOutlineOutlinedIcon className={selectIconColor(index)} />
    } else if (index === 2) {
      return <NotesOutlinedIcon className={selectIconColor(index)} />
    } else {
      return <MailOutlineOutlinedIcon className={selectIconColor(index)} />
    }
  };

  const selectLink = (index) => {
    if (index === 0) {
      return "./home"
    } else if (index === 1) {
      return "./aboute-me"
    } else if (index === 2) {
      return "./resume"
    } else {
      return "./contact-me"
    }
  };

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <List
          className={classes.list}
          component="nav"
          aria-label="main mailbox folders"
        >
        {['Home', 'About me', 'Resume', 'Contact me'].map((text, index) => (
          <Link href={selectLink(index)} underline="none" color="inherit">
            <ListItem 
            button 
            selected={selectedIndex === index} 
            onClick={(event) => handleListItemClick(event, index)}
            key={text}
            >
              <ListItemIcon>
                {selectIcon(index)}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
        </List>
      </ThemeProvider>
    </div>
  );
};

export default SelectedListItem;
