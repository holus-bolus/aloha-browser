import "./GetToKnow.css";
import Image from "next/image";

const GetToKnow = () => {
  return (
    <section className="get-to-know">
      <h2 className="get-to-know__heading">Get to know Aloha</h2>
      <ul className="get-to-know__list">
        <li className="get-to-know__item get-to-know__item--vpn">
          <Image
            src="/images/get-to-know/vpn.png"
            alt="The icon of the planet in glasses"
            width={150}
            height={135}
          />
          <h3 className="get-to-know__subheading">VPN</h3>
        </li>
        <li className="get-to-know__item get-to-know__item--adblock">
          <Image
            src="/images/get-to-know/adblock.png"
            alt="The raised hand"
            width={120}
            height={145}
          />
          <h3 className="get-to-know__subheading">Ad block</h3>
        </li>
        <li className="get-to-know__item get-to-know__item--privacy">
          <Image
            src="/images/get-to-know/privacy.png"
            alt="The secure icon"
            width={125}
            height={150}
          />
          <h3 className="get-to-know__subheading">Privacy</h3>
        </li>
        <li className="get-to-know__item get-to-know__item--wallet">
          <Image
            src="/images/get-to-know/wallet.png"
            alt="The wallet icon"
            width={120}
            height={150}
          />
          <h3 className="get-to-know__subheading">Wallet</h3>
        </li>
        <li className="get-to-know__item get-to-know__item--others">
          Others
          <ul className="get-to-know__item-inner-list">
            <li className="get-to-know__item-inner-el">Browsing</li>
            <li className="get-to-know__item-inner-el">File manager</li>
            <li className="get-to-know__item-inner-el">Media player</li>
            <li className="get-to-know__item-inner-el">Profile</li>
            <li className="get-to-know__item-inner-el">Appearance</li>
          </ul>
        </li>
      </ul>
      <ul className="get-to-know__links-list">
        <li className="get-to-know__links-item">
          <h3 className="get-to-know__links-heading">Product</h3>
          <ul className="get-to-know__inner-list">
            <li className="get-to-know__inner-el">
              <a href="#">Aloha Premium</a>
            </li>
            <li className="get-to-know__inner-el">
              <a href="#">Get Premium</a>
            </li>
            <li className="get-to-know__inner-el">
              <a href="#">Enterprise</a>
            </li>
          </ul>
        </li>
        <li className="get-to-know__links-item">
          <h3 className="get-to-know__links-heading">Product</h3>
          <ul className="get-to-know__inner-list">
            <li className="get-to-know__inner-el">
              <a href="#">Company & Team</a>
            </li>
            <li className="get-to-know__inner-el">
              <a href="#">Careers</a>
            </li>
            <li className="get-to-know__inner-el">
              <a href="#">Blog</a>
            </li>
            <li className="get-to-know__inner-el">
              <a href="#">Press kit</a>
            </li>
          </ul>
        </li>
      </ul>
      <ul className="get-to-know__community-list">
        <li className="get-to-know__community-item">
          <a href="#" className="get-to-know__community-link">
            Reddit
          </a>
        </li>
        <li className="get-to-know__community-item">
          <a href="#" className="get-to-know__community-link">
            Instagram
          </a>
        </li>
        <li className="get-to-know__community-item">
          <a href="#" className="get-to-know__community-link">
            YouTube
          </a>
        </li>
        <li className="get-to-know__community-item">
          <a href="#" className="get-to-know__community-link">
            Twitter
          </a>
        </li>
        <li className="get-to-know__community-item">
          <a href="#" className="get-to-know__community-link">
            Telegram
          </a>
        </li>
        <li className="get-to-know__community-item">
          <a href="#" className="get-to-know__community-link">
            Discord
          </a>
        </li>
        <li className="get-to-know__community-item">
          <a href="#" className="get-to-know__community-link">
            Facebook
          </a>
        </li>
        <li className="get-to-know__community-item">
          <a href="#" className="get-to-know__community-link">
            LinkedIn
          </a>
        </li>
      </ul>
    </section>
  );
};

export default GetToKnow;
