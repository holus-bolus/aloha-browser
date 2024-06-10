import "./HideWhatYouDo.css";

const HideWhatDo = () => {
  return (
    <section className="hide-what-do">
      <ul className="hide-what-do__list">
        <li className="hide-what-do__item">
          <h2 className="subheading hide-what-do__subheading">
            Hide what you do online
          </h2>
          <p className="list-subtitle hide-what-do__text">
            Keep your online activity hidden from nosy network owners and
            intrusive internet providers
          </p>
        </li>
        <li className="hide-what-do__item">
          <h2 className="subheading hide-what-do__subheading">
            Keep up your guard on public Wi‐Fi
          </h2>
          <p className="list-subtitle hide-what-do__text">
            Stop others from peeking at your data, even when connected
            non‐secure networks like public Wi‐Fi
          </p>
        </li>
        <li className="hide-what-do__item">
          <h2 className="subheading hide-what-do__subheading">
            Get around geo‐blocking
          </h2>
          <p className="list-subtitle hide-what-do__text">
            Trick sites into thinking you’re somewhere else to access services
            and media that are restricted in your area
          </p>
        </li>
        <li className="hide-what-do__item">
          <h2 className="subheading hide-what-do__subheading">
            Browse like you're at home
          </h2>
          <p className="list-subtitle hide-what-do__text">
            Enjoy local news, entertainment, and whatever else you miss from
            home while you're traveling or living abroad
          </p>
        </li>
        <li className="hide-what-do__item">
          <h2 className="subheading hide-what-do__subheading">
            Find cheaper rates
          </h2>
          <p className="list-subtitle hide-what-do__text">
            Switch countries to save on online stores, rental services and
            airlines that cheekily change prices based on your location
          </p>
        </li>
      </ul>
    </section>
  );
};

export default HideWhatDo;
