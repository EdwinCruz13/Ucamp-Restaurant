import React from "react";
import { Link } from 'react-router-dom';


import "./Header.css";
import fb_icon from "../../icons/fb.png";
import instagram_icon from "../../icons/instagram.png";
import twitter_icon from "../../icons/twitter.png";
import tiktok_icon from "../../icons/tiktok.png";

export const Header = () => {
  return (
    <>
      

      <header id="header-menu">
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Order">Menu</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div id="social-media-link">
          <ul>
            <li>
              <a href="#">
                <img src={tiktok_icon} alt="SocialMedia-tiktok" />
              </a>
            </li>

            <li>
              <a href="#">
                <img src={twitter_icon} alt="SocialMedia-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={instagram_icon} alt="SocialMedia-instagran" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={fb_icon} alt="SocialMedia-fb" />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
