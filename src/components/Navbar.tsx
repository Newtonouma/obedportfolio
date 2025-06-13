"use client";

import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navLogo}>
          <a href="/">Obed</a>
        </div>        <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
          <li className={styles.navItem}>
            <a href="#home" className={styles.navLink} onClick={closeMenu}>Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="#about" className={styles.navLink} onClick={closeMenu}>About</a>
          </li>
          <li className={styles.navItem}>
            <a href="#portfolio" className={styles.navLink} onClick={closeMenu}>Portfolio</a>
          </li>
          <li className={styles.navItem}>
            <a href="#services" className={styles.navLink} onClick={closeMenu}>Services</a>
          </li>
          <li className={styles.navItem}>
            <a href="#contact" className={styles.navLink} onClick={closeMenu}>Contact</a>
          </li>
        </ul>
        <button className={styles.bookNowButton}>
          Book Now
        </button>
        <div 
          className={`${styles.mobileMenuToggle} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
