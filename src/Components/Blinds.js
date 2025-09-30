import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { motion } from "framer-motion";

export const Blinds = ({ blinds, handleRaiseBlinds, nextBlinds }) => {
    return (
        <div className="cardContainer" onDoubleClick={handleRaiseBlinds}>
            <div style={{ padding: "0 0vw 0 0vw", display: "block" }}>
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
                <motion.h3
                    style={{ margin: 0, padding: 0 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: "easeIn",
                        duration: 1,
                    }}
                    key={blinds}
                >
                    {blinds}
                </motion.h3>

                {nextBlinds && (
                    <h4
                        style={{
                            margin: "8px 0 0 0",
                            padding: 0,
                            opacity: 0.6,
                        }}
                    >
                        Next: {nextBlinds}
                    </h4>
                )}
            </div>
        </div>
    );
};