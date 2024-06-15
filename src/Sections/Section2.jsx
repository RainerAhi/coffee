import React, { useEffect, useRef, useState, Suspense } from "react";
import Model from '../Model'
import { motion } from "framer-motion";
import { Canvas } from '@react-three/fiber'
import { Environment, Float } from '@react-three/drei'

export const Section2 = () => {
    const [isVisibleOne, setIsVisibleOne] = useState(false);
    const [isVisibleTwo, setIsVisibleTwo] = useState(false);
    const [isVisibleThree, setIsVisibleThree] = useState(false);
    const [isVisibleFour, setIsVisibleFour] = useState(false);
    const [isVisibleFive, setIsVisibleFive] = useState(false);

    const [rotate, setRotate] = useState(false);
    const [scaleCenter, setScaleCenter] = useState(false);

    const oneRef = useRef(null);
    const twoRef = useRef(null);
    const threeRef = useRef(null);
    const fourRef = useRef(null);
    const fiveRef = useRef(null);

    useEffect(() => {
        const observerOne = new IntersectionObserver(([entry]) => {
            setIsVisibleOne(entry.isIntersecting);
        });

        const observerTwo = new IntersectionObserver(([entry]) => {
            setIsVisibleTwo(entry.isIntersecting);
        });

        const observerThree = new IntersectionObserver(([entry]) => {
            setIsVisibleThree(entry.isIntersecting);
        });

        const observerFour = new IntersectionObserver(([entry]) => {
            setIsVisibleFour(entry.isIntersecting);
        });

        const observerFive = new IntersectionObserver(([entry]) => {
            setIsVisibleFive(entry.isIntersecting);
        });

        observerOne.observe(oneRef.current);
        observerTwo.observe(twoRef.current);
        observerThree.observe(threeRef.current);
        observerFour.observe(fourRef.current);
        observerFive.observe(fiveRef.current);

        return () => {
            observerOne.unobserve(oneRef.current);
            observerTwo.unobserve(twoRef.current);
            observerThree.unobserve(threeRef.current);
            observerFour.unobserve(fourRef.current);
            observerFive.unobserve(fiveRef.current);
        };
    }, []);

    const audioRef = useRef(null);

    const handleRotate = () => {
        setRotate(true);
        setScaleCenter(true);
        setTimeout(() => {
            setScaleCenter(false);
        }, 400); // Reset the scale state after 2 seconds
        audioRef.current.play();
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
        <section className="section two">
            <audio ref={audioRef} src="/opening2.mp3" />
            <div className="mobile-scroll"/>
            <div className="experience">
                <Canvas shadows camera={{ position: [0, 0, 10], fov: 35 }} >
                    <Suspense>
                        <Float speed={2} fallback >
                            <Model rotate={rotate} setRotate={setRotate} />
                        </Float>
                        <Environment preset='warehouse' />
                    </Suspense>
                </Canvas>
            </div>

            <div className="two-left">
                <div className={`info-main ${isVisibleOne ? 'visible' : ''}`} ref={oneRef}>
                    <p className="description-two black">COFFEE FROM MUSHROOMS</p>
                    <h1 className="two-big-headline">ELIXIR</h1>
                    <p className="description-two white">330 ML</p>
                </div>
                <div className={`info-ingredients ${isVisibleTwo ? 'visible' : ''}`} ref={twoRef}>
                    <p className="two-medium-headline black">TIRED FROM COFFEE?</p>
                    <h1 className="description-two">We combined our well-loved coffee with mushrooms. It creates a great pairing and the perfect replacement for your daily coffee.</h1>
                </div>
            </div>

            <motion.div
                className={`two-center ${isVisibleFive ? 'visible' : ''}`}
                ref={fiveRef}
                animate={{ scale: scaleCenter ? 1.1 : 1 }}
                transition={{ type: "spring", duration: 2 }}
            >
            </motion.div>

            {isMobile && (
                    <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="two-button"
                    onClick={handleRotate}
                >
                    <h1 className="button-text">ROTATE</h1>
                </motion.button>
                )}

            <div className="two-right">
                <div className={`drink-introduction ${isVisibleThree ? 'visible' : ''}`} ref={threeRef}>
                    <h1 className="two-medium-headline black">ENJOY A CUP THAT OFFERS A NATURAL SOLUTION FOR STEADY ENERGY AND CLEAR FOCUS</h1>
                    <p className="description">Crafted with care, our blend features 90% USDA Organic Arabica Coffee, 5% USDA Organic Lion's Mane Mushroom Powder, and 5% USDA Organic Chaga Mushroom Powder. Enjoy a cup that nourishes both, your body and mind.</p>
                </div>
                <div className={`rotation-button ${isVisibleFour ? 'visible' : ''}`} ref={fourRef}>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="two-button"
                        onClick={handleRotate}
                    >
                        <h1 className="button-text">ROTATE</h1>
                    </motion.button>
                </div>
            </div>
        </section>
    );
};
