import { Link } from 'react-router-dom';
import './Like.css';
import { Heart} from 'lucide-react';

const LikePage = () => {
  return (
    <div className="cart-page">
      <div className="container10">
        {/* Блок "Пусто" */}
        <div className="empty-cart flex flex-col items-center justify-center">
          <img
            src="src/assets/like.svg" alt="Корзина пуста" className=" w-[249px] h-[221px]" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">Нет избранных товаров</h2>
          <p className="text-gray-600 mb-6 flex gap-2">Выберите понравившиеся товары и нажмите <Heart color="#0061A7"/></p>  
          <Link to="/" className="w-[151px] h-[54px] bg-[#1C72B1] text-white rounded-lg text-sm font-medium flex items-center justify-center hover:bg-[#004a80]">
            К покупкам!
          </Link>
        </div>

      </div>
    </div>
  );
};

export default LikePage;