import React, { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { CollapseProvider } from "../utils/CollapseContext";
import DashboardHome from "../pages/dashboard/DashboardHome";
import CRM from "../pages/dashboard/CRM";
import Automation from "../pages/dashboard/Automation";
import Chat from "../pages/dashboard/Chat";
import MyProjects from "../pages/dashboard/MyProjects"; 
import Integration from "../pages/dashboard/Integration";
import Manage from "../pages/dashboard/Manage";
import Reports from "../pages/dashboard/Reports";
import Settings from "../pages/dashboard/Settings";
import DashViewLayout from "../pages/dashboard/DashViewLayout.jsx";


function DashboardRoutes()  {
  
  return (
    <CollapseProvider>
      <DashViewLayout>
        <Routes>
        <Route index element={<DashboardHome />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/automation" element={<Automation />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/my-projects" element={<MyProjects />} />
          <Route path="/integration" element={<Integration/>} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
         
        </Routes>
      </DashViewLayout>
    </CollapseProvider>
  );
}

export default DashboardRoutes;
