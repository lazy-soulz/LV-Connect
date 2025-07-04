
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { nav } from "./Navigation";

const RenderRoutes = () => {
  const isAuthenticated = true;

  return (
    <>
      <Routes>
     
        {nav.map((r, i) => {
          // Protected routes
          if (r.isPrivate === isAuthenticated) {
            return <Route key={i} path={r.path} element={r.element} />;
          }
          // Public Routes
          else if (!r.isPrivate) {
            return <Route key={i} path={r.path} element={r.element} />;
          } else return false;
        })}
     
      </Routes>
    </>
  );
};

export default RenderRoutes;
