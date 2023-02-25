import React from "react";

export const SponsorPostPage = ({ image, handlehideSponsor, time }) => {
    React.useEffect(() => {
        const interval = setInterval(handlehideSponsor, time);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="sponsorPage">
            <img src={image} className="sponsorPostImage" />
        </div>
    );
};
