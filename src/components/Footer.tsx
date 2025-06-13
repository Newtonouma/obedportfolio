'use client';

import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerBackground} />
      <div className={styles.footerOverlay} />
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          {/* Footer Top Section */}
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <h3 className={styles.brandName}>Obed Photography</h3>
              <p className={styles.brandTagline}>
                Capturing life's precious moments with artistry and passion
              </p>
            </div>
            
            <div className={styles.footerLinks}>
              <div className={styles.linkColumn}>
                <h4 className={styles.columnTitle}>Services</h4>
                <ul className={styles.linkList}>
                  <li><a href="#portfolio" className={styles.footerLink}>Portrait</a></li>
                  <li><a href="#portfolio" className={styles.footerLink}>Wedding</a></li>
                  <li><a href="#portfolio" className={styles.footerLink}>Events</a></li>
                  <li><a href="#portfolio" className={styles.footerLink}>Lifestyle</a></li>
                  <li><a href="#portfolio" className={styles.footerLink}>Corporate</a></li>
                </ul>
              </div>
              
              <div className={styles.linkColumn}>
                <h4 className={styles.columnTitle}>Company</h4>
                <ul className={styles.linkList}>
                  <li><a href="#about" className={styles.footerLink}>About</a></li>
                  <li><a href="#portfolio" className={styles.footerLink}>Portfolio</a></li>
                  <li><a href="#newsletter" className={styles.footerLink}>Newsletter</a></li>
                  <li><a href="#contact" className={styles.footerLink}>Contact</a></li>
                </ul>
              </div>
              
              <div className={styles.linkColumn}>
                <h4 className={styles.columnTitle}>Connect</h4>
                <ul className={styles.socialLinks}>
                  <li>
                    <a href="https://instagram.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://facebook.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@obedphotography.com" className={styles.socialLink}>
                      Email
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Footer Bottom Section */}
          <div className={styles.footerBottom}>
            <div className={styles.bottomLeft}>
              <p className={styles.copyright}>
                © {currentYear} Obed Photography. All rights reserved.
              </p>
            </div>
            <div className={styles.bottomRight}>
              <ul className={styles.legalLinks}>
                <li><a href="#privacy" className={styles.legalLink}>Privacy Policy</a></li>
                <li><a href="#terms" className={styles.legalLink}>Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
