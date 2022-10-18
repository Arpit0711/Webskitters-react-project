import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__icons">
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
      </div>
      <h5 className="footer__text">Copyright: 2022 All right reserved</h5>
    </div>
  );
}
