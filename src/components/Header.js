import React from "react";

const NAV = [
  "About",
  "Services",
  "Pricing",
  "Blog",
]

function Header() {
  return (
    <header>
      <div className="header">
        <div className="header__logo">
          <div className="header__logo-img"></div>
          <div className="header__logo-title">Agency</div>
        </div>
        <nav className="menu">
          <ul className="menu__list">
            {NAV.map(navItem => (
              <li className="menu__list-item">
                <a className="menu__list-link" href="#">
                  {navItem}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__contact">
          <button className="header__contact-btn">contact</button>
        </div>
      </div>
      <div className="description">
        <h1 className="description__title">Portfolio</h1>
        <h6 className="descriprion__agency">
          Agency provides a full service range including teckhnical skills,
          design, business understanding.
        </h6>
      </div>
    </header>
  );
}

export default Header;
