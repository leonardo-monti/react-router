import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';


export default function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <div>
        <HomePage />
      </div>

    </BrowserRouter>
  )
}
