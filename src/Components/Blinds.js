import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export const Blinds = ({ blinds, handleRaiseBlinds }) => {
    return (
        <div className="cardContainer" onDoubleClick={handleRaiseBlinds}>
            <div div style={{ padding: "0 0vw 0 0vw", display: "block" }}>
                <AttachMoneyIcon
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
                <h4 style={{ margin: 0, padding: 0 }}>Blinds</h4>
                <h3 style={{ margin: 0, padding: 0 }}>{blinds}</h3>
            </div>
        </div>
    );
};
