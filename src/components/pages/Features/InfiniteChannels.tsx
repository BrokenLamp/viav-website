import React from "react";
import styles from "./InfiniteChannels.module.scss";
import speaker from "./speaker.png";
import avatar from "./avatar.png";

interface ChannelProps {
    title: string;
    isVoice: boolean;
}

const Channel = (props: ChannelProps) => {
    const blob = props.isVoice ? (
        <img src={speaker} style={{ height: ".8em" }} alt="speaker" />
    ) : (
        "#"
    );
    return (
        <div className={"morph small " + styles.channel}>
            <span>{blob}</span>
            <span>{props.title}</span>
        </div>
    );
};

interface UserProps {
    title: string;
}

const User = (props: UserProps) => {
    return (
        <div className={styles.user}>
            <span>
                <img src={avatar} className="morph small" alt="avatar" />
            </span>
            <span>{props.title}</span>
        </div>
    );
};

export default () => {
    return (
        <div className={styles.infiniteChannels}>
            <Channel title="voice-viav-1" isVoice={false} />
            <Channel title="voice-viav-2" isVoice={false} />
            <div className={styles.hr} />
            <Channel title="Voice / 1" isVoice={true} />
            <User title="User A" />
            <Channel title="Voice / 2" isVoice={true} />
            <User title="User B" />
            <Channel title="Voice" isVoice={true} />
        </div>
    );
};
