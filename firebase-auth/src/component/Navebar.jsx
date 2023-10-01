import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <a href="/" className="navbar-brand">
          My Logo
        </a>

        {/* Navigation Links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/services" className="nav-link">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>

        {/* Additional Navbar Elements */}
        <div className="navbar-addons">
          {/* You can add additional elements like buttons, search, etc. here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
