import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';
import './Complect.css';

const ComplectPage = () => {
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
              <img src="src/assets/hdd.svg" alt="HDD Жесткие диски" className="card-image w-[180px] h-[150px] object-contain mb-4" />
              <p className="card-title text-[17px] text-gray-800 hover:text-[#0061A7]">HDD Жесткие диски</p>
            </Link>
            <Link to="/catalog/minipcs" className="category-card flex flex-col items-center text-center justify-center bg-[#D7EBFE] border-none w-[300px] h-[233px] rounded-xl hover:shadow">
              <img src="src/assets/sdd.svg" alt="SSD Твердотельные накопители/флеш-диски" className="card-image w-[180px] h-[150px] object-contain mb-4" />
              <p className="card-title text-[17px] text-gray-800 hover:text-[#0061A7]">SSD Твердотельные накопители/флеш-диски</p>
            </Link>
            <Link to="/catalog/minipcs" className="category-card flex flex-col items-center text-center justify-center bg-[#D7EBFE] border-none w-[300px] h-[233px] rounded-xl hover:shadow">
              <img src="src/assets/axss.svg" alt="Аксессуары для видеокарт" className="card-image w-[180px] h-[150px] object-contain mb-4" />
              <p className="card-title text-[17px] text-gray-800 hover:text-[#0061A7]">Аксессуары для видеокарт</p>
            </Link>
            <Link to="/catalog/minipcs" className="category-card flex flex-col items-center text-center justify-center bg-[#D7EBFE] border-none w-[300px] h-[233px] rounded-xl hover:shadow">
              <img src="src/assets/blockk.svg" alt="Блоки питания" className="card-image w-[180px] h-[150px] object-contain mb-4" />
              <p className="card-title text-[17px] text-gray-800 hover:text-[#0061A7]">Блоки питания</p>
            </Link>
            <Link to="/catalog/minipcs" className="category-card flex flex-col items-center text-center justify-center bg-[#D7EBFE] border-none w-[300px] h-[233px] rounded-xl hover:shadow">
              <img src="src/assets/videok.svg" alt="Видеокарты" className="card-image w-[180px] h-[150px] object-contain mb-4" />
              <p className="card-title text-[17px] text-gray-800 hover:text-[#0061A7]">Видеокарты</p>
            </Link>
            <Link to="/catalog/minipcs" className="category-card flex flex-col items-center text-center justify-center bg-[#D7EBFE] border-none w-[300px] h-[233px] rounded-xl hover:shadow">
              <img src="src/assets/zvyk.svg" alt="Звуковые карты" className="card-image w-[180px] h-[150px] object-contain mb-4" />
              <p className="card-title text-[17px] text-gray-800 hover:text-[#0061A7]">Звуковые карты</p>
            </Link>
            <Link to="/catalog/minipcs" className="category-card flex flex-col items-center text-center justify-center bg-[#D7EBFE] border-none w-[300px] h-[233px] rounded-xl hover:shadow">
              <img src="src/assets/kabel.svg" alt="Кабели" className="card-image w-[180px] h-[150px] object-contain mb-4" />
              <p className="card-title text-[17px] text-gray-800 hover:text-[#0061A7]">Кабели</p>
            </Link>
            <Link to="/catalog/minipcs" className="category-card flex flex-col items-center text-center justify-center bg-[#D7EBFE] border-none w-[300px] h-[233px] rounded-xl hover:shadow">
              <img src="src/assets/kontrol.svg" alt="Контроллеры расширения" className="card-image w-[180px] h-[150px] object-contain mb-4" />
              <p className="card-title text-[17px] text-gray-800 hover:text-[#0061A7]">Контроллеры расширения</p>
            </Link>
            <Link to="/catalog/minipcs" className="category-card flex flex-col items-center text-center justify-center bg-[#D7EBFE] border-none w-[300px] h-[233px] rounded-xl hover:shadow">
              <img src="src/assets/rack.svg" alt="Корзины/Mobil Rack/Салазки" className="card-image w-[180px] h-[150px] object-contain mb-4" />
              <p className="card-title text-[17px] text-gray-800 hover:text-[#0061A7]">Корзины/Mobil Rack/Салазки</p>
            </Link>
            <Link to="/catalog/minipcs" className="category-card flex flex-col items-center text-center justify-center bg-[#D7EBFE] border-none w-[300px] h-[233px] rounded-xl hover:shadow">
              <img src="src/assets/korpus.svg" alt="Корпуса десктоп и аксессуары" className="card-image w-[180px] h-[150px] object-contain mb-4" />
              <p className="card-title text-[17px] text-gray-800 hover:text-[#0061A7]">Корпуса десктоп и аксессуары</p>
            </Link>
            <Link to="/catalog/minipcs" className="category-card flex flex-col items-center text-center justify-center bg-[#D7EBFE] border-none w-[300px] h-[233px] rounded-xl hover:shadow">
              <img src="src/assets/kuler.svg" alt="Кулеры и системы охлаждения" className="card-image w-[180px] h-[150px] object-contain mb-4" />
              <p className="card-title text-[17px] text-gray-800 hover:text-[#0061A7]">Кулеры и системы охлаждения</p>
            </Link>
            <Link to="/catalog/minipcs" className="category-card flex flex-col items-center text-center justify-center bg-[#D7EBFE] border-none w-[300px] h-[233px] rounded-xl hover:shadow">
              <img src="src/assets/matt.svg" alt="Материнские платы" className="card-image w-[180px] h-[150px] object-contain mb-4" />
              <p className="card-title text-[17px] text-gray-800 hover:text-[#0061A7]">Материнские платы</p>
            </Link>
            <Link to="/catalog/minipcs" className="category-card flex flex-col items-center text-center justify-center bg-[#D7EBFE] border-none w-[300px] h-[233px] rounded-xl hover:shadow">
              <img src="src/assets/oper.svg" alt="Оперативная память" className="card-image w-[180px] h-[150px] object-contain mb-4" />
              <p className="card-title text-[17px] text-gray-800 hover:text-[#0061A7]">Оперативная память</p>
            </Link>
            <Link to="/catalog/minipcs" className="category-card flex flex-col items-center text-center justify-center bg-[#D7EBFE] border-none w-[300px] h-[233px] rounded-xl hover:shadow">
              <img src="src/assets/maining.svg" alt="Оборудование для майнинга" className="card-image w-[180px] h-[150px] object-contain mb-4" />
              <p className="card-title text-[17px] text-gray-800 hover:text-[#0061A7]">Оборудование для майнинга</p>
            </Link>
            <Link to="/catalog/minipcs" className="category-card flex flex-col items-center text-center justify-center bg-[#D7EBFE] border-none w-[300px] h-[233px] rounded-xl hover:shadow">
              <img src="src/assets/perexod.svg" alt="Переходники и аксессуары для HDD/SSD" className="card-image w-[180px] h-[150px] object-contain mb-4" />
              <p className="card-title text-[17px] text-gray-800 hover:text-[#0061A7]">Переходники и аксессуары для HDD/SSD</p>
            </Link>
          </div>
          <div className="stranica flex justify-center items-center mt-6">
            <Link to="/complect2" className="icon-link flex gap-4"> 1 - 2 <MoveRight /> </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ComplectPage;