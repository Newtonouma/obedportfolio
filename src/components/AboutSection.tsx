'use client';

import React from 'react';
import styles from './AboutSection.module.css';

const AboutSection: React.FC = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.aboutBackground} />
      <div className={styles.aboutOverlay} />
      <div className={styles.aboutContent}>
        <h2 className={styles.aboutTitle}>Capturing the moments that captivate your heart</h2>
        <p className={styles.aboutDescription}>
          Passionate photographer with over 5 years of experience capturing life's most precious moments. 
          Specializing in portraits, weddings, and lifestyle photography, I believe every image tells a unique story. 
          My approach combines technical expertise with artistic vision to create timeless photographs that you'll treasure forever.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
