import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutRoutes from "./routes/AboutRoutes";
import ContactRoutes from "./routes/ContactRoutes";
import MaquinasRoutes from './routes/MaquinasRoutes'
import NuevasRoutes from "./routes/NuevasRoutes";
import UsadasRoutes from "./routes/UsadasRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/maquinas" element={<MaquinasRoutes />} />
      <Route path="/about" element={<AboutRoutes />} />
      <Route path="/contact" element={<ContactRoutes />} />
      <Route path='/nuevas' element={<NuevasRoutes />} />
      <Route path='/usadas' element={<UsadasRoutes />} />
    </Routes>
  </BrowserRouter>
);


