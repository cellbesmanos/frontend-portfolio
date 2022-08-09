import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import { Home, Projects, Error } from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
