import React from "react";
import { useLocation, Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import data from "../../data.json";

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
            <a
                href={data.invite_link}
                className={pathname === "/add" ? styles.active : ""}
            >
                Add Viav
            </a>
            <a
                href="https://discord.gg/dd4pE7e"
                target="_blank"
                rel="noopener noreferrer"
            >
                Community
            </a>
            <div className={styles.separator} />
            <a
                href="https://patreon.com/brokenlamp"
                target="_blank"
                rel="noopener norefer"
            >
                Donate
            </a>
            <a
                href="https://github.com/BrokenLamp/viav"
                target="_blank"
                rel="noopener noreferrer"
            >
                GitHub
            </a>
        </div>
    );
};
