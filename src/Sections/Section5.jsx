import React, { useEffect, useLayoutEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const Section5 = () => {

  const handleClick = (linkUrl) => {
    // Open the specified webpage link in a new tab when carousel-content is clicked
    window.open(linkUrl, '_blank');
  };

  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };
    
      return (
        <section className="five">
          <div className="five-content" >
            <div className="five-socials" >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => handleClick('https://www.instagram.com/')}
              >
                <i className="fa-brands footer-icons fa-instagram"></i>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => handleClick('https://www.youtube.com/')}
              >
                <i className="fa-brands footer-icons fa-youtube"></i>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => handleClick('https://www.instagram.com/')}
              >
                <i className="fa-brands footer-icons fa-tiktok"></i>
              </motion.div>
            </div>
            <div className="legal" onClick={toggleOverlay}>
              <h1 className="legal-text" >Legal Note</h1>
            </div>
          </div>
          <AnimatePresence>
                {showOverlay && (
                    <motion.div
                        initial={{ y: "100vh" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100vh" }}
                        transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
                        className="overlay"
                    >
                        <div className="overlay-content">
                          <div className="legal-text-container" >
                            <h1 className="legal-description" >Elixir Mushroom Coffee Mix is a product of Elixir Enterprises LLC.</h1>
                            <h1 className="legal-description" >Registered Office: 123 Main Street, Anytown, USA</h1>
                            <h1 className="legal-description" >Contact Information: Email: info@elixir.com Phone: +1 (123) 456-7890</h1>
                            <h1 className="legal-description" >Managing Director: John Doe</h1>
                            <h1 className="legal-description" >Commercial Register: Registered in the State of Anytown, USA</h1>
                            <h1 className="legal-description" >Tax Identification Number (TIN): 123456789</h1>
                            <h1 className="legal-description" >Responsible for Content: John Doe</h1>
                            <h1 className="legal-description" >Disclaimer: The content of our website has been compiled with meticulous care and to the best of our knowledge. However, we cannot assume any liability for the up-to-dateness, completeness or accuracy of any of the pages. Our website contains links to external websites over which we have no control; therefore, we cannot accept any responsibility for their content. The providers or operators of the linked websites are always responsible for their content. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.</h1>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="close-button"
                            onClick={toggleOverlay}
                           >
                            <h1 className="button-text" >CLOSE</h1>
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
      );
    };