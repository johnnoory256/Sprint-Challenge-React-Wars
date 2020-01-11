import React from "react";
import WarsList from "./components/WarsList";
import "./App.css";

  const App = () => {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <WarsList />
      </div>
    );
  }

  export default App;