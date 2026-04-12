import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import MenuPage from './pages/MenuPage';
import BookingPage from './pages/BookingPage';
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
            <Route path='/contacts' element={<ContactsPage />} />
            <Route path='/menu' element={<MenuPage />} />
            <Route path="/booking" element={<BookingPage />} />      
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;