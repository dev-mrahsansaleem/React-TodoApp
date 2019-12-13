import React from "react";

function App() {
  function clicked() {
    const varriable = document.getElementById("myButton");
    varriable.style.color = "red";
  }
  return (
    <>
      <button id="myButton" onMouseOver={clicked}>
        press me to alert
      </button>
    </>
  );
}
export default App;
