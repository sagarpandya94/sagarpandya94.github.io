import React from "react";
import HomePage from "./pages/Homepage.jsx";
import Workexperience from "./pages/Workexperience";
import Academics from "./pages/Academics";
import Skillset from "./pages/Skillset";

import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="text">
        <div className="nav-links margin-top-2-p font-size-16">
          <div>
            <NavLink className="text-golden" exact={true} to="/" activeStyle={{ color: "white" }}>
              About me
            </NavLink>
          </div>

          <div>
            <NavLink className="text-golden" to="/work" activeStyle={{ color: "white" }}>
              Work Experience
            </NavLink>
          </div>

          <div>
            <NavLink className="text-golden" to="/academics" activeStyle={{ color: "white" }}>
              Academics
            </NavLink>
          </div>

          <div>
            <NavLink className="text-golden" to="/skillset" activeStyle={{ color: "white" }}>
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
