import React, { useState } from "react";

const Tabs = ({ data, onChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="tabs">
      <div className="tab_container">
        {data.map((item, index) => {
          return (
            <button
              key={index}
              className={currentIndex === index ? "active" : ""}
              onClick={() => {
                setCurrentIndex(index);
                onChange(index);
              }}>
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="tabs_content">{data[currentIndex].content}</div>
    </div>
  );
};

export default Tabs;
