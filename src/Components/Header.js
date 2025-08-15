import React from "react";

export const Header = ({ logo, circularLogo, title, subtitle }) => {
    return (
        <div style={{ textAlign: "center" }}>
            {/* REMOVED QTS LOGO TEMPORARILY */}
            {/* <img
                src={logo}
                className="logo"
                style={{ borderRadius: circularLogo ? "100vw" : 0 }}
                alt="logo"
            /> */}
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    );
};
