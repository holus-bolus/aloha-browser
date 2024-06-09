import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="title testimonials__title">
        Trusted by 150,000,000+ <br />
        people in 80 countries
      </h2>
      <div className="testimonials__wrapper">
        <div className="testimonials__apple-store">
          <div className="testimonials__apple-store-badge">
            <div className="testimonials__apple-number-wrapper">
              <Image
                src="/images/testimonials/testi1.svg"
                alt="The apple icon"
                width={100}
                height={100}
              ></Image>
              <p className="testimonials__average">4.7</p>
            </div>
            <button className="testimonials__review-button">
              278K reviews
            </button>
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
            <li className="testimonials__item"></li>
          </ul>
        </div>
        <div className="testimonials__google-play">
          <div className="testimonials__playmarket-number-wrapper">
            <Image
              src="/images/testimonials/testi2.svg"
              alt="The playstore icon"
              width={100}
              height={100}
            ></Image>
            <p className="testimonials__average">4.4</p>
          </div>
          <button className="testimonials__review-button">183K reviews</button>
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
              This app is amazing, definitely the best of its kind I have used.
              Works really well for downloading and storing files. Would highly
              recommend.
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
          <li className="testimonials__item"></li>
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
