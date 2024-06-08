import "./BigPrivacy.css";

const BigPrivacy = () => {
  return (
    <section className="big-privacy">
      <h2 className="title big-privacy__title">
        Big on privacy? We've got you
      </h2>
      <p className="description big-privacy__description">
        None of this activity log, tracker or data sharing
        <br />
        nonsense – what you do online is none of our
        <br />
        business. Quite literally, in fact. And so we hand
        <br />
        you the tools you need to browse online away from
        <br />
        prying eyes
      </p>
      <ul className="big-privacy__list">
        <li className="big-privacy__item">
          <div className="big-privacy__item-wrapper">
            <h3 className="big-privacy__list-title">
              Passcode & Face/Touch ID
            </h3>
            <p className="big-privacy__list-desc">
              Lock down individual tabs or even the app itself with a passcode
              or biometrics
            </p>
          </div>
        </li>
        <li className="big-privacy__item">
          <div className="big-privacy__item-wrapper">
            <h3 className="big-privacy__list-title">HTTPS lock</h3>
            <p className="big-privacy__list-desc">
              Make sure you only visit sites using the secure HTTPS standard
            </p>
          </div>
        </li>
        <li className="big-privacy__item">
          <div className="big-privacy__item-wrapper">
            <h3 className="big-privacy__list-title">Privacy report</h3>
            <p className="big-privacy__list-desc">
              Keep tabs on how many ads, trackers and pop-ups you’ve blocked
            </p>
          </div>
        </li>
        <li className="big-privacy__item">
          <div className="big-privacy__item-wrapper">
            <h3 className="big-privacy__list-title">Redirect blocker</h3>
            <p className="big-privacy__list-desc">
              Block those annoying redirects and go to the pages you’re actually
              looking for
            </p>
          </div>
        </li>
        <li className="big-privacy__item">
          <div className="big-privacy__item-wrapper">
            <h3 className="big-privacy__list-title">No data collection</h3>
            <p className="big-privacy__list-desc">
              It’s true, Aloha really doesn’t collect or share any of your data
            </p>
          </div>
        </li>
        <li className="big-privacy__item">
          <div className="big-privacy__item-wrapper">
            <h3 className="big-privacy__list-title">3rd party audit</h3>
            <p className="big-privacy__list-desc">
              Don’t just take our word for it – our privacy policy is regularly
              audited by Leviathan Security Group
            </p>
          </div>
        </li>
      </ul>
      <div className="big-privacy__button-wrapper">
        <button className="button big-privacy__button">See more</button>
      </div>
    </section>
  );
};

export default BigPrivacy;
