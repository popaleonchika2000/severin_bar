import React from 'react';
import { Link } from 'react-router-dom';
import { Heart} from 'lucide-react';
import './Product.css';

// Данные продукта (в реальном проекте — из API)
const product = {
    id: 10,
    name: "Ноутбук Digma EVE C4800 14, Celeron, 8 Гб RAM, 256 Гб SSD, UHD Graphics 600, Серый",
    images: [
        "https://ainex.ru/upload/iblock/f20/0vmz00pxpbxg2yoypdu4nbgyo0knr9mv.jpg",
        "https://micro-line.ru/images/thumbnails/1000/1001/detailed/7803/6148680.png",
        "https://ainex.ru/upload/iblock/2a8/mckw8v6zf5sci6491wycuqeyuxa0ayoa.jpg"
    ],
    rating: 4.7,
    reviews: 105,
    questions: 12,
    price: "18 499 ₽",
    specs: {
        "Диагональ/разрешение": "14\", Full HD (1920 x 1080)",
        "Процессор": "Intel, Celeron, N4020, 1.1 ГГц",
        "Количество ядер": "2 ядра",
        "Оперативная память": "8 ГБ",
        "Видеокарта": "UHD Graphics 600",
        "Объем SSD": "256 ГБ",
        "Код товара": "1096109",
        "Артикул": "DN14CN-8CXW01"
    },
    description: "Делайте то, что нравится, и делитесь своими достижениями с помощью великолепных возможностей этого ноутбука.",
    characteristics: {
        "Сенсорный экран": "Нет",
        "Тип матрицы": "IPS",
        "Диагональ экрана": "14\"",
        "Разрешение экрана": "Full HD (1920 x 1080)",
        "Производитель процессора": "Intel",
        "Модель процессора": "N4020",
        "Модельный ряд процессора": "Celeron",
        "Объем оперативной памяти": "8 ГБ",
        "Тип графического адаптера": "Интегрированный",
        "Производитель видеокарты": "Intel",
        "Модель видеокарты": "UHD Graphics 600",
        "Объем твердотельных накопителей (SSD)": "256 ГБ",
        "Материал корпуса": "Пластик",
        "Вес": "1.25 кг",
        "Беспроводная связь Bluetooth": "Да",
        "Беспроводная связь WiFi": "Да",
        "Порт Ethernet (RJ45)": "Нет",
        "Операционная система": "Windows 11 Профессиональная",
        "Подсветка клавиш": "Нет",
        "Тип": "Для учебы"
    }
};

// Компонент миниатюры
const Thumbnail = ({ src, onClick, isActive }) => {
    return (
        <div
            className={`thumbnail w-20 h-20 border cursor-pointer rounded-md overflow-hidden ${isActive ? 'border-[#0061A7]' : 'border-gray-300'}`}
            onClick={onClick}
        >
            <img src={src} alt="Миниатюра" className="w-full h-full object-cover" />
        </div>
    );
};

