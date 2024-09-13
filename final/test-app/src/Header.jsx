import React, { useState } from "react";

const Header = ({ setCurrentPage }) => {
  const [activeLink, setActiveLink] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  function handlePageChange(e) {
    e.preventDefault();
    window.history.pushState(null, "", e.target.hash);
    setCurrentPage(e.target.hash);
    setActiveLink(e.target.hash);
    setShowDropdown(false);
  }
  function handleDropdownToggle() {
    setShowDropdown(!showDropdown);
  }

  return (
    <div className="nav-header">
      <header>Cute Cats</header>

      <div className="nav-content">
        <a
          href="#/"
          onClick={handlePageChange}
          className={activeLink === "#/" ? "active" : ""}
        >
          Home
        </a>
        <a
          href="#/cards"
          onClick={handlePageChange}
          className={activeLink === "#/cards" ? "active" : ""}
        >
          Cards
        </a>
        <a
          href="#/panels"
          onClick={handlePageChange}
          className={activeLink === "#/panels" ? "active" : ""}
        >
          Panels
        </a>
        <a
          href="#/library"
          onClick={handlePageChange}
          className={activeLink === "#/library" ? "active" : ""}
        >
          Library
        </a>
      </div>
      <div className="ham-icon" onClick={handleDropdownToggle}>
        ≡
      </div>
      {showDropdown && (
        <div className="dropdown-content">
          <a href="#/" onClick={handlePageChange} className="dropdown-item">
            Home
          </a>
          <a
            href="#/cards"
            onClick={handlePageChange}
            className="dropdown-item"
          >
            Cards
          </a>
          <a
            href="#/panels"
            onClick={handlePageChange}
            className="dropdown-item"
          >
            Panels
          </a>
          <a
            href="#/library"
            onClick={handlePageChange}
            className="dropdown-item"
          >
            Library
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
