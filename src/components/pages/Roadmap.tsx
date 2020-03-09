import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import styles from "./Roadmap.module.scss";
import Issue from "../../models/Issue";

export default () => {
    const [data, setData] = useState<any | undefined>(undefined);
    useEffect(() => {
        fetch("https://api.github.com/repos/BrokenLamp/viav/issues?milestone=*")
            .then(r => r.json())
            .then((data: Issue[]) => {
                const milestones = data
                    .filter(issue => !!issue.milestone)
                    .map(issue => {
                        const jsx = (
                            <a
                                href={issue.html_url}
                                className={styles.issue + " morph small btn"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {issue.assignees?.length ? (
                                    <img
                                        alt="assignee avatar"
                                        className="morph small"
                                        src={issue.assignees[0].avatar_url}
                                    />
                                ) : null}
                                <span>{issue.title}</span>
                            </a>
                        );
                        return [issue, jsx] as [Issue, JSX.Element];
                    })
                    .reduce(
                        (
                            rv: { [index: string]: JSX.Element[] },
                            [issue, jsx]
                        ) => {
                            (rv[issue.milestone.title] =
                                rv[issue.milestone.title] || []).push(jsx);
                            return rv;
                        },
                        {}
                    );
                return Object.entries(milestones)
                    .sort(([a], [b]) => (a < b ? -1 : 1))
                    .map(([title, list]) => {
                        return (
                            <div
                                className={
                                    styles.milestone + " morph small inset"
                                }
                            >
                                <h3 className="morph small">{title}</h3>
                                <div className={styles.issue_grid}>{list}</div>
                            </div>
                        );
                    });
            })
            .then(data => setData(data))
            .catch(() => setData(() => <div>Failed to load roadmap</div>));
    }, []);
    return (
        <div className={styles.roadmap}>
            <Helmet>
                <title>Viav - Roadmap</title>
            </Helmet>
            {data || "Loading"}
        </div>
    );
};
