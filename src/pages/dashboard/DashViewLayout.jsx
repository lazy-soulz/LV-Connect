import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { CollapseContext } from "../../utils/CollapseContext";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

function DashViewLayout({ children }) {
  const { collapse, setCollapse } = useContext(CollapseContext);
  const [isMobileScreen, setIsMobileScreen] = React.useState(window.innerWidth < 768);
  const [isTabScreen, setIsTabScreen] = React.useState(window.innerWidth < 1024);

  const location = useLocation();

  React.useEffect(() => {
    // Update state on screen resize
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 768);
      setIsTabScreen(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  React.useEffect(() => {
    if(window.innerWidth < 1024){
      setCollapse((prev) => {
        localStorage.setItem('collapsedNavbar', true);
        return true;
      });
    }
  }, []); 
 
  return (
    <div className="bg-[#f8f9fe] h-screen w-screen flex">
      {/* Sidebar - Fixed position */}
      <div className={`${isMobileScreen ? 'hidden' : 'block'} flex-shrink-0`}>
        <Sidebar setCollapse={setCollapse} collapse={collapse} />
      </div>
      
      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0 ml-[20px] gap-[17px]">
        <Header />
        <div className="flex-1 overflow-auto">
          {/* {children} */}
        </div>
      </div>
    </div>
  );
}

export default DashViewLayout;