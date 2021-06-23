import "../../index.css";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    color: "#3DC6C1",
    "&$checked": {
      transform: "translateX(16px)",
      color: "#3DC6C1",
      "& + $track": {
        backgroundColor: "#2E3241",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#3DC6C1",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const DarkModeToggle = (props) => {
  return (
    <div className="App">
      <h1>Hello, World</h1>
      <h2>
        Let's create a dark mode toggle that persists when the page is reloaded.
      </h2>
      <IOSSwitch
        checked={props.darkMode}
        onChange={() => {
          props.setDarkMode(props.darkMode ? false : true);
        }}
        color="primary"
        name="checkedB"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </div>
  );
};

export default DarkModeToggle;
