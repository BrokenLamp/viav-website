import React from "react";
import { useLocation, Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const internalLinks = [
    { title: "Features", uri: "features" },
    { title: "Add Viav", uri: "add" },
    { title: "Roadmap", uri: "roadmap" }
];

export default () => {
    const pathname = useLocation().pathname;
    const split = pathname.split("/");
    const path = split.length >= 2 ? split[1] : "";
    return (
        <div className={styles.navbar}>
            <Link
                to="/"
                className={
                    styles.brand + " " + (path === "" ? styles.active : "")
                }
            >
                Viav
            </Link>
            {internalLinks.map(link => (
                <Link
                    to={`/${link.uri}`}
                    className={path === link.uri ? styles.active : ""}
                >
                    {link.title}
                </Link>
            ))}

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
