import React from "react";
import HomePage from "./pages/Homepage.jsx";
import Workexperience from "./pages/Workexperience";
import Academics from "./pages/Academics";
import Skillset from "./pages/Skillset";

import "./App.css";
import {
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <div className="nav-links margin-top-2-p font-size-16">
          <div>
            <NavLink to="/" >
              About me
            </NavLink>
          </div>
          
          <div>
            <NavLink to="/work" activeStyle={{ color: "red" }}>
              Work Experience
            </NavLink>
          </div>

          <div>
            <NavLink to="/academics" activeStyle={{ color: "red" }}>
              Academics
            </NavLink>
          </div>

          <div>
            <NavLink to="/skillset" activeStyle={{ color: "red" }}>
              Skillset
            </NavLink>
          </div>
        </div>
        <Switch>
          <Route exact path="/work" component={Workexperience} />
          <Route exact path="/academics" component={Academics} />
          <Route exact path="/skillset" component={Skillset} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
