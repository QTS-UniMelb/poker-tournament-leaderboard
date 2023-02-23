import "./App.css";
import React from "react";
import config from "./config/config.json";

import { LeaderBoardPage } from "./Pages/LeaderBoardPage";

function App() {
    if (localStorage.getItem("deadline") === null) {
        localStorage.setItem("deadline", Date.now() + 30 * 60 * 1000);
    }

    if (localStorage.getItem("blindLevel") === null) {
        localStorage.setItem("blindLevel", 0);
    }

    const [deadline, setDeadline] = React.useState(
        localStorage.getItem("deadline")
    );

    const [blindLevel, setBlindLevel] = React.useState(
        parseInt(localStorage.getItem("blindLevel"))
    );

    const handleReset = () => {
        const isObject = function (a) {
            console.log(a);
            console.log(!!a && a.constructor === Object);
            return !!a && a.constructor === Object;
        };

        const getBlinds = () => {
            console.log(blindLevel);
            return isObject(config.blinds[blindLevel]) &&
                config.blinds[blindLevel].duration
                ? config.blinds[blindLevel].duration
                : config.blind_duration;
        };

        const blindDuration = getBlinds();
        const newDeadline = Date.now() + blindDuration  * 1000;
        localStorage.setItem("deadline", newDeadline);
        setDeadline(newDeadline);
    };

    const handleRaiseBlinds = () => {
        console.log("hello");
        if (blindLevel + 1 >= config.blinds.length) {
            setBlindLevel(0);
            localStorage.setItem("blindLevel", 0);
        } else {
            setBlindLevel(blindLevel + 1);
            localStorage.setItem("blindLevel", blindLevel + 1);
        }
    };

    return (
        <div className="App">
            <LeaderBoardPage
                deadline={deadline}
                handleReset={handleReset}
                handleRaiseBlinds={handleRaiseBlinds}
                blinds={config.blinds[blindLevel].amount}
            />
        </div>
    );
}

export default App;
