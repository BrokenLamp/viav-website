import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";

import Features from "./pages/Features";
import Home from "./pages/Home";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/features" component={Features} />
                </Switch>
                <div className="App-made-with-heart">
                    Made with
                    <span className="App-made-with-heart__heart"> ♥️ </span>
                    by Broken Lamp
                </div>
            </div>
        </Router>
    );
}

export default App;
