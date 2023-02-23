import React from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export const Division = ({ division }) => {
    return (
        <div className="cardContainer">
            <div div style={{ padding: "0 0vw 0 0vw", display: "block" }}>
                <EmojiEventsIcon
                    sx={{
                        color: "#4AD0EE",
                        backgroundColor: "#0A1332",
                        fontSize: "5vh",
                        borderRadius: "100%",
                        padding: "1vh",
                    }}
                />
            </div>

            <div className="cardElement">
                <h4 style={{ margin: 0, padding: 0 }}>Division</h4>
                <h3 style={{ margin: 0, padding: 0 }}>{division}</h3>
            </div>
        </div>
    );
};
