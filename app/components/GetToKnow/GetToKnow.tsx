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
            width={135}
            height={135}
          />
          <h3 className="get-to-know__subheading">VPN</h3>
        </li>
        <li className="get-to-know__item get-to-know__item--adblock">
          <Image
            src="/images/get-to-know/adblock.png"
            alt="The raised hand"
            width={135}
            height={135}
          />
          <h3 className="get-to-know__subheading">Ad block</h3>
        </li>
        <li className="get-to-know__item get-to-know__item--privacy">
          <Image
            src="/images/get-to-know/privacy.png"
            alt="The secure icon"
            width={135}
            height={135}
          />
          <h3 className="get-to-know__subheading">Privacy</h3>
        </li>
        <li className="get-to-know__item get-to-know__item--wallet">
          <Image
            src="/images/get-to-know/wallet.png"
            alt="The wallet icon"
            width={135}
            height={135}
          />
          <h3 className="get-to-know__subheading">Wallet</h3>
        </li>
        <li className="get-to-know__item"></li>
      </ul>
      <ul className="get-to-know__links-list">
        <li className="get-to-know__links-item">
          <ul className="get-to-know__inner-list"></ul>
        </li>
        <li className="get-to-know__links-item">
          <ul className="get-to-know__inner-list"></ul>
        </li>
      </ul>
    </section>
  );
};

export default GetToKnow;
