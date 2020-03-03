import React from "react";
import logo from "./logo.png";
import "./App.css";
import Navbar from "./components/layout/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <header className="App-header">
                <div className="morph inset App-logo-container">
                    <img src={logo} className="App-logo" />
                </div>
                <h2>The Ultimate Voice Channel Upgrade</h2>
                <p>
                    Viav is an open source bot aimed at changing the way we use
                    Discord.
                    <br />
                    <br />
                    <br />
                </p>
                <a
                    className="App-link morph small glowy-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <strong>Add Viav</strong>
                </a>
            </header>
        </div>
    );
}

export default App;
