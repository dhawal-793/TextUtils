import React, { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Dhawal',
//   lastName: 'Vijayvargiya'
// };

function App() {
  const [mode, setMode] = useState("light");
  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(62,68,74)";
      document.body.style.color = "rgb(255,255,255)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "rgb(255,255,255)";
      document.body.style.color = "rgb(0,0,0)";
    }
  };
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} title="Text Utils" />
      <Textbox mode={mode}/>
    </>
  );
}

export default App;
