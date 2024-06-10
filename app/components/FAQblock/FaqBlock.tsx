import React, { useState } from "react";
import "./FaqBlock.css";

interface Question {
  id: number;
  question: string;
  answer: string;
}

const FaqBlock: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "How do I enable the VPN on Aloha?",
      answer:
        "That's easy: Either give a quick tap on the lightning shield symbol next to the search/URL bar, or go to Settings → VPN and tap 'Connect to VPN'",
    },
    {
      id: 2,
      question: "Can my ISP see what I am doing when I use Aloha VPN?",
      answer:
        "No, your ISP cannot see your online activity when you use Aloha VPN.",
    },
    {
      id: 3,
      question: "Which countries are offered on Aloha VPN?",
      answer:
        "Aloha VPN offers servers in multiple countries including the US, UK, Canada, and more.",
    },
    {
      id: 4,
      question: "How can I check if the VPN is connected?",
      answer:
        "You can check the VPN status in the Aloha app settings under the VPN section.",
    },
  ];

  const handleQuestionClick = (id: number) => {
    setSelectedQuestion(selectedQuestion === id ? null : id);
  };

  const selectedAnswer = questions.find(
    (q) => q.id === selectedQuestion,
  )?.answer;

  return (
    <div className="faq-block">
      <div className="faq-questions">
        {questions.map((q) => (
          <div
            key={q.id}
            className={`faq-question ${selectedQuestion === q.id ? "active" : ""}`}
            onClick={() => handleQuestionClick(q.id)}
          >
            {q.question}
          </div>
        ))}
      </div>
      <div className="faq-answer">
        {selectedAnswer && <p>{selectedAnswer}</p>}
      </div>
    </div>
  );
};

export default FaqBlock;
