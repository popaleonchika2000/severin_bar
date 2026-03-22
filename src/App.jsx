import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CatalogPage from './pages/CatalogPage';
import WarrantyPage from './pages/WarrantyPage';
import ContactsPage from './pages/ContactsPage';
import MenuPage from './pages/MenuPage';
import ServicesPage from './pages/ServicesPage';
import BookingPage from './pages/BookingPage';
import SmartphonesPage from './pages/SmartphonesPage';
import MonitorsPage from './pages/MonitorsPage';
import VideocardPage from './pages/VideocardPage';
import ProcessorsPage from './pages/ProcessorsPage';
import News4 from './pages/News4';
import News3 from './pages/News3';
import News2 from './pages/News2';
import News1 from './pages/News1';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import LikePage from './pages/LikePage';
import ComplectPage from './pages/ComplectPage';
import ComplectPage2 from './pages/ComplectPage2';
import MobileNav from './components/MobileNav';
import CorporatePage from './pages/CorporatePage';
import LeasingPage from './pages/LeasingPage';
import SuppliersPage from './pages/SuppliersPage';
import NewsPage from './pages/NewsPage';


const App = () => {
  return (
    <Router>
      <div className='app-wrapper'>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path='/news' element={<NewsPage />} />
            <Route path='/warranty' element={<WarrantyPage />} /> 
            <Route path='/contacts' element={<ContactsPage />} />
            <Route path='/menu' element={<MenuPage />} />
            <Route path='/services' element={<ServicesPage />} />
            <Route path='/corporate' element={<CorporatePage />} />
            <Route path='/suppliers' element={<SuppliersPage />} />
            <Route path='/leasing' element={<LeasingPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/smartphones" element={<SmartphonesPage />} />
            <Route path="/catalog/monitors" element={<MonitorsPage />} />
            <Route path='/catalog/video-cards' element={<VideocardPage />} />
            <Route path='/catalog/processors' element={<ProcessorsPage />} />
            <Route path='/news/one' element={<News1 />} />
            <Route path='/news/2' element={<News2 />} />
            <Route path='/news/3' element={<News3 />} />
            <Route path='/news/4' element={<News4 />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/like" element={<LikePage />} />
            <Route path="/complect" element={<ComplectPage />} />
            <Route path="/complect2" element={<ComplectPage2 />} />
          
          </Routes>
        </main>
        <MobileNav />
      </div>
    </Router>
  );
};

export default App;