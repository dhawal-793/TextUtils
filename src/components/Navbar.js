import logo from "../logo.svg";
import dark from "../dark.svg";
import light from "../light.svg";
// import dark from "../moon-dark.svg";
// import light from "../moon-light.svg";
import React from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <a class="navbar-brand" href="/">
        <img
          src={logo}
          alt=""
          width="40"
          height="34"
          class="d-inline-block align-text-top"
        />
        {props.title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Contact Us
            </a>
          </li>

        </ul>
        <button className="btn my-2 my-sm-0" type="button"  onClick={props.toggleMode}>

          <img
            src={props.mode==='light'?light:dark}
            alt=""
            width="40"
            height="34"
            class="d-inline-block align-text-top"
            onClick={props.toggleMode}
          />
          {/* {props.mode === 'light' ? "Enable Dark Mode" : "Enable Light Mode"} */}
        </button>

        {/* <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form> */}
      </div>
    </nav>
  );
}
Navbar.prototype = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Title",
};
