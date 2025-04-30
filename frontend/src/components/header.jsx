import React from 'react';

export default function Header() {
  return (
    <div 
      style={{
        backgroundColor: '#706F6E',
        padding: '10px 20px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <h1 
        style={{
          margin: 0,
          fontSize: '24px',
          fontWeight: 'bold',
        }}
      >
        Home Store
      </h1>
    </div>
  );
}
