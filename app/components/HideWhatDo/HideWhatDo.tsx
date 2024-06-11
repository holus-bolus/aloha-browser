import React, { useState, useEffect, useRef, useCallback } from "react";
import "./HideWhatYouDo.css";

const images = [
  "/images/vpn/browse-like-at-home.png",
  "/images/vpn/find-rates.png",
  "/images/vpn/geoblocking.png",
  "/images/vpn/hide-what-you-do.png",
  "/images/vpn/keep-guard.png",
];

const HideWhatDo = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
    resetTimer();
  };

  const autoScroll = useCallback(() => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(autoScroll, 2000);
  }, [autoScroll]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [resetTimer]);

  return (
    <section className="hide-what-do">
      <div className="hide-what-do__container">
        <ul className="hide-what-do__list">
          {[
            {
              title: "Hide what you do online",
              text: "Keep your online activity hidden from nosy network owners and intrusive internet providers",
            },
            {
              title: "Keep up your guard on public Wi‐Fi",
              text: "Stop others from peeking at your data, even when connected non‐secure networks like public Wi‐Fi",
            },
            {
              title: "Get around geo‐blocking",
              text: "Trick sites into thinking you’re somewhere else to access services and media that are restricted in your area",
            },
            {
              title: "Browse like you're at home",
              text: "Enjoy local news, entertainment, and whatever else you miss from home while you're traveling or living abroad",
            },
            {
              title: "Find cheaper rates",
              text: "Switch countries to save on online stores, rental services and airlines that cheekily change prices based on your location",
            },
          ].map((item, index) => (
            <li
              key={index}
              className={`hide-what-do__item ${
                selectedIndex === index ? "active" : ""
              }`}
              onClick={() => handleItemClick(index)}
            >
              <div className="hide-what-do__content">
                <div className="hide-what-do__text-content">
                  <h2 className="subheading hide-what-do__subheading">
                    {item.title}
                  </h2>
                  <p className="list-subtitle hide-what-do__text">
                    {item.text}
                  </p>
                </div>
                <div className="hide-what-do__image-wrapper">
                  <img
                    src={images[index]}
                    alt={`Illustration for ${index}`}
                    className={`hide-what-do__image ${
                      selectedIndex === index ? "active" : ""
                    }`}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HideWhatDo;
