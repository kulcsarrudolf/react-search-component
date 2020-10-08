// import React from "react";
// import { HashRouter, Route, Link, Switch } from "react-router-dom";

// // import MyComponent from "./components/playing/MyComponent";

// import Home from "./components/home/Home";
// import Cars from "./components/cars/Cars";
// import SearchCar from "./components/search/SearchCar";
// import CarManagement from "./components/mangement/CarManagement";

// import "./Style.css";

// function App() {
//   return (
//     <>
//       <div className="container">
//         <h1>Application</h1>
//         <HashRouter>
//           <Switch>
//             <Route path="/" exact component={Home} />
//             <Route path="/cars" exact component={Cars} />
//             <Route path="/search" exact component={SearchCar} />
//             <Route path="/car-management" exact component={CarManagement} />
//           </Switch>
//         </HashRouter>
//       </div>
//     </>
//   );
// }

// export default App;

// app.js
import React from "react";
import { Link, Route, Switch } from "react-router-dom";

const About = () => <div>You are on the about page</div>;
const Home = () => <div>You are home</div>;
const NoMatch = () => <div>No match</div>;

// export const LocationDisplay = () => {
//   const location = useLocation();

//   return <div data-testid="location-display">{location.pathname}</div>;
// };

export const App = () => (
  <div>
    <Link to="/">Home</Link>

    <Link to="/about">About</Link>

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route>
        <NoMatch />
      </Route>
    </Switch>

    {/* <LocationDisplay /> */}
  </div>
);
