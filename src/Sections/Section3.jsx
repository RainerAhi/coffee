import React, { useEffect, useRef, useState } from "react";

export const Section3 = () => {

    return (
      <section className="three" >
        <div className="three-content">
          <h1 className="three-title" >KEY FEATURES</h1>
          <div className="key-features-column" >

            <div className="key-features-row">
              <div className="key-feature-box" >
                <i class="fa-solid fa-bolt"></i>
                <div className="key-features-box-column" >
                  <h1 className="key-feature-title" >NATURAL ENERGY BOOST</h1>
                  <p className="key-feature-description" >Enjoy steady energy without the spikes and crashes of regular coffee.</p>
                </div>
              </div>
              <div className="row-border" />
              <div className="key-feature-box" >
                <i class="fa-solid fa-lightbulb"></i>
                <div className="key-features-box-column" >
                  <h1 className="key-feature-title" >ENHANCED FOCUS</h1>
                  <p className="key-feature-description" >Lion’s Mane improves cognitive function and memory, keeping you sharp all day.</p>
                </div>
              </div>
            </div>

            <div className="column-border" />

            <div className="key-features-row">
              <div className="key-feature-box" >
                <i class="fa-solid fa-shield"></i>
                <div className="key-features-box-column" >
                  <h1 className="key-feature-title" >IMMUNE SUPPORT</h1>
                  <p className="key-feature-description" >Chaga boosts your immune system, promoting overall health and well-being.</p>
                </div>
              </div>
              <div className="row-border" />
              <div className="key-feature-box" >
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