import React from 'react';

export default function Footer() {
  return (
    <div 
      style={{
        backgroundColor: '#706F6E',  // Same color as header
        padding: '10px 20px',
        color: 'white',
        textAlign: 'center',  // Center-align the text
        position: 'fixed',  // Fix the footer at the bottom
        bottom: '0',
        width: '100%',
      }}
    >
      <p 
        style={{
          margin: 0,
          fontSize: '14px',
        }}
      >
        &copy; 2025 Home Store. All Rights Reserved.
      </p>
    </div>
  );
}
