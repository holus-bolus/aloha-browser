"use client";
import Image from "next/image";
import "./hero.css";

export default function Home() {
  const handleButtonClick = () => {
    window.location.href = "https://www.alohabrowser.com/download.html";
  };
  return (
    <main className="main">
      <div className="hero-wrapper">
        <div className="hero-text-wrapper">
          <h2 className="hero-header hero-header--white">Unlimited freedom.</h2>
          <h2 className="hero-header hero-header--white">Total privacy.</h2>
          <h2 className="hero-header hero-header--blue hero-header--bottom">
            Upgrade your digital
            <br />
            world with Aloha
          </h2>
          <div className="button-icons-wrapper">
            <button className="hero-button" onClick={handleButtonClick}>
              Get Aloha Browser
            </button>
            <ul className="hero-social-list">
              <li className="hero-social-item">
                <a href="#" className="hero-social-link">
                  <img
                    src="/images/hero/windows.png"
                    alt="A windows icon"
                    className="hero-social-icon"
                  />
                </a>
              </li>
              <li className="hero-social-item">
                <a href="#" className="hero-social-link">
                  <img
                    src="/images/hero/android.png"
                    alt="An android icon"
                    className="hero-social-icon"
                  />
                </a>
              </li>
              <li className="hero-social-item">
                <a href="#" className="hero-social-link">
                  <img
                    src="/images/hero/apple-logo.png"
                    alt="An apple icon"
                    className="hero-social-icon"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Image
          src="/images/banner.png"
          alt="the banner"
          width="1300"
          height="800"
        />
      </div>
    </main>
  );
}
