import Image from "next/image";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="subheading testimonials__title">
        Trusted by 150,000,000+ <br />
        people in 80 countries
      </h2>
      <div className="testimonials__wrapper">
        <div className="testimonials__reviews-wrapper testimonials__apple-store">
          <div className="testimonials__apple-store-badge">
            <div className="testimonials__apple-number-wrapper">
              <Image
                src="/images/testimonials/testi1.svg"
                alt="The apple icon"
                width={100}
                height={100}
              ></Image>
              <p className="testimonials__average">4.8</p>
            </div>
            <div className="testimonials__button-wrapper">
              <button className="testimonials__review-button">
                278K reviews
              </button>
            </div>
          </div>
          <ul className="testimonials__list">
            <li className="testimonials__item">
              <div className="testimonials__item-points-wrapper">
                <img
                  src="/images/testimonials/testimonials-star-rating.svg"
                  alt="The star rating"
                />
              </div>
              <p className="testimonials__item-text">
                This app is amazing, definitely the best of its kind I have
                used. Works really well for downloading and storing files. Would
                highly recommend.
                <span className="testimonnials__item-name"> Gavhec</span>
              </p>
            </li>
            <li className="testimonials__item">
              <div className="testimonials__item-points-wrapper">
                <img
                  src="/images/testimonials/testimonials-star-rating.svg"
                  alt="The star rating"
                />
              </div>
              <p className="testimonials__item-text">
                The best app for browse everything and download.
                <span className="testimonnials__item-name"> Roxyyyy14</span>
              </p>
            </li>
            <li className="testimonials__item">
              <div className="testimonials__item-points-wrapper">
                <img
                  src="/images/testimonials/testimonials-star-rating.svg"
                  alt="The star rating"
                />
              </div>
              <p className="testimonials__item-text">
                I’m obsessed with Aloha! Great browser, real privacy, easy to
                navigate, user friendly and now Crypto wallet?! Keep up the good
                work!
                <span className="testimonnials__item-name"> ToySoldier23</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="testimonials__reviews-wrapper testimonials__google-play">
          <div className="testimonials__google-play-badge">
            <div className="testimonials__playmarket-number-wrapper">
              <Image
                src="/images/testimonials/testi2.svg"
                alt="The playstore icon"
                width={100}
                height={100}
              ></Image>
              <p className="testimonials__average">4.4</p>
            </div>
            <button className="testimonials__review-button">
              183K reviews
            </button>
          </div>
          <ul className="testimonials__list">
            <li className="testimonials__item">
              <div className="testimonials__item-points-wrapper">
                <img
                  src="/images/testimonials/testi-play-stars.svg"
                  alt="The star rating"
                />
              </div>
              <p className="testimonials__item-text">
                Very good, so i want to use it. It is useful and helpful to me.
                Easy to use, nice to use, and i enjoy it.
                <span className="testimonnials__item-name">
                  {" "}
                  Daniel Bawia Dawn
                </span>
              </p>
            </li>
            <li className="testimonials__item">
              <div className="testimonials__item-points-wrapper">
                <img
                  src="/images/testimonials/testi-play-stars.svg"
                  alt="The star rating"
                />
              </div>
              <p className="testimonials__item-text">
                No ads no problem and the private tab Password feature is
                awesome.
                <span className="testimonnials__item-name"> Dev Rana</span>
              </p>
            </li>
            <li className="testimonials__item">
              <div className="testimonials__item-points-wrapper">
                <img
                  src="/images/testimonials/testi-play-stars.svg"
                  alt="The star rating"
                />
              </div>
              <p className="testimonials__item-text">
                Very good app!!! Downloads great and loads of features and
                settings. Vpn and ad blocker, for free!!!
                <span className="testimonnials__item-name"> Joshua Dillon</span>
              </p>
            </li>
            <li className="testimonials__item">
              <div className="testimonials__item-points-wrapper">
                <img
                  src="/images/testimonials/testi-play-stars.svg"
                  alt="The star rating"
                />
              </div>
              <p className="testimonials__item-text">
                Very good at blocking disruptive ads, and crushes popups.
                <span className="testimonnials__item-name">
                  {" "}
                  Sunamii Studios
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
