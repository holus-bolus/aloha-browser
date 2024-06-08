import Image from "next/image";
import "./Advantages.css";

const Advantages = () => {
  return (
    <section className="advantages">
      <section className="hide">
        <div className="hide-activity-wrapper">
          <Image
            src="/images/say-hello/hide-activity.png"
            alt="The image of the mobile phone with the opened browser"
            width="610"
            height="775"
          />
          <div className="hide-activity-text-wrapper">
            <h2 className="hide-activity-title">
              Hide your
              <br />
              activity from
              <br />
              nosy people with
              <br />
              the free VPN
            </h2>
            <button className="hide-activity-button">See more</button>
            <ul className="hide-activity-list">
              <li className="hide-activity-list-item">
                Protect your online privacy
              </li>
              <li className="hide-activity-list-item">
                Stay safe on public Wi‐Fi
              </li>
              <li className="hide-activity-list-item">
                Get around geo‐blocking
              </li>
              <li className="hide-activity-list-item">
                Browse like you're at home
              </li>
              <li className="hide-activity-list-item">Save on costs</li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Advantages;
