import React from "react";
import BannerImage from "./BannerImage";
import "./Banner.css";
import pfp from './pfp.jpg';
import { Avatar } from "@mui/material";

const Banner = () => {
  // TODO: Move pfp to be in the center of the div instead of the bottom.


  return (
    <div className="banner-container">
      <BannerImage />
      <div className="vignette-overlay" />
      <Avatar
        alt="Juan Alvarez"
        src={pfp}
        className="profile-avatar"
        sx={{ width: "clamp(64px, 10vw, 144px)", 
          height: "clamp(64px, 10vw, 144px)"}}
      />
    </div>
  )
}

export default Banner
