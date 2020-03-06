import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import logo from "../logo.png";
import data from "../data.json";

export default () => {
    return (
        <div className={styles.home}>
            <div
                className={
                    styles.logoContainer + " morph inset App-logo-container"
                }
            >
                <img src={logo} className={styles.logo} />
            </div>
            <h2>Discord Infinite Voice Channels</h2>
            <p>
                Viav is an open source bot to change the way we use Discord
                <br />
                <br />
                <br />
            </p>
            <div className={styles.buttons}>
                <Link className="morph small btn hoverable" to="/add">
                    Add Viav
                </Link>
                <Link className="morph small btn hoverable" to="/features">
                    Features
                </Link>
            </div>
        </div>
    );
};
