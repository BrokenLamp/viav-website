import React from "react";
import { useLocation, Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

export default () => {
    const pathname = useLocation().pathname;

    return (
        <div className={styles.navbar}>
            <Link
                to="/"
                className={
                    styles.brand + " " + (pathname === "/" ? styles.active : "")
                }
            >
                Viav
            </Link>
            <Link
                to="/features"
                className={pathname === "/features" ? styles.active : ""}
            >
                Features
            </Link>
            <Link
                to="/add"
                className={pathname === "/add" ? styles.active : ""}
            >
                Add Viav
            </Link>
            <Link
                to="/roadmap"
                className={
                    styles.roadmap +
                    " " +
                    (pathname === "/roadmap" ? styles.active : "")
                }
            >
                Roadmap
            </Link>

            <div className={styles.separator} />

            <a
                href="https://discord.gg/dd4pE7e"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.right}
            >
                Community
            </a>
            <a
                href="https://patreon.com/brokenlamp"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.right}
            >
                Donate
            </a>
            <a
                href="https://github.com/BrokenLamp/viav"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.right}
            >
                GitHub
            </a>
        </div>
    );
};
