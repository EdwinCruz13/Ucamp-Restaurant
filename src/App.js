import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home/Home";
import { Menu } from "./pages/menu/Menu"
import { Blog } from "./pages/blog/Blog";
import { Contact } from "./pages/contact/Contact";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
