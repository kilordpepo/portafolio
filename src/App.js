import { SideBar, Home, ContactMe } from "./sections";
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./styles";

const useStyles = makeStyles(theme => ({
  App: {
    position: "absolute",
    width: styles.sizes.globalDimensions.percentageFull,
    height: styles.sizes.globalDimensions.percentageFull,
    zIndex: styles.depth.globalLayers.groundLevel
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <SideBar />
      <ContactMe />
    </div>
  );
};

export default App;
