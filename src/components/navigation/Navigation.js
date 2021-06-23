import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";
import DropDownButtons from "./DropDownButtons";

const navigation = (props) => {
  return (
    <div className="navigation">
      <Logo />
      <DropDownButtons darkMode={props.darkMode} />
      <DarkModeToggle
        setDarkMode={props.setDarkMode}
        darkMode={props.darkMode}
      />
    </div>
  );
};

export default navigation;
