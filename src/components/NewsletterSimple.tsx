'use client';

import React from 'react';

const NewsletterSimple = () => {
  return (
    <section style={{ 
      padding: '4rem 2rem', 
      backgroundColor: '#0b0c0c', 
      color: '#ffffff',
      textAlign: 'center'
    }}>
      <h2 style={{ 
        fontSize: '2.5rem', 
        marginBottom: '1rem',
        color: '#ffffff'
      }}>
        Stay Updated
      </h2>
      <p style={{ 
        fontSize: '1.2rem', 
        color: '#d2c1af',
        marginBottom: '2rem',
        maxWidth: '600px',
        margin: '0 auto 2rem auto'
      }}>
        Subscribe to my newsletter for exclusive photography tips and updates.
      </p>
      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        maxWidth: '400px', 
        margin: '0 auto',
        flexDirection: 'column'
      }}>
        <input 
          type="email" 
          placeholder="Enter your email"
          style={{
            padding: '1rem',
            border: '2px solid #d2c1af',
            backgroundColor: 'transparent',
            color: '#ffffff',
            fontSize: '1rem'
          }}
        />
        <button style={{
          padding: '1rem 2rem',
          backgroundColor: '#d2c1af',
          color: '#0b0c0c',
          border: 'none',
          fontSize: '1rem',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default NewsletterSimple;
