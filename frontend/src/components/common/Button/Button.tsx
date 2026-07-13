import React from 'react';

const Button: React.FC<any> = ({ children, ...props }) => {
  return (
    <div className="component-button" {...props}>
      {children || <span>Button Component</span>}
    </div>
  );
};

export default Button;
