import React, { useState } from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import SouthIcon from "@mui/icons-material/South";
import "./GetToKnow.css";

const GetToKnow = () => {
  const [showPressKit, setShowPressKit] = useState(false);

  const handlePressKitClick = () => {
    setShowPressKit(!showPressKit);
  };

  return (
    <section className="get-to-know">
      <div className="container-full">
        <h2 className="get-to-know__heading">Get to know Aloha</h2>
        <ul className="get-to-know__list">
          <li className="get-to-know__item get-to-know__item--vpn">
            <a href="#" className="get-to-know__inner-item-link">
              <h3 className="get-to-know__subheading">VPN</h3>
              <Image
                src="/images/get-to-know/vpn.png"
                alt="The icon of the planet in glasses"
                width={150}
                height={135}
              />
            </a>
          </li>
          <li className="get-to-know__item get-to-know__item--adblock">
            <a href="#" className="get-to-know__inner-item-link">
              <h3 className="get-to-know__subheading">Ad block</h3>
              <Image
                src="/images/get-to-know/adblock.png"
                alt="The raised hand"
                width={120}
                height={145}
              />
            </a>
          </li>
          <li className="get-to-know__item get-to-know__item--privacy">
            <a href="#" className="get-to-know__inner-item-link">
              <h3 className="get-to-know__subheading">Privacy</h3>
              <Image
                src="/images/get-to-know/privacy.png"
                alt="The secure icon"
                width={125}
                height={150}
              />
            </a>
          </li>
          <li className="get-to-know__item get-to-know__item--wallet">
            <a href="#" className="get-to-know__inner-item-link">
              <h3 className="get-to-know__subheading">Wallet</h3>
              <Image
                src="/images/get-to-know/wallet.png"
                alt="The wallet icon"
                width={120}
                height={150}
              />
            </a>
          </li>
          <li className="get-to-know__item get-to-know__item--others">
            <div className="get-to-know__inner-item-others">
              <h3 className="get-to-know__subheading">Others</h3>
              <ul className="get-to-know__item-inner-list">
                <li className="get-to-know__item-inner-el">
                  <a href="#">Browsing</a>
                </li>
                <li className="get-to-know__item-inner-el">
                  <a href="#">File manager</a>
                </li>
                <li className="get-to-know__item-inner-el">
                  <a href="#">Media player</a>
                </li>
                <li className="get-to-know__item-inner-el">
                  <a href="#">Profile</a>
                </li>
                <li className="get-to-know__item-inner-el">
                  <a href="#">Appearance</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="get-to-know__bottom-links-wrapper">
          <ul className="get-to-know__links-list">
            <li className="get-to-know__links-item">
              <h3 className="get-to-know__links-heading">Product</h3>
              <ul className="get-to-know__inner-list">
                <li className="get-to-know__inner-el">
                  <a href="#" className="get-to-know__inner-el-link">
                    Aloha Premium
                  </a>
                </li>
                <li className="get-to-know__inner-el">
                  <a href="#" className="get-to-know__inner-el-link">
                    Get Premium
                  </a>
                </li>
                <li className="get-to-know__inner-el">
                  <a href="#" className="get-to-know__inner-el-link">
                    Enterprise
                  </a>
                </li>
              </ul>
            </li>
            <li className="get-to-know__links-item get-to-know__links-item--about">
              <h3 className="get-to-know__links-heading">About</h3>
              <ul className="get-to-know__inner-list">
                <li className="get-to-know__inner-el">
                  <a href="#" className="get-to-know__inner-el-link">
                    Company & Team
                  </a>
                </li>
                <li className="get-to-know__inner-el">
                  <a href="#" className="get-to-know__inner-el-link">
                    Careers
                  </a>
                </li>
                <li className="get-to-know__inner-el">
                  <a href="#" className="get-to-know__inner-el-link">
                    Blog
                  </a>
                </li>
                <li className="get-to-know__inner-el">
                  <Button
                    aria-controls="language-menu"
                    aria-haspopup="true"
                    onClick={handlePressKitClick}
                    endIcon={<SouthIcon />}
                    style={{
                      textTransform: "none",
                      fontFamily: "Pangram Sans, sans-serif",
                      color: "#001767",
                      fontWeight: 600,
                      fontSize: "20px",
                      marginTop: "5px",
                      padding: "0",
                    }}
                  >
                    Press kit
                  </Button>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="get-to-know__community-list">
            <h3 className="get-to-know__links-heading">Community</h3>
            <li className="get-to-know__community-item">
              <a href="#" className="get-to-know__inner-el">
                Reddit
              </a>
            </li>
            <li className="get-to-know__community-item">
              <a href="#" className="get-to-know__inner-el">
                Instagram
              </a>
            </li>
            <li className="get-to-know__community-item">
              <a href="#" className="get-to-know__inner-el">
                YouTube
              </a>
            </li>
            <li className="get-to-know__community-item">
              <a href="#" className="get-to-know__inner-el">
                Twitter
              </a>
            </li>
            <li className="get-to-know__community-item">
              <a href="#" className="get-to-know__inner-el">
                Telegram
              </a>
            </li>
            <li className="get-to-know__community-item">
              <a href="#" className="get-to-know__inner-el">
                Discord
              </a>
            </li>
            <li className="get-to-know__community-item">
              <a href="#" className="get-to-know__inner-el">
                Facebook
              </a>
            </li>
            <li className="get-to-know__community-item">
              <a href="#" className="get-to-know__inner-el">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        {showPressKit && (
          <div className="press-kit-content">
            <h3>Press Kit</h3>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </li>
              <li>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </li>
              <li>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </li>
              <li>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default GetToKnow;
