import React from "react";

export const Header = ({ logo, circularLogo }) => {
    return (
        <div style={{ textAlign: "center" }}>
            <img
                src={logo}
                className="logo"
                style={{ borderRadius: circularLogo ? "100vw" : 0 }}
                alt="logo"
            />
            <h1>QTS x CITADEL x IMC Poker Tournament</h1>
            <h2>Round 6</h2>
        </div>
    );
};
