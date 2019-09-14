import React from "react";
import "./App.css";
import PermanentDrawerLeft from "./components/Sidebar";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <Register />
      {/* <PermanentDrawerLeft /> */}
    </div>
  );
}

export default App;
