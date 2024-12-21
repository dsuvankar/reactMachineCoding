import React, { useState } from "react";
import Accordion from "./Accordion";
import data from "../data.json";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div>
      <h1>This is FAQ</h1>
      {data.faqs.map((faq) => {
        return (
          <Accordion
            key={faq.index}
            isOpen={activeIndex === faq.index}
            onClick={() =>
              setActiveIndex(activeIndex === faq.index ? null : faq.index)
            }
            qna={faq}
          />
        );
      })}
    </div>
  );
};

export default FAQ;
