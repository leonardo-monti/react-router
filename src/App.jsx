import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';



export default function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <div className="container mt-4">
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/chi-siamo" element={<AboutPage />} />
          <Route path="/prodotti" element={<ProductsPage />} />

        </Routes>
      </div>

    </BrowserRouter>
  )
}
