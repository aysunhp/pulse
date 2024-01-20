import React from "react";
import "./footer.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Footer = () => {
  return (
    <footer>
      <div className="containerr">
        <p>
          Copyright ©2024 All rights reserved | This template is made with{" "}
          <FavoriteBorderIcon style={{ fontSize: "14px", color: "gray" }} /> by  
          <a href=""> Colorlib</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
