import React, { useState } from "react";
import "./navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [disp, setDisp] = useState(false);
  return (
    <header>
      <div className="containerr">
        <div className="left-sect">
          <h1>
            Pulse <span>.</span>
          </h1>
        </div>
        <ul>
          <Link to="/">
            {" "}
            <li>Home</li>
          </Link>
          <Link to="/add">
            {" "}
            <li>Add</li>
          </Link>
          <Link to="/basket">
            {" "}
            <li>Basket</li>
          </Link>
          <Link to="/wishlist">
            {" "}
            <li>Wishlist</li>
          </Link>

          <li>About us</li>
          <li>Restaurant</li>
          <Link to="/blog">
            {" "}
            <li>Blog</li>
          </Link>
          
          <li>News</li>
          <li>Contact</li>
        </ul>

        <div
          className="mobile-menu-bar"
          onClick={() => {
            setDisp(!disp);
          }}
        >
          <MenuIcon
            style={{ fontSize: "45px", color: "white", fontWeight: "900" }}
          />
        </div>
      </div>

      <div className="mobile-nav" style={{ display: disp ? "block" : "none" }}>
        <ul>
        <Link to="/">
            {" "}
            <li>Home</li>
          </Link>
          <Link to="/add">
            {" "}
            <li>Add</li>
          </Link>
          <Link to="/basket">
            {" "}
            <li>Basket</li>
          </Link>
          <Link to="/wishlist">
            {" "}
            <li>Wishlist</li>
          </Link>
          <li>About us</li>
          <li>Restaurant</li>
          <li>News</li>
          <li>News</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
