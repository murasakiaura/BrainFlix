import "./Header.scss";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import searchicon from "../../assets/Icons/search.svg";
import uploadicon from "../../assets/Icons/upload.svg";
import profile from "../../assets/images/Mohan-muruge.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} />
      </div>

      <div class="header__searchcontainer">
        <div class="header__searchbar">
          <img class="header__searchbar--icon" src={searchicon} />
          <h4 class="header__searchbar--text">Search</h4>
        </div>
        <img class="header__profile" src={profile} />
      </div>

      <div class="header__uploadbar">
        <img src={uploadicon} />
        <h3 class="header__uploadbar--text">UPLOAD</h3>
      </div>
    </header>
  );
};

export default Header;
