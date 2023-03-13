import React, { useState } from "react";
import { Blinds } from "../Components/Blinds";
import { Division } from "../Components/Division";
import { Header } from "../Components/Header";
import { Leaderboard } from "../Components/Leaderboard";
import { SponsorLogos } from "../Components/SponsorLogos";
import { Timer } from "../Components/Timer";

import config from "../config/config.json";

export const LeaderBoardPage = ({
    deadline,
    handleReset,
    handleRaiseBlinds,
    blinds,
    handleShowSponsor,
    timerOn,
    handleChangeTimerOn,
}) => {
    const [currentFile, setCurrentFile] = useState(0);

    const handleNextFile = () => {
        if (currentFile + 1 === config.leaderboards.length) {
            setCurrentFile(0);
            handleShowSponsor();
        } else {
            setCurrentFile(currentFile + 1);
        }
    };

    return (
        <div>
            <div className="header">
                <Header
                    logo={config.logo}
                    circularLogo={config.circular_logo ? 1 : undefined}
                />
            </div>
            <div className="gridContainer">
                <div className="leaderboard">
                    <Leaderboard
                        filename={config.leaderboards[currentFile].file}
                        participants_per_page={config.participants_per_page}
                        handleNextFile={handleNextFile}
                    />
                </div>
                <div className="divison">
                    <Division
                        division={config.leaderboards[currentFile].division}
                    />
                </div>
                <div className="blinds">
                    <Blinds
                        handleRaiseBlinds={handleRaiseBlinds}
                        blinds={blinds}
                    />
                </div>
                <div className="sponsorLogos">
                    <SponsorLogos sponsorLogos={config.sponsor_logos} />
                </div>
                <div className="timer">
                    <Timer
                        deadline={deadline}
                        handleReset={handleReset}
                        handleRaiseBlinds={handleRaiseBlinds}
                        timerOn={timerOn}
                        handleChangeTimerOn={handleChangeTimerOn}
                    />
                </div>
            </div>
        </div>
    );
};
