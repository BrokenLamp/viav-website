import React from "react";
import styles from "./Commands.module.scss";

interface CommandProps {
    name: string;
    children: string;
}

const Command = (props: CommandProps) => {
    return (
        <div className={styles.command}>
            <span className="morph tiny">
                -viav <span>{props.name}</span>
            </span>
            <span>{props.children}</span>
        </div>
    );
};

export default () => {
    return (
        <div className={styles.commands}>
            <Command name="lock / unlock">
                Locks the channel to non-admins
            </Command>
            <Command name="hide / unhide">
                Hides the channel from non-admins
            </Command>
            <Command name="nsfw / unnsfw">
                Sets the text channel to nsfw
            </Command>
            <Command name="game / ungame">
                Sets the name to the owner's game
            </Command>
        </div>
    );
};
