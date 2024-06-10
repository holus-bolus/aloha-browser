"use client";
import "./VPNHero.css";
import HideWhatDo from "@/app/components/HideWhatDo/HideWhatDo";
import VpnMuchMore from "@/app/components/VpnMuchMore/VpnMuchMore";
import StayProtected from "@/app/components/StayProtected/StayProtected";
import FaqBlock from "@/app/components/FAQblock/FaqBlock";

const VPNHero = () => {
  const handleButtonClick = () => {
    window.location.href = "https://www.alohabrowser.com/download.html";
  };
  return (
    <>
      <section className="vpn">
        <h1 className="hero-header hero-header--white">VPN</h1>
        <p className="subheading vpn__paragraph">
          Free, no‐holds‐barred virtual <br />
          private network
        </p>
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
        <ul className="vpn__hero-images">
          <li className="vpn__hero-image">
            <img
              src="/images/vpn/VPN_2.png"
              alt="A mobile phone with the aloha browser"
            />
          </li>
          <li className="vpn__hero-image">
            <img
              src="/images/vpn/VPN_1.png"
              alt="A mobile phone with the aloha browser"
            />
          </li>
          <li className="vpn__hero-image">
            <img
              src="/images/vpn/VPN_1.png"
              alt="A mobile phone with the aloha browser"
            />
          </li>
        </ul>
      </section>
      <HideWhatDo />
      <VpnMuchMore />
      <StayProtected />
      <FaqBlock />
    </>
  );
};

export default VPNHero;
