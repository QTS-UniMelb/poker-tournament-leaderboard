import React from "react";
import { Blinds } from "../Components/Blinds";
import { Header } from "../Components/Header";
import { Timer } from "../Components/Timer";
import { SponsorLogos } from "../Components/SponsorLogos";

import config from "../config/config.json";

export const Final = ({
    deadline,
    handleReset,
    handleRaiseBlinds,
    blinds,
    timerOn,
    handleChangeTimerOn,
}) => {
    return (
        <div>
            <div className="header">
                <Header
                    logo={config.logo}
                    circularLogo={config.circular_logo ? 1 : undefined}
                    title={config.title}
                    subtitle={config.subtitle}
                />
            </div>
            <div className="gridContainerFinal">
                <div className="blinds">
                    <Blinds
                        handleRaiseBlinds={handleRaiseBlinds}
                        blinds={blinds}
                    />
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
                <div className="sponsorLogos">
                    <SponsorLogos sponsorLogos={config.sponsor_logos} />
                </div>
            </div>
        </div>
    );
};
