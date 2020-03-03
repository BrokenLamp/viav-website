import React from "react";
import styles from "./Navbar.module.scss";

export default () => {
    return (
        <div className={styles.navbar}>
            <a href="/" className={styles.brand}>
                Viav
            </a>
            <a href="/features">Features</a>
            <a href="/add" className={styles.active}>
                Add Viav
            </a>
            <a href="/community">Community</a>
            <div className={styles.separator} />
            <a href="https://patreon.com/viav">Donate</a>
            <a href="https://github.com/BrokenLamp/viav">GitHub</a>
        </div>
    );
};
