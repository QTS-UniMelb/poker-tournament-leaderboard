import React from "react";

export const SponsorLogos = ({ sponsorLogos }) => {
    return (
        <div className="sponsorLogoImage">
            <h3 style={{ color: "darkorange", fontSize: "1.3rem" }}>
                Sponsored By
            </h3>
            {sponsorLogos.map((image, i) => (
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "center",
                    }}
                >
                    <img src={image} alt={`sponsor-logo-${i}`} />
                </div>
            ))}
        </div>
    );
};
