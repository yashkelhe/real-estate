import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/Hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className='hero-wrapper'>
      <div className='paddings innerWidth hero-container flexCenter'>
        {/* left side */}
        <div className='flexColStart hero-left'>
          <div className='hero-title'>
            <div className='orange-circle'></div>
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
              Discover <br />
              Most Suitable <br />
              Property
            </motion.h1>
          </div>
          {/* description */}
          <div className='flexColStart hero-des'>
            <span className='secondaryText'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
            </span>
            <span className='secondaryText'>
              {" "}
              quo. Facilis a molestias placeat molestiae ut consectetur deleniti
              magnam{" "}
            </span>
          </div>

          {/* search bar */}
          <div className='flexCenter search-bar'>
            <HiLocationMarker color='var(--blue)' size={25} />
            <input type='text' />
            <button className='button'>Search</button>
          </div>

          <div className='flexCenter stats'>
            <div className='flexColCenter stat'>
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Premium product </span>
            </div>
            <div className='flexColCenter  stat'>
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Happy Customers </span>
            </div>
            <div className='flexColCenter stat'>
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Award Winning </span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className='flexCenter hero-right'>
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            className='image-container'
          >
            <img src='./hero-image.png' alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
