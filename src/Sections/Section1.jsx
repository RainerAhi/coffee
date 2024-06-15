import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Section1 = () => {
    const [hideScrollText, setHideScrollText] = useState(false);
    const [navScrolled, setNavScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 10;
            if (window.scrollY > scrollThreshold) {
                setHideScrollText(true);
                setNavScrolled(true);
            } else {
                setHideScrollText(false);
                setNavScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const handleClick = (linkUrl) => {
        // Open the specified webpage link in a new tab when carousel-content is clicked
        window.open(linkUrl, '_blank');
      };

      const [isMobile, setIsMobile] = useState(false);

      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };
    
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <section className="one">
            <div className="mobile-scroll"/>
            <div className={`navigation ${navScrolled ? "scrolled" : ""}`}>
                {isMobile && (
                <motion.div
                    className="buy"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <i className="fa-solid fa-cart-shopping"></i>
                </motion.div>
                )}
                <div className="navigation-right">
                    <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        onClick={() => handleClick('https://www.instagram.com/dialedweb')}
                    >
                        <i className="fa-brands navigation-icons fa-instagram"></i>
                    </motion.div>
                    <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        onClick={() => handleClick('https://www.youtube.com/channel/UC8-bljvEXqCTOF1-xdwFYtg')}
                    >
                        <i className="fa-brands navigation-icons fa-youtube"></i>
                    </motion.div>
                    <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        onClick={() => handleClick('https://www.instagram.com/dialedweb')}
                    >
                        <i className="fa-brands navigation-icons fa-tiktok"></i>
                    </motion.div>
                </div>
                <img src="./logohere2.png" className="navigation-logo" />
                <div className="navigation-left">
                    <motion.div
                        className="buy buy-desktop"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <i className="fa-solid fa-cart-shopping"></i>
                    </motion.div>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="navigation-button" 
                    >
                        <h1 className="button-text" >CONTACT</h1>
                    </motion.button>
                </div>
            </div>
            <div className="one-content">
                <div className="one-text-contents">
                    <h1 className="title">FUEL YOUR BODY <br /> ENERGIZE YOUR LIFE</h1>
                    <div className="dottedLine" style={{ opacity: hideScrollText ? 0 : 1, transition: "opacity 0.3s ease-in-out", pointerEvents: hideScrollText ? "none" : "auto", }}>
                        <svg viewBox="0 0 800 1">
                            <line className="cls-1" y1=".5" x2="800" y2=".5" />
                        </svg>
                    </div>
                    <h1 style={{ opacity: hideScrollText ? 0 : 1, transition: "opacity 0.3s ease-in-out", pointerEvents: hideScrollText ? "none" : "auto", }} className="title-description">
                        COFFEE MADE BETTER
                    </h1>
                </div>
                <div className="scroll-container">
                    <div
                        className="scroll"
                        style={{
                            opacity: hideScrollText ? 0 : 1,
                            transition: "opacity 0.3s ease-in-out",
                            pointerEvents: hideScrollText ? "none" : "auto",
                        }}
                    >
                        <h1 className="scroll-text">SCROLL <br /> TO EXPLORE</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

