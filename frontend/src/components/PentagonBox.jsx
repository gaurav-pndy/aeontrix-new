import React from 'react';

const PentagonBox = () => {
  return (
    <div style={{ position: 'relative', width: '400px', height: '250px', backgroundColor: 'white', margin: '40px auto', border: '2px solid #000' }}>
      {/* Pentagon Cut (SVG) */}
      <svg
        width="100"
        height="60"
        viewBox="0 0 100 60"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'transparent'
        }}
      >
        {/* White background cut out */}
        <polygon
          points="0,60 50,0 100,60"
          fill="#f5f5f5"
          stroke="black"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default PentagonBox; 