import "./AlohaPremium.css";

const AlohaPremium = () => {
  return (
    <section className="aloha-premium">
      <h2 className="subheading aloha-premium__title">Aloha Premium</h2>
      <p className="description aloha-premium__description">
        Get more of that next-level <br />
        browsing feeling with premium <br />
        features
      </p>
      <div className="aloha-premium__center">
        <div className="aloha-premium__list">
          <h3 className="list-subtitle aloha-premium__list-title">
            Exclusive VPN access
          </h3>
          <ul className="aloha-premium__features-list">
            <li className="aloha-premium__features-item">80+ locations</li>
            <li className="aloha-premium__features-item">
              Autostart VPN connection
            </li>
            <li className="aloha-premium__features-item">
              Always-on protection
            </li>
            <li className="aloha-premium__features-item">Phone wide VPN</li>
          </ul>
          <h3 className="list-subtitle aloha-premium__list-title">
            Advanced file management
          </h3>
          <ul className="aloha-premium__features-list">
            <li className="aloha-premium__features-item">
              Set passcodes for folders
            </li>
            <li className="aloha-premium__features-item">
              Transfer between devices using Wi-Fi
            </li>
            <li className="aloha-premium__features-item">
              Archive files via ZIP compression
            </li>
          </ul>
          <h3 className="list-subtitle aloha-premium__list-title">
            More customization options
          </h3>
          <ul className="aloha-premium__features-list">
            <li className="aloha-premium__features-item">
              Get premium wallpapers
            </li>
            <li className="aloha-premium__features-item">Get color themes</li>
          </ul>
        </div>
      </div>
      <div className="aloha-premium__buttons-wrapper">
        <button className="aloha-premium__button aloha-premium__button--transparent">
          See more
        </button>
        <button className="aloha-premium__button aloha-premium__button--filled">
          Get Premium
        </button>
      </div>
    </section>
  );
};

export default AlohaPremium;
