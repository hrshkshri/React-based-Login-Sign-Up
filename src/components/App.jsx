import React from "react";
import ReactDOM from "react-dom";
import Register from "./Register";

let userIsRegister = true;

function App() {
  return (
    <div>
      <Register userIsRegister={userIsRegister} />
    </div>
  );
}

export default App;
