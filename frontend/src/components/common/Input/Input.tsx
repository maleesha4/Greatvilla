import React from 'react';

const Input: React.FC<any> = ({ children, ...props }) => {
  return (
    <div className="component-input" {...props}>
      {children || <span>Input Component</span>}
    </div>
  );
};

export default Input;
