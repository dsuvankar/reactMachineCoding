import React, { useState } from "react";

const Accordion = ({ qna, isOpen, onClick }) => {
  return (
    <div className="accordion">
      <h4>
        {qna.question}
        <span onClick={onClick}>{isOpen ? "-" : "+"}</span>
      </h4>

      {isOpen && <p>{qna.answer}</p>}
    </div>
  );
};

export default Accordion;
