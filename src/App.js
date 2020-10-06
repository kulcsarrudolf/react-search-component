import React from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";

// import MyComponent from "./components/playing/MyComponent";

import Home from "./components/home/Home";
import Cars from "./components/cars/Cars";
import SearchCar from "./components/search/SearchCar";
import CarManagement from "./components/mangement/CarManagement";

import "./Style.css";

function App() {
  return (
    <>
      <div className="container">
        <HashRouter>
          <Route path="/" exact component={Home} />
          <Route path="/cars" exact component={Cars} />
          <Route path="/search" exact component={SearchCar} />
          <Route path="/car-management" exact component={CarManagement} />
        </HashRouter>
      </div>
    </>
  );
}

export default App;
