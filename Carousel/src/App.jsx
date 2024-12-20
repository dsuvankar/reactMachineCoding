import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ImgCarousal from "./ImgCarousal";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ImgCarousal />
    </div>
  );
}

export default App;
