import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import logo from "../logo.png";
import data from "../data.json";

export default () => {
    return (
        <div className={styles.home}>
            <div className="morph inset App-logo-container">
                <img src={logo} className="App-logo" />
            </div>
            <h2>Discord Infinite Voice Channels</h2>
            <p>
                Viav is an open source bot to change the way we use Discord
                <br />
                <br />
                <br />
            </p>
            <div className={styles.buttons}>
                <a
                    className="App-link morph small glowy-link hoverable"
                    href={data.invite_link}
                >
                    <strong>Add Viav</strong>
                </a>
                <Link
                    className="App-link morph small glowy-link hoverable"
                    to="/features"
                >
                    <strong>Features</strong>
                </Link>
            </div>
        </div>
    );
};
