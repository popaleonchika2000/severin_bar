import { Link } from 'react-router-dom';
import { LayoutGrid, Heart, ShoppingCart, CircleUserRound } from 'lucide-react';
import './MobileNav.css';

const MobileNav = () => {
  return (
    <div className="mobile-bottom-nav h-[54px] fixed bottom-0 left-0 right-0 bg-[#FFFFFF] text-black shadow md:hidden">
      <div className="nav-grid grid grid-cols-4 p-2">
        <Link to="/catalog" className="nav-item flex flex-col items-center justify-center">
          <LayoutGrid size={24} color="#0061A7" />
          <span className="text-[11px] mt-1">Каталог</span>
        </Link>
        <Link to="/like" className="nav-item flex flex-col items-center justify-center">
          <Heart size={24} color="#0061A7" />
          <span className="text-[11px] mt-1">Избранное</span>
        </Link>
        <Link to="/cart" className="nav-item flex flex-col items-center justify-center">
          <ShoppingCart size={24} color="#0061A7" />
          <span className="text-[11px] mt-1">Корзина</span>
        </Link>
        <Link to="#" className="nav-item flex flex-col items-center justify-center">
          <CircleUserRound size={24} color="#0061A7" />
          <span className="text-[11px] mt-1">Войти</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;