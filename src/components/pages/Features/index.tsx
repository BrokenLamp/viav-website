import React from "react";
import {
    Switch,
    Link,
    Route,
    useRouteMatch,
    useLocation
} from "react-router-dom";
import Helmet from "react-helmet";
import styles from "./Features.module.scss";

import Commands from "./Commands";
import InfiniteChannels from "./InfiniteChannels";
// import ControlDeck from "./ControlDeck";

const tabs = [
    {
        title: "Voice Channels",
        uri: "",
        component: InfiniteChannels
    },
    {
        title: "Control Deck",
        uri: "/control-deck",
        component: InfiniteChannels
    },
    {
        title: "Commands",
        uri: "/commands",
        component: Commands
    }
];

export default () => {
    const match = useRouteMatch();
    const pathname = useLocation().pathname;
    return (
        <div className={styles.features}>
            <Helmet>
                <title>Viav - Features</title>
            </Helmet>
            <div className={styles.tabs}>
                {tabs.map(tab => (
                    <Link
                        to={`${match.path}${tab.uri}`}
                        className={
                            pathname === `${match.path}${tab.uri}`
                                ? styles.active
                                : ""
                        }
                    >
                        {tab.title}
                    </Link>
                ))}
            </div>
            <div className={styles.body}>
                <Switch>
                    {tabs.map(tab => (
                        <Route
                            exact
                            path={`${match.path}${tab.uri}`}
                            component={tab.component}
                        />
                    ))}
                </Switch>
            </div>
            <Link to="/add" className="morph small btn">
                Add Viav
            </Link>
        </div>
    );
};
