import { useState, useRef, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { View, Float, OrbitControls, Environment } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';

export const Section4 = () => {

  const [isVisibleOne, setIsVisibleOne] = useState(false);
  const [isVisibleTwo, setIsVisibleTwo] = useState(false);
  const [isVisibleThree, setIsVisibleThree] = useState(false);

  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);

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

    observerOne.observe(oneRef.current);
    observerTwo.observe(twoRef.current);
    observerThree.observe(threeRef.current);

    return () => {
        observerOne.unobserve(oneRef.current);
        observerTwo.unobserve(twoRef.current);
        observerThree.unobserve(threeRef.current);
    };
}, []);

  return (
    <section className='four'>
      <div className='four-content' >
        <h1 className={`three-title ${isVisibleOne ? 'visible' : ''}`} ref={oneRef} >INGREDIENTS</h1>
        <div className='ingredients-box' >
          <div className={`ingredient ${isVisibleTwo ? 'visible' : ''}`} ref={twoRef}>
            <div className="ingredient-image ing-image-one" />
            <h1 className='ingredient-name' >LION'S MANE </h1>
            <p className='ingredient-description' >Contains compounds that stimulate Nerve Growth Factor (NGF), crucial for neuron health. This enhances cognitive function and memory.</p>
          </div>
          <div className={`ingredient ${isVisibleThree ? 'visible' : ''}`} ref={threeRef}>
            <div className="ingredient-image ing-image-two" />
            <h1 className='ingredient-name' >CHAGA </h1>
            <p className='ingredient-description' >Rich in antioxidants, Chaga helps combat oxidative stress and inflammation. It supports the immune system by enhancing the body's production of beneficial cytokines, which are vital for fighting infections and diseases.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
