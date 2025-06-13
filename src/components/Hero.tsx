import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.heroOverlay}></div>
      </div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Hello!<br />
          I'm Obed
        </h1>        <p className={styles.heroDescription}>
          I'm a freelance photographer based in Kenya who specializes in people and portrait photography. I love putting ideas into beautiful pictures, and I want to help you do the same. Are you searching for a photographer who is passionate, caring, and creative? I am that photographer!
        </p>
        <button className={styles.bookNowButton}>
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default Hero;
