import React from 'react';
import './Parallax.css';

const ParallaxComponent = ({ image, children, alignment }) => {
  const alignmentClass = alignment === 'right' ? 'parallax-background-right' : 'parallax-background-left';
  return (
    <div className="parallax">
      <div className={`parallax-background ${alignmentClass}`} style={{ backgroundImage: `url(${image})` }}></div>
      <div className="parallax-content">
        {children}
      </div>
    </div>
  );
};

export default ParallaxComponent;
