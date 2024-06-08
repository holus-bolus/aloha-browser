import "./AdditionalAdvantages.css";
const AdditionalAdvantages = () => {
  return (
    <section className="additional-advantages">
      <h2 className="title additional-advantages__title">
        ... And that's not all
      </h2>
      <ul className="additional-advantages-list">
        <li className="additional-advantages-item">
          <h3 className="additional-advantages__subheading additional-advantages__subheading--light-blue">
            Browser features
          </h3>
          <ul className="additinal-advandages__inner-list">
            <li className="additional-advantages__inner-item">Data sync • </li>
            <li className="additional-advantages__inner-item">
              Aloha Premium sharing •
            </li>
            <li className="additional-advantages__inner-item">
              Access recovery
            </li>
          </ul>
        </li>
        <li className="additional-advantages-item">
          <h3 className="additional-advantages__subheading additional-advantages__subheading--light-light-blue">
            File manager
          </h3>
          <ul className="additinal-advandages__inner-list">
            <li className="additional-advantages__inner-item">
              Manage files •{" "}
            </li>
            <li className="additional-advantages__inner-item">
              Audio & video •{" "}
            </li>
            <li className="additional-advantages__inner-item">
              Multi-thread downloads •
            </li>
            <li className="additional-advantages__inner-item">
              Parallel downloads •
            </li>
            <li className="additional-advantages__inner-item">
              Private, locked folders •
            </li>
            <li className="additional-advantages__inner-item">
              Wi-Fi file sharing •
            </li>
            <li className="additional-advantages__inner-item">
              Archive & unarchive with ZIP support
            </li>
          </ul>
        </li>
        <li className="additional-advantages-item">
          <h3 className="additional-advantages__subheading additional-advantages__subheading--green">
            Media player
          </h3>
          <ul className="additinal-advandages__inner-list">
            <li className="additional-advantages__inner-item">
              Photo slideshow •
            </li>
            <li className="additional-advantages__inner-item">
              Audio playlist •
            </li>
            <li className="additional-advantages__inner-item">
              Background playing •
            </li>
            <br />
            <li className="additional-advantages__inner-item">
              Multiple formats •
            </li>
            <li className="additional-advantages__inner-item">
              Picture-in-Picture •
            </li>
            <li className="additional-advantages__inner-item">VR support</li>
            <li className="additional-advantages__inner-item">
              Gesture controls •
            </li>
            <li className="additional-advantages__inner-item">Chromecast</li>
          </ul>
        </li>
        <li className="additional-advantages-item">
          <h3 className="additional-advantages__subheading additional-advantages__subheading--purple">
            Profile
          </h3>
          <ul className="additinal-advandages__inner-list">
            <li className="additional-advantages__inner-item">Security • </li>
            <li className="additional-advantages__inner-item">Data sync</li>
          </ul>
        </li>
        <li className="additional-advantages-item">
          <h3 className="additional-advantages__subheading additional-advantages__subheading--orange">
            Appearance
          </h3>
          <ul className="additinal-advandages__inner-list">
            <li className="additional-advantages__inner-item">Dark mode • </li>
            <li className="additional-advantages__inner-item">
              Color themes •
            </li>
            <li className="additional-advantages__inner-item">News •</li>
            <li className="additional-advantages__inner-item">Wallpapers •</li>
          </ul>
        </li>
      </ul>
      <div className="additional-advantages__button-wrapper">
        <button className="additional-advantages__button">See more</button>
      </div>
    </section>
  );
};

export default AdditionalAdvantages;
