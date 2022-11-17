import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter,Route,Routes } from "react-router-dom";

// pages and pages
import Index from './pages/Index'; // -
import Signup from "./pages/Signup"; // -
import Login from "./pages/Login"; // -
import Success from "./pages/Success"; // -
import Home from "./pages/Home"; // -
import ProfileUpdate from "./pages/ProfileUpdate"; // 
import Profile from "./pages/Profile"; // -
import Contactus from "./pages/Contactus"; // 
import Aboutus from "./pages/Aboutus"; 
import Services from "./pages/Services"; 
import NotFound from "./pages/NotFound"; 
import Test from './pages/test'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
    <Routes>
      <Route path="/"        element={<Index />} />
      <Route path="signup"   element={<Signup />} />
      <Route path="login"    element={<Login />} />
      <Route path="success"  element={<Success />} />
      <Route path="home"     element={<Home />} />
      <Route path="contactus" element={<Contactus />} />
      <Route path="services" element={<Services />} />
      <Route path="about"    element={<Aboutus />} />
      <Route path="profile"  element={<Profile />} />
      <Route path="profileUpdate" element={<ProfileUpdate />} />
      <Route path="Test"     element={<Test />} />
      <Route path="*"        element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
  
);


