import React, { useState } from "react";

const Header = () => {
  const [activeMobileMenu, setActiveMobileMenu] = useState("");
  const [timesIcon, setTimesIcon] = useState("");
  const [themeIcon, setThemeIcon] = useState("fa-moon");

  const handleMobileMenu = () => {
    if (activeMobileMenu === "") {
      setActiveMobileMenu("mobile-menu");
    } else {
      setActiveMobileMenu("");
    }
    if (timesIcon === "") {
      setTimesIcon("fa-times");
    } else {
      setTimesIcon("");
    }
  };

  const handleDarkMode = () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      setThemeIcon("fa-sun");
      localStorage.setItem("theme", "dark");
    } else {
      setThemeIcon("fa-moon");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header>
      <div className="header" id="header">
        <div className="logo">
          {/* <img src="./assets/img/Logo.png" alt="Logo"> */}
          <h1>LOGO</h1>
        </div>
        <div className="navbar">
          <div className="navbar-logo">
            {/* <img src="./assets/img/Logo1.png" alt="Logo"> */}
            <h1>LOGO</h1>
          </div>
          <div className="current-price">
            <p>Good Morning Dude!</p>
          </div>
          <div className="cta-button">
            <div>
              <a className="primary-button" href="#">
                Support <i className="fa-solid fa-question" />
              </a>
            </div>
            <div className="dark-mode" onClick={handleDarkMode}>
              <a className="secondary-button" href="#">
                <i className={`fa-solid ${themeIcon}`} />
              </a>
            </div>
            <div
              className="humberger-menu"
              id="humberger-menu"
              onClick={handleMobileMenu}
            >
              <a className="secondary-button" href="#">
                <i className={`fa-solid fa-bars ${timesIcon}`} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
