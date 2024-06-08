"use client";
import "./Header.css";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import SouthIcon from "@mui/icons-material/South";

const Header: React.FC = () => {
  const [featureAnchorEl, setFeatureAnchorEl] = useState<null | HTMLElement>(
    null,
  );
  const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(
    null,
  );

  const featureItems = [
    {
      key: "vpn",
      label: "VPN",
      href: "/features/vpn",
      icon: "/images/01.svg",
    },
    {
      key: "adblock",
      label: "AdBlock",
      href: "/features/adblock",
      icon: "/images/02.svg",
    },
    {
      key: "privacy",
      label: "Privacy",
      href: "/features/privacy",
      icon: "/images/03.svg",
    },
    {
      key: "wallet",
      label: "Wallet",
      href: "/features/wallet",
      icon: "/images/04.svg",
    },
    { key: "others", label: "Others", href: "/features/others" },
  ];

  const languageItems = [
    { key: "english", label: "English", href: "/locale/en" },
    { key: "deutsch", label: "Deutsch", href: "/locale/de" },
    { key: "espanol", label: "Español", href: "/locale/es" },
  ];

  const handleFeatureMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setFeatureAnchorEl(event.currentTarget);
  };

  const handleFeatureMenuClose = () => {
    setFeatureAnchorEl(null);
  };

  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setLanguageAnchorEl(null);
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-menu-wrapper">
          <Link href="/" className="nav-logo">
            <Image
              src="/images/aloha-logo.svg"
              alt="Logo"
              width={120}
              height={40}
              className="nav-logo-image"
            />
          </Link>
          <ul className="nav-list">
            <li>
              <Button
                aria-controls="feature-menu"
                aria-haspopup="true"
                style={{
                  textTransform: "none",
                  fontFamily: "Pangram Sans, sans-serif",
                  color: "#001767",
                  fontWeight: 550,
                  fontSize: "16px",
                }}
                onClick={handleFeatureMenuOpen}
                endIcon={<SouthIcon />}
              >
                Features
              </Button>
              <Menu
                id="feature-menu"
                anchorEl={featureAnchorEl}
                open={Boolean(featureAnchorEl)}
                onClose={handleFeatureMenuClose}
              >
                {featureItems.map((item) => (
                  <MenuItem key={item.key} onClick={handleFeatureMenuClose}>
                    {item.icon && (
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={20}
                        height={20}
                        className="dropdown-item-icon"
                      />
                    )}
                    <Link href={item.href} className="dropdown-item-link">
                      <Typography
                        style={{
                          fontFamily: "Pangram Sans, sans-serif",
                          color: "#001767",
                          fontWeight: 500,
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
            <li>
              <Link href="/premium" className="header-nav-link">
                Premium
              </Link>
            </li>
            <li>
              <Link href="/enterprise" className="header-nav-link">
                Enterprise
              </Link>
            </li>
            <li>
              <Link href="/about" className="header-nav-link">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="header-nav-link">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-actions">
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
          <div className="header-buttons-wrapper">
            <button className="header-profile-btn header-profile-btn--transparent">
              Profile
            </button>
            <button className="header-profile-btn header-profile-btn--filled">
              Get Browser
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
