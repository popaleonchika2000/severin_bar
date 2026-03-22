import { Link } from 'react-router-dom';
import './Catalog.css';

const CatalogPage = () => {
  return (
    <div className="catalog-page">
      <div className="container5"> 

        {/* Левое меню */}
        <div className="catalog-sidebar">
          <nav>
            <ul>
              <li><Link to="/catalog" className="sidebar-link active">Компьютеры и ноутбуки</Link></li>
              <li><Link to="/complect" className="sidebar-link">Компьютерные комплектующие</Link></li>
              <li><Link to="#" className="sidebar-link">Серверы и СХД</Link></li>
              <li><Link to="#" className="sidebar-link">Периферия</Link></li>
              <li><Link to="#" className="sidebar-link">ИБП</Link></li>
              <li><Link to="#" className="sidebar-link">Расходные материалы</Link></li>
              <li><Link to="#" className="sidebar-link">Сетевое оборудование</Link></li>
              <li><Link to="#" className="sidebar-link">Программное обеспечение</Link></li>
              <li><Link to="#" className="sidebar-link">СКС</Link></li>
              <li><Link to="#" className="sidebar-link">Системы безопасности</Link></li>
              <li><Link to="#" className="sidebar-link">Профессиональное аудио/видео оборудование</Link></li>
              <li><Link to="#" className="sidebar-link">Игры и сервисы</Link></li>
              <li><Link to="#" className="sidebar-link">Электрика и системы электропитания</Link></li>
              <li><Link to="#" className="sidebar-link">Торговое оборудование</Link></li>
              <li><Link to="#" className="sidebar-link">Телефония</Link></li>
              <li><Link to="#" className="sidebar-link">Инструмент, измерительное оборудование и техника</Link></li>
              <li><Link to="#" className="sidebar-link">APPLE</Link></li>
              <li><Link to="#" className="sidebar-link">Климатическое оборудование</Link></li>
              <li><Link to="#" className="sidebar-link">Портативная техника и бытовая электроника</Link></li>
              <li><Link to="#" className="sidebar-link">Скидки и акции</Link></li>
              <li><Link to="#" className="sidebar-link">Распродажа</Link></li>
              <li><Link to="#" className="sidebar-link">Уцененные товары</Link></li>
            </ul>
          </nav>
        </div>

        {/* Основной контент — 2 колонки */}
        <div className="catalog-main">
          <div className="categor-grid grid sm:grid-cols-1 md:grid-cols-2 gap-12">
            <Link to="/catalog/notebooks" className="category-card flex flex-col items-center text-center justify-center bg-[#D7EBFE] border-none w-[300px] h-[233px] rounded-xl hover:shadow">
              <img src="src/assets/image 5 (1).svg" alt="Ноутбуки" className="card-image w-[180px] h-[150px] object-contain mb-4" />
              <p className="card-title text-[17px] text-gray-800 hover:text-[#0061A7]">Ноутбуки</p>
            </Link>
            <Link to="/catalog/computers" className="category-card flex flex-col items-center text-center justify-center bg-[#D7EBFE] border-none w-[300px] h-[233px] rounded-xl hover:shadow">
              <img src="src/assets/comp.svg" alt="Компьютеры" className="card-image w-[180px] h-[150px] object-contain mb-4"/>
              <p className="card-title text-[17px] text-gray-800 hover:text-[#0061A7]">Компьютеры</p>
            </Link>
            <Link to="/catalog/monoblocks" className="category-card flex flex-col items-center text-center justify-center bg-[#D7EBFE] border-none w-[300px] h-[233px] rounded-xl hover:shadow">
              <img src="src/assets/mono.svg" alt="Моноблоки" className="card-image w-[180px] h-[150px] object-contain mb-4"/>
              <p className="card-title text-[17px] text-gray-800 hover:text-[#0061A7]">Моноблоки</p>
            </Link>
            <Link to="/catalog/accessories" className="category-card flex flex-col items-center text-center justify-center bg-[#D7EBFE] border-none w-[300px] h-[233px] rounded-xl hover:shadow">
              <img src="src/assets/rukzak.svg" alt="Аксессуары" className="card-image w-[180px] h-[150px] object-contain mb-4"/>
              <p className="card-title text-[17px] text-gray-800 hover:text-[#0061A7]">Аксессуары</p>
            </Link>
            <Link to="/catalog/nettops" className="category-card flex flex-col items-center text-center justify-center bg-[#D7EBFE] border-none w-[300px] h-[233px] rounded-xl hover:shadow">
              <img src="src/assets/nettop.svg" alt="Неттопы" className="card-image w-[180px] h-[150px] object-contain mb-4"/>
              <p className="card-title text-[17px] text-gray-800 hover:text-[#0061A7]">Неттопы</p>
            </Link>
            <Link to="/catalog/minipcs" className="category-card flex flex-col items-center text-center justify-center bg-[#D7EBFE] border-none w-[300px] h-[233px] rounded-xl hover:shadow">
              <img src="src/assets/miniprom.svg" alt="Минипромторг" className="card-image w-[180px] h-[150px] object-contain mb-4"/>
              <p className="card-title text-[17px] text-gray-800 hover:text-[#0061A7]">Минипромторг</p>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CatalogPage;