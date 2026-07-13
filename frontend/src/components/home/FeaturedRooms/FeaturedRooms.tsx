import React from 'react';

const FeaturedRooms: React.FC<any> = ({ children, ...props }) => {
  return (
    <div className="component-featuredrooms" {...props}>
      {children || <span>FeaturedRooms Component</span>}
    </div>
  );
};

export default FeaturedRooms;
