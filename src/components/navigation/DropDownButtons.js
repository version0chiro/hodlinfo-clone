import { DropdownButton, Dropdown, Button } from "react-bootstrap";

const DropDownButtons = (props) => {
  return (
    <div className="drop-down-buttons">
      <DropdownButton
        variant={!props.darkMode ? "primary" : "secondary"}
        id="dropdown-basic-button"
        title="INR"
      >
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        variant={!props.darkMode ? "primary" : "secondary"}
        id="dropdown-basic-button"
        title="BTC"
      >
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
      <a href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&utm_medium=affiliate&utm_campaign=regnow-btn">
        <Button
          variant={!props.darkMode ? "primary" : "secondary"}
          id="dropdown-basic-button"
        >
          {"BUY BTC"}
        </Button>
      </a>
    </div>
  );
};

export default DropDownButtons;
