import "./Header.scss";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import searchicon from "../../assets/Icons/search.svg";
import uploadicon from "../../assets/Icons/upload.svg";
import profile from "../../assets/images/Mohan-muruge.jpg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>

      <div class="header__searchContainer">
        <div class="header__searchBar">
          <img class="header__searchBar--icon" src={searchicon} />
          <h4 class="header__searchBar--text">Search</h4>
        </div>

        <img class="header__profile phone" src={profile} />
      </div>
      <div class="header__profileAndUploadBar">
        <img class="header__profile tablet" src={profile} />

        <div class="header__uploadBar">
          <img src={uploadicon} />
          <h3 class="header__uploadBar--text">
            <NavLink to="/uploadpage">UPLOAD</NavLink>
          </h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
