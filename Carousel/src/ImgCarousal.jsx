import React, { useEffect, useRef, useState } from "react";
import data from "./data.json";

const DATA_LENGTH = data.length;

const ImgCarousal = () => {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);

  const handlePrev = () => {
    if (index == 0) {
      setIndex(DATA_LENGTH - 1);
      console.log(index);
    } else {
      setIndex(index - 1);
    }
  };
  const handleNext = () => {
    setIndex((prevIndex) => {
      if (prevIndex === DATA_LENGTH - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };
  const startInterval = () => {
    ref.current = setInterval(handleNext, 1000);
  };

  const stopInterval = () => {
    clearInterval(ref.current);
  };

  useEffect(() => {
    startInterval();

    return () => stopInterval();
  }, []);

  return (
    <div className="container">
      <span onClick={handlePrev} className="left-arrow">
        &#8592;
      </span>
      <img
        onMouseEnter={() => {
          stopInterval();
        }}
        onMouseLeave={() => {
          startInterval();
        }}
        src={data[index].download_url}
        alt=""
      />
      <span onClick={handleNext} className="right-arrow">
        &#8594;
      </span>
    </div>
  );
};

export default ImgCarousal;
