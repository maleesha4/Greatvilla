import React from 'react';

const Hero: React.FC<any> = ({ children, ...props }) => {
  return (
    <div className="component-hero" {...props}>
      {children || <span>Hero Component</span>}
    </div>
  );
};

export default Hero;
