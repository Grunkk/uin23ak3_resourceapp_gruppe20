import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [htmlDropdown, setHtmlDropdown] = useState(false);
  const [cssDropdown, setCssDropdown] = useState(false);
  const [jsDropdown, setJsDropdown] = useState(false);
  const [reactDropdown, setReactDropdown] = useState(false);
  const [cmsDropdown, setCmsDropdown] = useState(false);

  const handleHtmlDropdown = () => {
    setHtmlDropdown(!htmlDropdown);
  };

  const handleCssDropdown = () => {
    setCssDropdown(!cssDropdown);
  };

  const handleJsDropdown = () => {
    setJsDropdown(!jsDropdown);
  };

  const handleReactDropdown = () => {
    setReactDropdown(!reactDropdown);
  };

  const handleCmsDropdown = () => {
    setCmsDropdown(!cmsDropdown);
  };

  const listStyle = {
    listStyleType: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 100,
    padding: 0
  };

  const linkStyle = {
    color: "#000",
    textDecoration: "none",
    margin: "0 10px"
  };

  const dropdownStyle = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    zIndex: 1,
    backgroundColor: "#fff",
    borderRadius: "0 0 5px 5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
    minWidth: "100px"
  };

  const dropdownLinkStyle = {
    color: "#000",
    textDecoration: "none",
    padding: "10px"
  };

  return (
    <nav>
      <ul style={listStyle}>
        <li>
          <Link to="/html" style={linkStyle} onClick={handleHtmlDropdown}>
            HTML
          </Link>
          {htmlDropdown && (
            <div style={dropdownStyle}>
              <Link to="/html/W3Schools" style={dropdownLinkStyle}>
                Introduction
              </Link>
              <Link to="/html/basics" style={dropdownLinkStyle}>
                Basics
              </Link>
              <Link to="/html/tables" style={dropdownLinkStyle}>
                Tables
              </Link>
            </div>
          )}
        </li>
        <li>
          <Link to="/css" style={linkStyle} onClick={handleCssDropdown}>
            CSS
          </Link>
          {cssDropdown && (
            <div style={dropdownStyle}>
              <Link to="/css/introduction" style={dropdownLinkStyle}>
                Introduction
              </Link>
              <Link to="/css/syntax" style={dropdownLinkStyle}>
                Syntax
              </Link>
              <Link to="/css/boxmodel" style={dropdownLinkStyle}>
                Box Model
              </Link>
            </div>
          )}
        </li>
        <li>
          <Link to="/javascript" style={linkStyle} onClick={handleJsDropdown}>
            JavaScript
          </Link>
          {jsDropdown && (
            <div style={dropdownStyle}>
              <Link to="/javascript/introduction" style={dropdownLinkStyle}>
                Introduction
              </Link>
              <Link to="/javascript/variables" style={dropdownLinkStyle}>
                Variables
              </Link>
              <Link to="/javascript/functions" style={dropdownLinkStyle}>
                Functions
              </Link>
            </div>
          )}
        </li>
        <li>
          <Link to="/react" style={linkStyle} onClick={handleReactDropdown}>
            React
          </Link>
          {reactDropdown && (
            <div style={dropdownStyle}>
              <Link to="/react/introduction" style={dropdownLinkStyle}>
                Introduction
              </Link>
              <Link to="/react/components" style={dropdownLinkStyle}>
                Components
              </Link>
              <Link to="/react/hooks" style={dropdownLinkStyle}>
                Hooks
              </Link>
            </div>
          )}
        </li>
        <li>
          <Link to="/headless-cms" style={linkStyle} onClick={handleCmsDropdown}>
            Headless CMS
          </Link>
          {cmsDropdown && (
            <div style={dropdownStyle}>
              <Link to="/headless-cms/introduction" style={dropdownLinkStyle}>
                Introduction
              </Link>
              <Link to="/headless-cms/content-modeling" style={dropdownLinkStyle}>
                Content Modeling
              </Link>
              <Link to="/headless-cms/api" style={dropdownLinkStyle}>
                API
              </Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  )};
