import './App.css';
import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouteList from "./common/RouteList";
import Nav from "./common/Nav";
import "bootstrap/dist/css/bootstrap.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className="container">
          <RouteList />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
