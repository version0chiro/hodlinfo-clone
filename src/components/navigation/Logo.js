import logo from "../../assets/logo.png"; // with import

const Logo = (props) => {
  return (
    <div className="Logo">
      <img className="flat-logo" src={logo} />
      <p className=" finStreet col-12 text-center-xs">
        Powered By{" "}
        <a
          style={{ color: "rgb(61,198,193)" }}
          class="footer-text-link"
          rel="nofollow"
          href="https://www.finstreet.in/"
        >
          Finstreet
        </a>
      </p>
    </div>
  );
};

export default Logo;
