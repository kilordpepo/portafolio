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

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <List
          className={classes.list}
          component="nav"
          aria-label="main mailbox folders"
        >
          <Link underline="none" color="inherit">
            <ListItem
              button
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <HomeOutlinedIcon className={selectIconColor(0)} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link underline="none" color="inherit">
            <ListItem
              button
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <PersonOutlineOutlinedIcon className={selectIconColor(1)} />
              </ListItemIcon>
              <ListItemText primary="About me" />
            </ListItem>
          </Link>
          <Link underline="none" color="inherit">
            <ListItem
              button
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon>
                <NotesOutlinedIcon className={selectIconColor(2)} />
              </ListItemIcon>
              <ListItemText primary="Resume" />
            </ListItem>
          </Link>
          <Link underline="none" color="inherit">
            <ListItem
              button
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemIcon>
                <MailOutlineOutlinedIcon className={selectIconColor(3)} />
              </ListItemIcon>
              <ListItemText primary="Contact me" />
            </ListItem>
          </Link>
        </List>
      </ThemeProvider>
    </div>
  );
};

export default SelectedListItem;
