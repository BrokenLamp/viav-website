import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Helmet from "react-helmet";
import "./App.css";
import Navbar from "./components/layout/Navbar";

import Add from "./components/pages/Add";
import Features from "./components/pages/Features/";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Roadmap from "./components/pages/Roadmap";

function App() {
    return (
        <Router>
            <Helmet>
                <title>Viav - Automatic Voice Channels</title>
            </Helmet>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/add" component={Add} />
                    <Route path="/features" component={Features} />
                    <Route path="/roadmap" component={Roadmap} />
                    <Route path="*" component={NotFound} />
                </Switch>
                <div className="App-made-with-heart">
                    Made with
                    <span
                        className="App-made-with-heart__heart"
                        role="img"
                        aria-label="heart"
                    >
                        {" ♥ "}
                    </span>
                    by Broken Lamp
                </div>
            </div>
        </Router>
    );
}

export default App;
