import React, { useEffect, useRef, useState } from "react";

export const Section3 = () => {

  const [isVisibleOne, setIsVisibleOne] = useState(false);
  const [isVisibleTwo, setIsVisibleTwo] = useState(false);
  const [isVisibleThree, setIsVisibleThree] = useState(false);
  const [isVisibleFour, setIsVisibleFour] = useState(false);
  const [isVisibleFive, setIsVisibleFive] = useState(false);
  const [isVisibleSix, setIsVisibleSix] = useState(false);
  const [isVisibleSeven, setIsVisibleSeven] = useState(false);
  const [isVisibleEight, setIsVisibleEight] = useState(false);

  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);
  const fourRef = useRef(null);
  const fiveRef = useRef(null);
  const sixRef = useRef(null);
  const sevenRef = useRef(null);
  const eightRef = useRef(null);

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

    const observerSix = new IntersectionObserver(([entry]) => {
      setIsVisibleSix(entry.isIntersecting);
    });

    const observerSeven = new IntersectionObserver(([entry]) => {
      setIsVisibleSeven(entry.isIntersecting);
    });

    const observerEight = new IntersectionObserver(([entry]) => {
      setIsVisibleEight(entry.isIntersecting);
    });

    observerOne.observe(oneRef.current);
    observerTwo.observe(twoRef.current);
    observerThree.observe(threeRef.current);
    observerFour.observe(fourRef.current);
    observerFive.observe(fiveRef.current);
    observerSix.observe(sixRef.current);
    observerSeven.observe(sevenRef.current);
    observerEight.observe(eightRef.current);

    return () => {
        observerOne.unobserve(oneRef.current);
        observerTwo.unobserve(twoRef.current);
        observerThree.unobserve(threeRef.current);
        observerFour.unobserve(fourRef.current);
        observerFive.unobserve(fiveRef.current);
        observerSix.unobserve(sixRef.current);
        observerSeven.unobserve(sevenRef.current);
        observerEight.unobserve(eightRef.current);
    };
}, []);

    return (
      <section className="three" >
        <div className="three-content">
          <h1 className={`three-title ${isVisibleOne ? 'visible' : ''}`} ref={oneRef} >HEALTH BENEFITS</h1>
          <div className="key-features-column" >

            <div className="key-features-row ">
              <div className={`key-feature-box ${isVisibleTwo ? 'visible' : ''}`} ref={twoRef} >
                <i class="fa-solid fa-bolt"></i>
                <div className="key-features-box-column" >
                  <h1 className="key-feature-title" >NATURAL ENERGY BOOST</h1>
                  <p className="key-feature-description" >Enjoy steady energy without the spikes and crashes of regular coffee.</p>
                </div>
              </div>
              <div className={`row-border ${isVisibleThree ? 'visible' : ''}`} ref={threeRef}  />
              <div className={`key-feature-box ${isVisibleFour ? 'visible' : ''}`} ref={fourRef} >
                <i class="fa-solid fa-lightbulb"></i>
                <div className="key-features-box-column" >
                  <h1 className="key-feature-title" >ENHANCED FOCUS</h1>
                  <p className="key-feature-description" >Lion’s Mane improves cognitive function and memory, keeping you sharp all day.</p>
                </div>
              </div>
            </div>

            <div className={`column-border ${isVisibleFive ? 'visible' : ''}`} ref={fiveRef} />

            <div className="key-features-row ">
              <div className={`key-feature-box ${isVisibleSix ? 'visible' : ''}`} ref={sixRef} >
                <i class="fa-solid fa-shield"></i>
                <div className="key-features-box-column" >
                  <h1 className="key-feature-title" >IMMUNE SUPPORT</h1>
                  <p className="key-feature-description" >Chaga boosts your immune system, promoting overall health and well-being.</p>
                </div>
              </div>
              <div className={`row-border ${isVisibleSeven ? 'visible' : ''}`} ref={sevenRef} />
              <div className={`key-feature-box ${isVisibleEight ? 'visible' : ''}`} ref={eightRef} >
                <i class="fa-solid fa-mug-hot"></i>
                <div className="key-features-box-column" >
                  <h1 className="key-feature-title" >DELICIOUS FLAVOR</h1>
                  <p className="key-feature-description" >Enjoy the rich, comforting taste of coffee with added health benefits.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    )
}