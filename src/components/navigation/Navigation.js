import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";
const navigation = (props) => {
  return (
    <div className="navigation">
      <Logo />
      <DarkModeToggle
        setDarkMode={props.setDarkMode}
        darkMode={props.darkMode}
      />
    </div>
  );
};

export default navigation;
