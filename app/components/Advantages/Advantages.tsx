import Image from "next/image";
import "./Advantages.css";

const Advantages = () => {
  return (
    <section className="advantages">
      <section className="activity-section">
        <div className="activity-wrapper">
          <Image
            src="/images/say-hello/hide-activity.png"
            alt="The image of the mobile phone with the opened browser"
            width="610"
            loading="lazy"
            height="775"
          />
          <div className="advantages__text-wrapper">
            <h2 className="subheading advantages__title">
              Hide your activity
              <br />
              from nosy people with
              <br />
              the free VPN
            </h2>
            <button className="button advantages__button">See more</button>
            <ul className="advantages-list">
              <li className="list-item">Protect your online privacy</li>
              <li className="list-item">Stay safe on public Wi‐Fi</li>
              <li className="list-item">Get around geo‐blocking</li>
              <li className="list-item">Browse like you're at home</li>
              <li className="list-item">Save on costs</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="activity-section">
        <div className="pain-ads">
          <div className="advantages__text-wrapper pain-ads-text">
            <h2 className="subheading advantages__title">
              Avoid pain in the
              <br />
              ads distractions
              <br />
              with AdBlock
            </h2>
            <button className="button advantages__button">See more</button>
            <ul className="advantages-list">
              <li className="list-item">Block annoying pop‐ups & banners</li>
              <li className="list-item">Avoid unskippable video ads</li>
              <li className="list-item">Load pages faster</li>
              <li className="list-item">Maximize battery life</li>
              <li className="list-item">Keep your data & device safe</li>
            </ul>
          </div>
          <Image
            src="/images/say-hello/avoid-pain.png"
            alt="The image of the mobile phone with the opened browser"
            width="700"
            loading="lazy"
            height="870"
          />
        </div>
      </section>
      <section className="activity-section">
        <div className="activity-wrapper">
          <Image
            src="/images/say-hello/web-freely.png"
            alt="The image of the mobile phone with the opened bank app"
            width="610"
            height="870"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 410px"
          />
          <div className="advantages__text-wrapper">
            <h2 className="subheading advantages__title">
              Web freely with
              <br />
              the built-in Web3
              <br />
              Crypto Wallet
            </h2>
            <button className="button advantages__button">See more</button>
            <ul className="advantages-list">
              <li className="list-item">Buy, send & receive crypto</li>
              <li className="list-item">Swap over 300 tokens</li>
              <li className="list-item">Explore Web3 apps</li>
              <li className="list-item">Store all your NFTs</li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Advantages;
