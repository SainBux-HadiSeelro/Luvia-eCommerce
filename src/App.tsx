/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-primary-foreground relative overflow-hidden dark:bg-[#0F172A]">
      {/* Background Decorative Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-50 dark:opacity-100" style={{ background: 'radial-gradient(circle, rgba(192, 132, 252, 0.15) 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] rounded-full blur-[100px] opacity-50 dark:opacity-100" style={{ background: 'radial-gradient(circle, rgba(251, 113, 133, 0.1) 0%, transparent 70%)' }}></div>
      </div>
      
      <CartProvider>
        <Router>
          <ScrollToTop />
          <Navbar />
          <div className="relative z-10">
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                {/* Fallback to home */}
                <Route path="*" element={<Home />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </div>
  );
}
