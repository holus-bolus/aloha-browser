import React from "react";
import FaqBlock from "@/app/components/FAQblock/FaqBlock";
import "./Questions.css";

const Questions = () => {
  return (
    <section className="questions">
      <h2 className="hero-header questions__header">Questions</h2>
      <div className="questions-content">
        <FaqBlock />
        <div className="faq-block__more-questions">
          <p className="faq-block__more-questions-text">
            Have more questions? <a href="/">Visit our home page</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Questions;
