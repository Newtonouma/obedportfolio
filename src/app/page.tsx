import React from 'react';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import AboutSection from '../components/AboutSection';
import NewsletterSimple from '../components/NewsletterSimple';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Gallery />
            <AboutSection />
            <NewsletterSimple />
            <Footer />
        </div>
    );
};

export default HomePage;