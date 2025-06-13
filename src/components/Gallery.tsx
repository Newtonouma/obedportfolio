"use client";

import React, { useState } from 'react';
import styles from './Gallery.module.css';

// Type definitions
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

interface Category {
  id: string;
  name: string;
  count: number;
}

// Sample gallery data - you can replace with your actual images
const galleryData: GalleryImage[] = [
  {
    id: 1,
    src: '/images/gallery/portrait1.jpg',
    alt: 'Portrait Photography 1',
    category: 'portrait'
  },
  {
    id: 2,
    src: '/images/gallery/portrait2.jpg',
    alt: 'Portrait Photography 2',
    category: 'portrait'
  },
  {
    id: 3,
    src: '/images/gallery/wedding1.jpg',
    alt: 'Wedding Photography 1',
    category: 'wedding'
  },
  {
    id: 4,
    src: '/images/gallery/wedding2.jpg',
    alt: 'Wedding Photography 2',
    category: 'wedding'
  },
  {
    id: 5,
    src: '/images/gallery/event1.jpg',
    alt: 'Event Photography 1',
    category: 'event'
  },
  {
    id: 6,
    src: '/images/gallery/event2.jpg',
    alt: 'Event Photography 2',
    category: 'event'
  },
  {
    id: 7,
    src: '/images/gallery/lifestyle1.jpg',
    alt: 'Lifestyle Photography 1',
    category: 'lifestyle'
  },
  {
    id: 8,
    src: '/images/gallery/lifestyle2.jpg',
    alt: 'Lifestyle Photography 2',
    category: 'lifestyle'
  },
  {
    id: 9,
    src: '/images/gallery/corporate1.jpg',
    alt: 'Corporate Photography 1',
    category: 'corporate'  }
];

const categories: Category[] = [
  { id: 'all', name: 'All', count: galleryData.length },
  { id: 'portrait', name: 'Portrait', count: galleryData.filter(img => img.category === 'portrait').length },
  { id: 'wedding', name: 'Wedding', count: galleryData.filter(img => img.category === 'wedding').length },
  { id: 'event', name: 'Events', count: galleryData.filter(img => img.category === 'event').length },
  { id: 'lifestyle', name: 'Lifestyle', count: galleryData.filter(img => img.category === 'lifestyle').length },
  { id: 'corporate', name: 'Corporate', count: galleryData.filter(img => img.category === 'corporate').length }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const filteredImages = activeCategory === 'all' 
    ? galleryData.slice(0, 8)
    : galleryData.filter(image => image.category === activeCategory).slice(0, 8);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };  return (
    <section className={styles.gallery} id="portfolio">
      <div className={styles.galleryBackground} />
      <div className={styles.galleryOverlay} />
      <div className={styles.galleryContainer}>
        {/* Category Navigation */}
        <nav className={styles.categoryNav}>
          <ul className={styles.categoryList}>
            {categories.map(category => (
              <li key={category.id} className={styles.categoryItem}>
                <button
                  className={`${styles.categoryButton} ${
                    activeCategory === category.id ? styles.active : ''
                  }`}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  {category.name}
                  <span className={styles.categoryCount}>({category.count})</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Image Grid */}
        <div className={styles.imageGrid}>
          {filteredImages.map(image => (
            <div 
              key={image.id} 
              className={styles.imageItem}
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={styles.galleryImage}
                loading="lazy"
              />
              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <span className={styles.viewIcon}>👁</span>
                  <p className={styles.imageTitle}>{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className={styles.loadMore}>
          <button className={styles.loadMoreButton}>
            Load More
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeLightbox}>
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className={styles.lightboxImage}
            />
            <div className={styles.lightboxInfo}>
              <h3>{selectedImage.alt}</h3>
              <p>Category: {selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
