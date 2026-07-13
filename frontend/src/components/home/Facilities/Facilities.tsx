import React from 'react';

const Facilities: React.FC<any> = ({ children, ...props }) => {
  return (
    <div className="component-facilities" {...props}>
      {children || <span>Facilities Component</span>}
    </div>
  );
};

export default Facilities;
