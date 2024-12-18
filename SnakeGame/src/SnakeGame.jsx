import React, { useEffect, useRef } from "react";
import { useState } from "react";

const GRID_SIZE = 15;
const GAMEGRID = Array.from({ length: GRID_SIZE }, () => {
  return new Array(GRID_SIZE).fill(" ");
});

const INTIAL_SNAKE = [[5, 4]];

const generateFood = () => {
  const x = Math.floor(Math.random() * GRID_SIZE);
  const y = Math.floor(Math.random() * GRID_SIZE);

  return [x, y];
};

//main func
const SnakeGame = () => {
  const [snakeBody, setSnakeBody] = useState(INTIAL_SNAKE);

  const directionRef = useRef([1, 0]);
  const foodRef = useRef(generateFood());
  const isSnakeBodyDiv = (xc, yc) => {
    return snakeBody.some(([x, y]) => {
      return x === xc && y === yc;
    });
  };

  useEffect(() => {
    const intervalID = setInterval(() => {
      setSnakeBody((prevSnakeBody) => {
        const newHead = [
          prevSnakeBody[0][0] + directionRef.current[0],
          prevSnakeBody[0][1] + directionRef.current[1],
        ];

        if (
          newHead[0] < 0 ||
          newHead[0] >= GRID_SIZE ||
          newHead[1] < 0 ||
          newHead[1] >= GRID_SIZE ||
          prevSnakeBody.some(([x, y]) => {
            return newHead[0] === x && newHead[1] === y;
          })
        ) {
          directionRef.current = [1, 0];
          return INTIAL_SNAKE;
        }
        console.log(directionRef);
        const copySnakeBody = prevSnakeBody.map((arr) => [...arr]);
        if (
          newHead[0] === foodRef.current[0] &&
          newHead[1] === foodRef.current[1]
        ) {
          foodRef.current = generateFood();
        } else {
          copySnakeBody.pop();
        }

        copySnakeBody.unshift(newHead);
        return copySnakeBody;
      });
    }, 300);

    const handleDirection = (e) => {
      const key = e.key;
      if (key === "ArrowUp" && directionRef.current[1] != 1) {
        directionRef.current = [0, -1];
      } else if (key === "ArrowDown" && directionRef.current[1] != -1) {
        directionRef.current = [0, 1];
      } else if (key === "ArrowLeft" && directionRef.current[0] != 1) {
        directionRef.current = [-1, 0];
      } else if (key === "ArrowRight" && directionRef.current[0] != -1) {
        directionRef.current = [1, 0];
      }
    };

    window.addEventListener("keydown", handleDirection);

    return () => {
      clearInterval(intervalID);
      window.removeEventListener("keydown", handleDirection);
    };
  }, []);

  return (
    <div className="container">
      {GAMEGRID.map((row, yc) => {
        return row.map((cell, xc) => {
          return (
            <div
              key={`${xc}-${yc}`}
              className={`cell ${isSnakeBodyDiv(xc, yc) ? "snake" : ""}
                ${
                  foodRef.current[0] === xc && foodRef.current[1] === yc
                    ? "food"
                    : ""
                }
                `}></div>
          );
        });
      })}
    </div>
  );
};

export default SnakeGame;
