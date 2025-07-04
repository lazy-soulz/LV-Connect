import React, { createContext, useState } from 'react';

// Create the context
export const CollapseContext = createContext();

// Create a provider component
export const CollapseProvider = ({ children }) => {
  // State that will be shared
  const [collapse, setCollapse] = useState(
    !localStorage?.getItem('collapsedNavbar')
      ? window?.innerWidth < 740
        ? true
        : false
      : localStorage?.getItem('collapsedNavbar') === 'Yes'
      ? true
      : false
  );

  return (
    <CollapseContext.Provider value={{ collapse, setCollapse }}>
      {children}
    </CollapseContext.Provider>
  );
};
