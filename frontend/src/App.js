import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header class="header">
        <div class="logo-box">
          <img alt="Logo" class="logo" />
        </div>
        <div class="text-box">
          <h1 class="heading-primary">
            <span class="heading-primary-main">Produce Tracker</span>
            <span class="heading-primary-sub">Secure Storage</span>
          </h1>
          <a href="#" class="btn btn-white">
            Sign In
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
