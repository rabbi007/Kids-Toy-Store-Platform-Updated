import React, { useState } from 'react';
import './Faq.css'; // External CSS file for styles

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the return policy?",
      answer:
        "We offer a 30-day return policy on most items. Please refer to our full return policy page for more details.",
    },
    {
      question: "Do you offer gift wrapping?",
      answer:
        "Yes, we provide gift wrapping services for most of our products. You can select the gift wrapping option during checkout.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email to track your package.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards, PayPal, and Apple Pay. You can select your preferred payment method during checkout.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we offer international shipping to various countries. Shipping fees and delivery times may vary based on the destination.",
    },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleAnswer(index)}
              style={{ cursor: 'pointer' }}
            >
              {faq.question}
              <span className="faq-toggle-icon">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