// Компонент вкладок
const Tab = ({ label, isActive, onClick }) => {
    return (
        <button
            className={`tab px-4 py-2 font-medium text-sm ${isActive ? 'text-[#0061A7] border-b-2 border-[#0061A7]' : 'text-gray-600'}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

// Основной компонент страницы
const ProductPage = () => {
    const [activeTab, setActiveTab] = React.useState('description');

    return (
        <div className="product-page">
            <div className="container11">

                {/* Хлебные крошки */}
                <div className="breadcrumbs text-gray-500 text-sm mb-4">
                    Компьютеры и ноутбуки · Ноутбуки · Диагональ от 15" до 16,1" · DIGMA ·Ноутбук Digma EVE C4800 14 ", Celeron, 8 Гб RAM, 256 Гб SSD, UHD Graphics 600, Серый"
                </div>

                {/* Заголовок */}
                <h1 className="text-xl font-bold text-gray-900 mb-4">{product.name}</h1>

                {/* Главный блок: изображения + характеристики */}
                <div className="product-main flex flex-col lg:flex-row gap-6 mb-8">
                    {/* Левая часть: миниатюры + основное изображение */}
                    <div className="product-images w-full lg:w-1/2">
                        <div className="main-image mb-4">
                            <img
                                src={product.images[0]}
                                alt={product.name}
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                        <div className="thumbnails flex gap-2">
                            {product.images.map((img, idx) => (
                                <Thumbnail key={idx} src={img} isActive={idx === 0} />
                            ))}
                        </div>
                    </div>

                    {/* Правая часть: характеристики, цена, кнопки */}
                    <div className="product-info w-[514px] lg:w-1/2">
                        <div className="specs-box bg-white border text-[15px] border-gray-200 rounded-lg mb-5">
                            <div className="flex justify-between mt-5 ml-4">
                                <span>Диагональ/разрешение: {product.specs["Диагональ/разрешение"]}</span>
                            </div>
                            <div className="flex justify-between ml-4">
                                <span>Процессор: {product.specs["Процессор"]}</span>
                            </div>
                            <div className="flex justify-between ml-4">
                                <span>Количество ядер: {product.specs["Количество ядер"]}</span>
                            </div>
                            <div className="flex justify-between ml-4">
                                <span>Оперативная память: {product.specs["Оперативная память"]}</span>
                            </div>
                            <div className="flex justify-between ml-4">
                                <span>Видеокарта: {product.specs["Видеокарта"]}</span>
                            </div>
                            <div className="flex justify-between ml-4 mb-3">
                                <span>Объем SSD: {product.specs["Объем SSD"]}</span>
                            </div>
                            <div className="flex gap-18 ml-4 mb-3">
                                <span>Код товара: {product.specs["Код товара"]}</span>
                                <span>Артикул: {product.specs["Артикул"]}</span>
                            </div>
                            <Link to="#" className="text-[#0061A7] text-sm ml-4 mb-3">Все характеристики →</Link>
                        </div>

                        {/* Рейтинг, вопросы, избранное */}
                        <div className="product-actions flex items-center gap-4 mb-4">
                            <div className="flex items-center border w-[163px] h-[31px] rounded-lg flex justify-center items-center">
                                <span className="text-yellow-500 text-sm">★</span>
                                <span className="ml-1 text-sm ">{product.rating} | {product.reviews} отзывов</span>
                            </div>
                            <button className="bg-gray-100 text-sm border w-[163px] h-[31px] rounded-lg flex justify-center items-center">Вопрос-ответ {product.questions}</button>
                            <button className="bg-gray-100 text-sm border w-[163px] h-[31px] rounded-lg flex justify-center items-center gap-1">
                                В избранное <Heart color="#0061A7"/>
                            </button>
                        </div>

                        {/* Цена и кнопка купить */}
                        <div className="price-and-buy flex gap-4">
                            <span className="text-xl font-bold border w-[163px] h-[45px] rounded-lg flex justify-center items-center">{product.price}</span>
                            <button className="bg-[#0061A7] text-white w-[134px] h-[45px] rounded-lg text-sm font-medium hover:bg-[#004a80]">
                                Купить
                            </button>
                        </div>
                    </div>
                </div>

                {/* Вкладки: Описание / Характеристики / Отзывы */}
                <div className="product-tabs mb-6">
                    <div className="flex text-[20px] color-black border-b border-gray-300 gap-5">
                        <Tab label="Описание" isActive={activeTab === 'description'} onClick={() => setActiveTab('description')} />
                        <Tab label="Характеристики" isActive={activeTab === 'characteristics'} onClick={() => setActiveTab('characteristics')} />
                        <Tab label="Отзывы" isActive={activeTab === 'reviews'} onClick={() => setActiveTab('reviews')} />
                    </div>
                    <div className="tab-content mt-4">
                        {activeTab === 'description' && (
                            <div className="description">
                                <p className="text-gray-800 mb-4">{product.description}</p>
                                {/* Можно добавить больше текста */}
                            </div>
                        )}
                        {activeTab === 'characteristics' && (
                            <div className="characteristics grid grid-cols-2 gap-4">
                                {Object.entries(product.characteristics).map(([key, value]) => (
                                    <div key={key} className="flex justify-between text-sm">
                                        <span className="text-gray-600">{key}</span>
                                        <span className="text-[#0061A7]">{value}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                        {activeTab === 'reviews' && (
                            <div className="reviews">
                                <p className="text-gray-800">Здесь будут отзывы.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Популярные категории */}
                <section className="home-section">
                    <h2 className="section-title text-[30px] font-medium text-gray-900 text-center">Популярные категории</h2>
                    <div className="category-grid grid sm:grid-cols-3 md:grid-cols-5 gap-8">
                        <Link to="/catalog/notebooks" className="constructor-card flex flex-col items-center text-center bg-[#EAF5FF] border-none w-[215px] h-[200px] rounded-2xl hover:shadow-lg transition-shadow">
                            <img src="src/assets/image5.svg" alt="Ноутбуки" className="constructor-image w-[150px] h-[125px] object-contain mb-4" />
                            <p className="nav-link text-[20px] text-gray-800 hover:text-[#0061A7]">Ноутбуки</p>
                        </Link>
                        <Link to="/catalog/smartphones" className="constructor-card flex flex-col items-center text-center bg-[#EAF5FF] border-none w-[215px] h-[200px] rounded-2xl hover:shadow-lg transition-shadow">
                            <img src="src/assets/image6.svg" alt="Смартфоны" className="constructor-image w-[150px] h-[125px] object-contain mb-4" />
                            <p className="nav-link text-[20px] text-gray-800 hover:text-[#0061A7]">Смартфоны</p>
                        </Link>
                        <Link to="/catalog/monitors" className="constructor-card flex flex-col items-center text-center bg-[#EAF5FF] border-none w-[215px] h-[200px] rounded-2xl hover:shadow-lg transition-shadow">
                            <img src="src/assets/image7.svg" alt="Мониторы" className="constructor-image w-[150px] h-[125px] object-contain mb-4" />
                            <p className="nav-link text-[20px] text-gray-800 hover:text-[#0061A7]">Мониторы</p>
                        </Link>
                        <Link to="/catalog/video-cards" className="constructor-card flex flex-col items-center text-center bg-[#EAF5FF] border-none w-[215px] h-[200px] rounded-2xl hover:shadow-lg transition-shadow">
                            <img src="src/assets/image8.svg" alt="Видеокарты" className="constructor-image w-[150px] h-[125px] object-contain mb-4" />
                            <p className="nav-link text-[20px] text-gray-800 hover:text-[#0061A7]">Видеокарты</p>
                        </Link>
                        <Link to="/catalog/processors" className="constructor-card flex flex-col items-center text-center bg-[#EAF5FF] border-none w-[215px] h-[200px] rounded-2xl hover:shadow-lg transition-shadow">
                            <img src="src/assets/image 9.svg" alt="Процессоры" className="constructor-image w-[150px] h-[125px] object-contain mb-4" />
                            <p className="nav-link text-[20px] text-gray-800 hover:text-[#0061A7]">Процессоры</p>
                        </Link>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default ProductPage;