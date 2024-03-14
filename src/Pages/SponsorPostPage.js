import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export const SponsorPostPage = ({ image, handlehideSponsor, time, text }) => {
    React.useEffect(() => {
        const interval = setInterval(handlehideSponsor, time);
        return () => clearInterval(interval);

        // eslint-disable-next-line
    }, []);

    return (
        <AnimatePresence>
            <motion.div
                className="sponsorPage"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeIn", duration: 1 }}
                exit={{
                    opacity: 0,
                    transition: {
                        ease: "easeIn",
                        duration: 1,
                    },
                }}
            >
                <div className="sponsorPageItems">
                    <h1>{text}</h1>
                    <img
                        src={image}
                        className="sponsorPostImage"
                        alt="sponsorImage"
                    />
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
