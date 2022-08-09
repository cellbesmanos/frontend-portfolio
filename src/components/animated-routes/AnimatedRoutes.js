import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import App from "../../App";
import { Home, Projects, Error } from "../../routes";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/projects/:id/:name" element={<Projects />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
