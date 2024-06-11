import "./StayProtected.css";

const StayProtected = () => {
  const handleButtonClick = () => {
    window.location.href = "https://www.alohabrowser.com/download.html";
  };
  return (
    <section className="stay-protected">
      <div className="stay-protected__text-wrapper">
        <h2 className="stay-protected__heading">
          Stay protected, no matter <br /> the platform
        </h2>
        <p className="stay-protected__description">
          Our VPN is built into Aloha Browser and works on all
          <br /> sorts of popular devices
        </p>
        <div className="stay-protected__button-wrapper">
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
    </section>
  );
};

export default StayProtected;
