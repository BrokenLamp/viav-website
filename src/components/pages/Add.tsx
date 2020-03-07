import React from "react";
import styles from "./Add.module.scss";
import data from "../../data.json";

export default () => {
    return (
        <div className={styles.add}>
            <h3>The magic begins instantly. No configuration. No BS.</h3>
            <br />
            <br />
            <br />
            <br />
            <a
                href={data.invite_link}
                className="morph small btn"
                target="_blank"
                rel="noopener noreferrer"
            >
                Add to Discord
            </a>
        </div>
    );
};
