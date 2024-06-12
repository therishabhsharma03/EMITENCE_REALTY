import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { message } from 'antd';
import { useHistory } from 'react-router-dom';
import { AccountContext } from '../../components/accountBox/accountContext';
// import React, { useContext , useState} from "react";
import LanguageSelector from '../language-selector';
import { useTranslation } from 'react-i18next';
import '../../views/home.css';
import "../../i18n";

const isUserLoggedIn = !!localStorage.getItem("user");

const Nav = (props) => {
  const { t } = useTranslation();
  // const { switchToSignup } = useContext(AccountContext);
  const history = useHistory();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleClick = () => {
    history.push('/log');
  };
  
  const handle_r = () => {
    history.push('/log#');
  };

  const logoutHandler = () => {
    localStorage.removeItem("user");
    // navigate("/login");
    history.push('/'); // Reload the page after logout
    message.success("Logout successful");
    window.location.reload();
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <header data-thq="thq-navbar" className="navbarContainer home-navb ar-interactive">
          <img src="images/logo.png" alt="Logo" className="logo" />
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <Link className="bodySmall buttonFilled" spy={true} smooth={true} offset={-70} duration={500} to="/">
                {t("home")}
              </Link>
              <Link className="home-nav42 bodySmall buttonFilled" spy={true} smooth={true} offset={-70} duration={500} to="/aboutus">
                {t("about")}
              </Link>
              <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <span className="dropdown-toggle home-nav42 bodySmall buttonFilled">
                  Projects
                </span>
                {dropdownVisible && (
                  <div className="dropdown-menu">
                    <Link to="/dholera" className="dropdown-item bodySmall">Dholera</Link>
                    <Link to="/mumbai" className="dropdown-item bodySmall">Mumbai</Link>
                  </div>
                )}
              </div>
              <Link className="home-nav42 bodySmall buttonFilled" spy={true} smooth={true} offset={-70} duration={500} to="/guide">
                Blogs
              </Link>
              <Link className="home-nav42 bodySmall buttonFilled" spy={true} smooth={true} offset={-70} duration={500} to="/contactus">
                Contact Us
              </Link>

              {isUserLoggedIn && (
                <Link className="home-nav42 bodySmall" spy={true} smooth={true} offset={-70} duration={500} to="/predictor">
                  {t("pridiction")}
                </Link>
              )}

              
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon socialIcons">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu1 mobileMenu">
            <div className="home-nav">
              <div className="home-top">
                <span className="logo">Emitence</span>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon02 socialIcons">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
              <Link className="bodySmall home-nav42 buttonFilled" spy={true} smooth={true} offset={-70} duration={500} to="/">
                {t("home")}
              </Link>
              <Link className="bodySmall home-nav42 buttonFilled" spy={true} smooth={true} offset={-70} duration={500} to="/aboutus">
                {t("about")}
              </Link>
              <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} offset={-70}>
                <span className="dropdown-toggle home-nav42 bodySmall buttonFilled">
                  Projects
                </span>
                {dropdownVisible && (
                  <div className="dropdown-menu">
                    <Link to="/dholera" className="home-nav42 bodySmall buttonFilled">Dholera</Link>
                    <Link to="/mumbai" className="home-nav42 bodySmall buttonFilled">Mumbai</Link>
                  </div>
                )}
              </div>
              <Link className="home-nav42 bodySmall buttonFilled" spy={true} smooth={true} offset={-70} duration={500} to="/guide">
                Blogs
              </Link>
              <Link className="home-nav42 bodySmall buttonFilled" spy={true} smooth={true} offset={-70} duration={500} to="/crops">
                Contact Us
              </Link>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Nav;
 