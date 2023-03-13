import React from "react";
import ScheduleIcon from "@mui/icons-material/Schedule";

import { useEffect, useState } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;

export const Timer = ({
    deadline,
    handleReset,
    handleRaiseBlinds,
    timerOn,
    handleChangeTimerOn,
}) => {
    const [time, setTime] = useState(deadline - Date.now());

    useEffect(() => {
        const handleTimerUpdate = (timer) => {
            if (!timer) return;

            const newDeadline = deadline - Date.now();

            if (newDeadline < 0) {
                handleRaiseBlinds();
                handleReset();
            } else {
                setTime(newDeadline);
            }
        };
        const interval = setInterval(() => {
            handleTimerUpdate(timerOn);
        }, 1000);
        return () => clearInterval(interval);
        
        // eslint-disable-next-line
    }, [deadline, timerOn]);

    return (
        <div className="cardContainer">
            <div div style={{ padding: "0 0vw 0 0vw", display: "block" }}>
                <ScheduleIcon
                    sx={{
                        color: "#4AD0EE",
                        backgroundColor: "#0A1332",
                        fontSize: "5vh",
                        borderRadius: "100%",
                        padding: "1vh",
                    }}
                    onDoubleClick={handleReset}
                />
            </div>

            <div className="cardElement" onClick={handleChangeTimerOn}>
                <h4 style={{ margin: 0, padding: 0 }}>Remaining Time</h4>
                <h3 style={{ margin: 0, padding: 0 }}>
                    {Math.floor(time / MINUTE) % 60}:
                    {("0" + (Math.floor(time / SECOND) % 60)).slice(-2)}
                </h3>
            </div>
        </div>
    );
};
