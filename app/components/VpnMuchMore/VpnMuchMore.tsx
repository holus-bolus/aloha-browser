const VpnMuchMore = () => {
  return (
    <section className="vpn-more">
      <h2 className="subheading vpn__subheading">And much more</h2>
      <div className="vpn-more__list-wrapper">
        <ul className="vpn-more__list">
          <li className="vpn-more__list-item">
            <h3 className="description vpn-more__description-heading">
              Easy to start
            </h3>
            <p className="list-description vpn-more__description">
              Getting started is stupidly easy — quite literally at the tap of a
              button
            </p>
          </li>
          <li className="vpn-more__list-item">
            <h3 className="description vpn-more__description">
              Everything encrypted
            </h3>
            <p className="list-description vpn-more__description"></p>
          </li>
          Our VPN connection is protected with 256‐bit AES and DNS leak
          protection. In non‐nerd speak, your data is protected by top‐level
          encryption
          <li className="vpn-more__list-item">
            <h3 className="description vpn-more__description-heading">
              No logs & no data collection
            </h3>
            <p className="list-description vpn-more__description">
              Encrypt data, compress traffic, and stop trackers from sharing
              your private data with third parties — or us
            </p>
          </li>
          <li className="vpn-more__list-item">
            <h3 className="description vpn-more__description-heading">
              Autostart
            </h3>
            <p className="list-description vpn-more__description">
              Forgetful? No problem — automatically connect to the VPN when you
              start up the app
            </p>
          </li>
        </ul>
        <ul className="vpn-more__list">
          <li className="vpn-more__list-item">
            <h3 className="description vpn-more__description-heading">
              Free & unlimited
            </h3>
            <p className="list-description vpn-more__description">
              Connect anytime, anywhere, at no cost. Best of all, we don’t skimp
              out on data, so you can browse with VPN protection without
              worrying about limits
            </p>
          </li>
          <li className="vpn-more__list-item">
            <h3 className="description vpn-more__description-heading">
              80+ locations
            </h3>
            <p className="list-description vpn-more__description">
              Mix things up by choosing from over 80 exclusive VPN locations
            </p>
          </li>
          <li className="vpn-more__list-item">
            <h3 className="description vpn-more__description-heading">
              Phone‐wide protection
            </h3>
            <p className="list-description vpn-more__description">
              Get that secure VPN connection across all your apps — not just in
              Aloha Browser
            </p>
          </li>
          <li className="vpn-more__list-item">
            <h3 className="description vpn-more__description-heading">
              Always on connection
            </h3>
            <p className="list-description vpn-more__description">
              Never slip up thanks to an automatic kill switch that ensures
              you’re always protected
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default VpnMuchMore;