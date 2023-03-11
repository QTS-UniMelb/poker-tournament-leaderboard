import React from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { motion } from "framer-motion";

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
                <motion.h3
                    style={{ margin: 0, padding: 0 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: "easeIn",
                        duration: 1,
                    }}
                    key={division}
                >
                    {division}
                </motion.h3>
            </div>
        </div>
    );
};
