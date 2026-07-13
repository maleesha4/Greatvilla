import React from 'react';

const Loader: React.FC<any> = ({ children, ...props }) => {
  return (
    <div className="component-loader" {...props}>
      {children || <span>Loader Component</span>}
    </div>
  );
};

export default Loader;
