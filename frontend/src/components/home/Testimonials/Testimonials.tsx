import React from 'react';

const Testimonials: React.FC<any> = ({ children, ...props }) => {
  return (
    <div className="component-testimonials" {...props}>
      {children || <span>Testimonials Component</span>}
    </div>
  );
};

export default Testimonials;
