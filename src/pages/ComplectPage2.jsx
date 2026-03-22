import { Link } from 'react-router-dom';
import { MoveLeft  } from 'lucide-react';
import './Complect2.css';

const ComplectPage2 = () => {
  return (
    <div className="catalog-page">
      <div className="container12">

        {/* Левое меню */}
        <div className="catalog-sidebar">
          <nav>
            <ul>
              <li><Link to="/catalog" className="sidebar-link">Компьютеры и ноутбуки</Link></li>
              <li><Link to="/complect" className="sidebar-link active">Компьютерные комплектующие</Link></li>
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

        {/* Основной контент — 3 колонки */}
        <div className="catalog-main">
          <div className="categor-grid grid sm:grid-cols-1 md:grid-cols-3 gap-12">
            <Link to="/catalog/minipcs" className="category-card flex flex-col items-center text-center justify-center bg-[#D7EBFE] border-none w-[300px] h-[233px] rounded-xl hover:shadow">
              <img src="src/assets/fdd.svg" alt="Приводы FDD/DVD/Blu-Ray/Card Readers" className="card-image w-[180px] h-[150px] object-contain mb-1" />
              <p className="card-title text-[17px] w-[210px] text-gray-800 hover:text-[#0061A7]">Приводы FDD/DVD/Blu-Ray/Card Readers</p>
            </Link>
            <Link to="/catalog/minipcs" className="category-card flex flex-col items-center text-center justify-center bg-[#D7EBFE] border-none w-[300px] h-[233px] rounded-xl hover:shadow">
              <img src="src/assets/usb.svg" alt="Принадлежности USB,переходники" className="card-image w-[180px] h-[150px] object-contain mb-2" />
              <p className="card-title text-[17px] text-gray-800 hover:text-[#0061A7]">Принадлежности USB,переходники</p>
            </Link>
            <Link to="/catalog/minipcs" className="category-card flex flex-col items-center text-center justify-center bg-[#D7EBFE] border-none w-[300px] h-[233px] rounded-xl hover:shadow">
              <img src="src/assets/intel.svg" alt="Аксессуары для видеокарт" className="card-image w-[180px] h-[150px] object-contain mb-4" />
              <p className="card-title text-[17px] text-gray-800 hover:text-[#0061A7]">Процессоры</p>
            </Link>
            <Link to="/catalog/minipcs" className="category-card flex flex-col items-center text-center justify-center bg-[#D7EBFE] border-none w-[300px] h-[233px] rounded-xl hover:shadow">
              <img src="src/assets/flesh.svg" alt="Электронные флеш-диски" className="card-image w-[180px] h-[150px] object-contain mb-4" />
              <p className="card-title text-[17px] w-[125px] text-gray-800 hover:text-[#0061A7]">Электронные флеш-диски</p>
            </Link>
            <Link to="/catalog/minipcs" className="category-card flex flex-col items-center text-center justify-center bg-[#D7EBFE] border-none w-[300px] h-[233px] rounded-xl hover:shadow">
              <img src="src/assets/bp.svg" alt="Аксессуары для БП" className="card-image w-[180px] h-[150px] object-contain mb-4" />
              <p className="card-title text-[17px] text-gray-800 hover:text-[#0061A7]">Аксессуары для БП</p>
            </Link>
          </div>
          <div className="stranica flex justify-center items-center mt-6">
            <Link to="/complect" className="icon-link flex gap-4"><MoveLeft /> 1 - 2  </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ComplectPage2;