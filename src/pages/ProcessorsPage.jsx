import { Link } from 'react-router-dom';
import './Processors.css';

// Данные продуктов
const products = [
  {
    id: 1,
    name: "Процессор AMD Ryzen 7 7800X3D",
    specs: "Raphael AM5, 8, 16 потоков, AM5, 4.2 ГГци 5 ГГц в режиме Turbo, 5 нм",
    reviews: 5,
    delivery: "Самовывоз сегодня",
    availability: "Доставка завтра"
  },
  {
    id: 1,
    name: "Процессор AMD Ryzen 7 7800X3D",
    specs: "Raphael AM5, 8, 16 потоков, AM5, 4.2 ГГци 5 ГГц в режиме Turbo, 5 нм",
    reviews: 5,
    delivery: "Самовывоз сегодня",
    availability: "Доставка завтра"
  },
  {
    id: 1,
    name: "Процессор AMD Ryzen 7 7800X3D",
    specs: "Raphael AM5, 8, 16 потоков, AM5, 4.2 ГГци 5 ГГц в режиме Turbo, 5 нм",
    reviews: 5,
    delivery: "Самовывоз сегодня",
    availability: "Доставка завтра"
  },
  {
    id: 1,
    name: "Процессор AMD Ryzen 7 7800X3D",
    specs: "Raphael AM5, 8, 16 потоков, AM5, 4.2 ГГци 5 ГГц в режиме Turbo, 5 нм",
    reviews: 5,
    delivery: "Самовывоз сегодня",
    availability: "Доставка завтра"
  },
  {
    id: 1,
    name: "Процессор AMD Ryzen 7 7800X3D",
    specs: "Raphael AM5, 8, 16 потоков, AM5, 4.2 ГГци 5 ГГц в режиме Turbo, 5 нм",
    reviews: 5,
    delivery: "Самовывоз сегодня",
    availability: "Доставка завтра"
  },
  {
    id: 1,
    name: "Процессор AMD Ryzen 7 7800X3D",
    specs: "Raphael AM5, 8, 16 потоков, AM5, 4.2 ГГци 5 ГГц в режиме Turbo, 5 нм",
    reviews: 5,
    delivery: "Самовывоз сегодня",
    availability: "Доставка завтра"
  },
  {
    id: 1,
    name: "Процессор AMD Ryzen 7 7800X3D",
    specs: "Raphael AM5, 8, 16 потоков, AM5, 4.2 ГГци 5 ГГц в режиме Turbo, 5 нм",
    reviews: 5,
    delivery: "Самовывоз сегодня",
    availability: "Доставка завтра"
  },
  {
    id: 1,
    name: "Процессор AMD Ryzen 7 7800X3D",
    specs: "Raphael AM5, 8, 16 потоков, AM5, 4.2 ГГци 5 ГГц в режиме Turbo, 5 нм",
    reviews: 5,
    delivery: "Самовывоз сегодня",
    availability: "Доставка завтра"
  },
  {
    id: 1,
    name: "Процессор AMD Ryzen 7 7800X3D",
    specs: "Raphael AM5, 8, 16 потоков, AM5, 4.2 ГГци 5 ГГц в режиме Turbo, 5 нм",
    reviews: 5,
    delivery: "Самовывоз сегодня",
    availability: "Доставка завтра"
  },
];

// Компонент карточки товара
const ProductCard = ({ product }) => {
  return (
    <div className="product-card bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
      {/* Изображение */}
      <img
        src="https://habrastorage.org/r/w1560/getpro/habr/upload_files/49d/246/9a5/49d2469a56d04bd0d9664bddd6b984a2.png"
        alt={product.name}
        className="w-full h-32 object-contain mb-3"
      />

      {/* Рейтинг и отзывы */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill={i < 4 ? '#0061A7' : '#ddd'}
              viewBox="0 0 16 16"
              className="mr-1"
            >
              <path d="M8 0L9.5 4.5H14l-3.5 2.5L12 12H4l1.5-5.5L2 4.5h4.5z" />
            </svg>
          ))}
          <span className="text-xs text-gray-600 ml-1">{product.reviews} Отзывов</span>
        </div>
        <button className="text-[#0061A7]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#0061A7"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2A2 2 0 0 0 0 14.586V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .707.5L8 13.5a.5.5 0 0 0 .5-.5V2a2 2 0 0 0-2-2H2z"/>
          </svg>
        </button>
      </div>

      {/* Название */}
      <h3 className="font-bold text-sm mb-2">{product.name}</h3>

      {/* Характеристики */}
      <p className="text-xs text-gray-600 mb-3">{product.specs}</p>

      {/* Информация о доставке */}
      <div className="flex justify-between text-xs text-gray-600 mb-3">
        <span>{product.delivery}</span>
        <span>{product.availability}</span>
      </div>

      {/* Кнопка */}
      <button className="w-full py-2 bg-[#0061A7] text-white rounded-lg text-sm font-medium hover:bg-[#004a80]">
        Добавить в корзину
      </button>
    </div>
  );
};

// Основной компонент страницы
const ProcessorsPage = () => {
  return (
    <div className="processors-page">
      <div className="container6">
        <div className="breadcrumbs text-gray-500 text-sm mb-4">
          Компьютерные комплектующие - Процессоры
        </div>

        {/* Заголовок */}
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Процессоры (9 товаров)</h1>

        {/* Фильтры */}
        <div className="filters flex flex-wrap gap-2 mb-4">
          {[
            'amd ryzen 7', 'intel core i5', 'intel core i7', 'intel core i9',
            '12 ядер', '16 ядер', '4 ядер', '8 ядер', '10 ядер'
          ].map((filter, idx) => (
            <button
              key={idx}
              className="bg-[#EAF5FF] text-[#0061A7] px-3 py-1 rounded text-sm hover:bg-[#D0E5FF]"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Сортировка */}
        <div className="sorting text-sm mb-6">
          Сортировать по: 
          <strong className="text-[#0061A7]"> Популярности</strong> | 
          <span className="hover:text-[#0061A7] cursor-pointer"> Цене</span> | 
          <span className="hover:text-[#0061A7] cursor-pointer"> Названию</span> | 
          <span className="hover:text-[#0061A7] cursor-pointer"> Доступности</span>
        </div>

        {/* Сетка товаров */}
        <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProcessorsPage;