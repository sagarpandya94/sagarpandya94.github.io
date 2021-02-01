import React from "react";
import HomePage from "./pages/Homepage.jsx";
import Workexperience from "./pages/Workexperience";
import Academics from "./pages/Academics";
import Skillset from "./pages/Skillset";
import Particles from "react-particles-js";

import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div id="particles">
        <Particles
          params={{
            "particles": {
              "number": {
                "value": 80,
                "density": {
                  "enable": true,
                  "value_area": 700
                }
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                },
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 0.1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 10,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "bubble"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 140,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          }}
        />
      </div>
      <div className="text">
        <div className="nav-links margin-top-2-p font-size-16">
          <div>
            <NavLink className="text-golden" exact={true} to="/" activeStyle={{ color: "seagreen" }}>
              About me
            </NavLink>
          </div>

          <div>
            <NavLink className="text-golden" to="/work" activeStyle={{ color: "seagreen" }}>
              Work Experience
            </NavLink>
          </div>

          <div>
            <NavLink className="text-golden" to="/academics" activeStyle={{ color: "seagreen" }}>
              Academics
            </NavLink>
          </div>

          <div>
            <NavLink className="text-golden" to="/skillset" activeStyle={{ color: "seagreen" }}>
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
