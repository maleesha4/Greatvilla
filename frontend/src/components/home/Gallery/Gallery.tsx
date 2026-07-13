import React from 'react';

const Gallery: React.FC<any> = ({ children, ...props }) => {
  return (
    <div className="component-gallery" {...props}>
      {children || <span>Gallery Component</span>}
    </div>
  );
};

export default Gallery;
