import React from 'react';

const Modal: React.FC<any> = ({ children, ...props }) => {
  return (
    <div className="component-modal" {...props}>
      {children || <span>Modal Component</span>}
    </div>
  );
};

export default Modal;
