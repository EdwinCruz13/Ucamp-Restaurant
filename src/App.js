import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home/Home";
import { Menu } from "./pages/menu/Menu";
import { Contact } from "./pages/contact/Contact";
import { MyOrder } from "./pages/order/MyOrder";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Purchases" element={<MyOrder />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
