import React from 'react';
import './Parallax.css';

const ParallaxComponent = ({ image, children, alignment, bg_align }) => {
  const alignmentClass = alignment === 'right' ? 'parallax-background-right' : 'parallax-background-left';
  const bg = bg_align==='right' ? 'parallax-content-black-right' : 'parallax-content-black-left';
  return (
    <div className="parallax">
      <div className={`parallax-background ${alignmentClass}`} style={{ backgroundImage: `url(${image})` }}></div>
      <div className={`parallax-content parallax-content-black ${bg}`}>
        {children}
      </div>
    </div>
  );
};

export default ParallaxComponent;
