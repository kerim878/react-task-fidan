import React from 'react';
import './App.css';

const Header = () => {
  return (
    <header>
      <div className="top-bar">
        <div className="container">
          <div className="info">
            <a className="call" href="tel:(414)857-0107">
              <img src="./icon/tel-icon.svg" alt="" />
              <span>(414)857-0107</span>
            </a>
            <a className="mail" href="mailto:yummy@bistrobliss">
              <img src="./icon/mail.svg" alt="" />
              <span>yummy@bistrobliss</span>
            </a>
          </div>
          <div className="social">
            <a  className="twt" href="#">
              <img src="./icon/twitter.svg" alt="" />
            </a>
            <a className="fb" href="">
              <img src="./icon/logo-fb-simple 2.svg" alt="" />
            </a>
            <a className="inst" href="">
              <img src="./icon/logo-instagram 1.svg" alt="" />
            </a>
            <a className="git" href="twitter.com">
              <img src="./icon/logo-github 1.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="navbar container">
        <a className="logo" href="/">
          <img src="./icon/logo-1.svg" alt="" />
          <span>Bistro Bliss</span>
        </a>
        <nav className="nav-menu">
          <ul>
            <li><a href="main.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="manu.html">Menu</a></li>
            <li><a href="pages.html">Pages</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
          <a id="bookTable" className="btn" href="">Book A Table</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;