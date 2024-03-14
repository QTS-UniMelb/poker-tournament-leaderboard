import "./App.css";
import React from "react";
import config from "./config/config.json";

import { LeaderBoardPage } from "./Pages/LeaderBoardPage";
import { SponsorPostPage } from "./Pages/SponsorPostPage";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import FullscreenIcon from "@mui/icons-material/Fullscreen";
import { Final } from "./Pages/Final";

function App() {
    if (localStorage.getItem("deadline") === null) {
        localStorage.setItem("deadline", Date.now() + 30 * 60 * 1000);
    }

    if (
        localStorage.getItem("blindLevel") === null ||
        localStorage.getItem("blindLevel") >= config.blinds.length
    ) {
        localStorage.setItem("blindLevel", 0);
    }

    const [deadline, setDeadline] = React.useState(
        localStorage.getItem("deadline")
    );

    const [blindLevel, setBlindLevel] = React.useState(
        parseInt(localStorage.getItem("blindLevel"))
    );

    const [displaySponsor, setDisplaySponsor] = React.useState(false);
    const [sponsor, setSponsor] = React.useState(0);
    const [timerOn, setTimerOn] = React.useState(true);
    const handle = useFullScreenHandle();

    const handleReset = () => {
        const isObject = function (a) {
            return !!a && a.constructor === Object;
        };

        const getBlinds = () => {
            return isObject(config.blinds[blindLevel]) &&
                config.blinds[blindLevel].duration
                ? config.blinds[blindLevel].duration
                : config.blind_duration;
        };

        const blindDuration = getBlinds();
        const newDeadline = Date.now() + blindDuration * 60 * 1000;
        localStorage.setItem("deadline", newDeadline);
        setDeadline(newDeadline);
    };

    const handleRaiseBlinds = () => {
        playSound();
        if (blindLevel + 1 >= config.blinds.length) {
            setBlindLevel(0);
            localStorage.setItem("blindLevel", 0);
        } else {
            setBlindLevel(blindLevel + 1);
            localStorage.setItem("blindLevel", blindLevel + 1);
        }
    };

    const handleShowSponsor = () => {
        if (!config.sponsor_posts) return;
        if (config.sponsor_posts.length < 1) return;

        setDisplaySponsor(true);
    };

    const handlehideSponsor = () => {
        setDisplaySponsor(false);

        if (sponsor + 1 >= config.sponsor_posts.length) {
            setSponsor(0);
        } else {
            setSponsor(sponsor + 1);
        }
    };

    const handleChangeTimerOn = () => {
        if (timerOn) {
            localStorage.setItem("storedTime", deadline - Date.now());
            setTimerOn(false);
        } else {
            setDeadline(
                Date.now() + parseInt(localStorage.getItem("storedTime"))
            );
            setTimerOn(true);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "ArrowDown") {
            const newDeadline = deadline - 60 * 1000;
            localStorage.setItem("deadline", newDeadline);
            setDeadline(newDeadline);
        }
        if (event.key === "ArrowUp") {
            const newDeadline = deadline + 60 * 1000;
            localStorage.setItem("deadline", newDeadline);
            setDeadline(newDeadline);
        }
    };

    React.useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
        // eslint-disable-next-line
    }, [deadline]);

    const playSound = () => {
        if (!config.sound_on) return;
        new Audio(config.sound_file).play();
    };

    return (
        <div className="App" onKeyDown={handleKeyDown}>
            <FullscreenIcon
                onClick={handle.enter}
                className="fullScreenIcon"
                fontSize="large"
            />
            <FullScreen handle={handle}>
                {config.final_mode ? (
                    <Final
                        deadline={deadline}
                        handleReset={handleReset}
                        handleRaiseBlinds={handleRaiseBlinds}
                        blinds={config.blinds[blindLevel].amount}
                        handleShowSponsor={handleShowSponsor}
                        timerOn={+timerOn}
                        handleChangeTimerOn={handleChangeTimerOn}
                    />
                ) : displaySponsor ? (
                    <SponsorPostPage
                        image={config.sponsor_posts[sponsor]}
                        handlehideSponsor={handlehideSponsor}
                        time={config.sponsor_post_time * 1000}
                        text={config.sponsor_post_text[sponsor]}
                    />
                ) : (
                    <LeaderBoardPage
                        deadline={deadline}
                        handleReset={handleReset}
                        handleRaiseBlinds={handleRaiseBlinds}
                        blinds={config.blinds[blindLevel].amount}
                        handleShowSponsor={handleShowSponsor}
                        timerOn={+timerOn}
                        handleChangeTimerOn={handleChangeTimerOn}
                    />
                )}
            </FullScreen>
        </div>
    );
}

export default App;
