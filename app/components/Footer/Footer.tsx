import "./Footer.css";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import SouthIcon from "@mui/icons-material/South";
import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(
    null,
  );
  const languageItems = [
    { key: "english", label: "English", href: "/locale/en" },
    { key: "deutsch", label: "Deutsch", href: "/locale/de" },
    { key: "espanol", label: "Español", href: "/locale/es" },
  ];
  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setLanguageAnchorEl(null);
  };

  return (
    <footer className="footer">
      <div className="container-full">
        <ul className="footer__terms-list">
          <li className="footer__terms-item">© 2023 Aloha Browser</li>
          <li className="footer__terms-item">
            <Button
              aria-controls="language-menu"
              aria-haspopup="true"
              onClick={handleLanguageMenuOpen}
              endIcon={<SouthIcon />}
              style={{
                textTransform: "none",
                fontFamily: "Pangram Sans, sans-serif",
                color: "#001767",
                fontWeight: 700,
                fontSize: "16px",
                marginTop: "5px",
              }}
            >
              En
            </Button>
            <Menu
              id="language-menu"
              anchorEl={languageAnchorEl}
              open={Boolean(languageAnchorEl)}
              onClose={handleLanguageMenuClose}
            >
              {languageItems.map((item) => (
                <MenuItem key={item.key} onClick={handleLanguageMenuClose}>
                  <Link href={item.href} className="dropdown-item-link">
                    <Typography
                      style={{
                        fontFamily: "Pangram Sans, sans-serif",
                        color: "#001767",
                        fontWeight: 700,
                        fontSize: "16px",
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </li>
          <li className="footer__terms-item">
            <Link href="/terms" className="footer__terms-link">
              Terms of Service
            </Link>
          </li>
          <li className="footer__terms-item">
            <Link href="/privacy" className="footer__terms-link">
              Privacy Policy
            </Link>
          </li>
        </ul>
        <div className="footer__social-media">
          <ul className="footer__social-media-list">
            <li className="footer__social-media-item">
              <a href="#" className="footer__social-media-link">
                <img
                  src="/images/hero/windows.png"
                  alt="A windows icon"
                  className="footer__social-media-icon"
                />
              </a>
            </li>
            <li className="footer__social-media-item">
              <a href="#" className="footer__social-media-link">
                <img
                  src="/images/hero/android.png"
                  alt="An android icon"
                  className="footer__social-media-icon"
                />
              </a>
            </li>
            <li className="footer__social-media-item">
              <a href="#" className="footer__social-media-link">
                <img
                  src="/images/hero/apple-logo.png"
                  alt="An apple icon"
                  className="footer__social-media-icon"
                />
              </a>
            </li>
          </ul>
          <button className="footer__social-media-button">
            Get Aloha Browser
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
