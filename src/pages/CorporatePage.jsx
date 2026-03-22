import React from 'react';
import { FilePenLine, SquareMenu, Briefcase, Building, MonitorSmartphone  } from 'lucide-react';

const CorporatePage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 font-sans">
      {/* Заголовок */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
        🏢 Почему корпоративные клиенты выбирают XCOM-SHOP?
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Мы не просто магазин. Мы — ваш надёжный ИТ-партнёр, который понимает бизнес, а не только технику.
      </p>

      {/* Длинная картинка по центру */}
      <div className="mb-16">
        <img
          src="https://yaart-web-alice-images.s3.yandex.net/abfcac51e1c511f0aa9592f4cc84d051:1" 
          alt="Корпоративные клиенты"
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>

      {/* Блок 5 квадратиков */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
        {/* Квадратик 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 group">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
              <FilePenLine />
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Защита сделок</h3>
          <p className="text-gray-700 text-sm">
            На уровне вендора — без рисков, без подвохов.
          </p>
        </div>

        {/* Квадратик 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 group">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
              < SquareMenu />
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Специальные условия</h3>
          <p className="text-gray-700 text-sm">
            Скидки, льготы, гибкие сроки оплаты.
          </p>
        </div>

        {/* Квадратик 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 group">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
              <Briefcase />
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Проектное оборудование</h3>
          <p className="text-gray-700 text-sm">
            Под ключ — от проектирования до запуска.
          </p>
        </div>

        {/* Квадратик 4 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 group">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
              < Building />
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Тендеры и лизинг</h3>
          <p className="text-gray-700 text-sm">
            Участвуем в закупках. Предлагаем лизинг и рассрочку.
          </p>
        </div>

        {/* Квадратик 5 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 group">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
              <MonitorSmartphone />
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Поддержка и внедрение</h3>
          <p className="text-gray-700 text-sm">
            От консультации до техподдержки — мы рядом.
          </p>
        </div>
      </div>

      {/* Три шага к сотрудничеству */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">🚀 Три простых шага к сотрудничеству с XCOM-SHOP</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Шаг 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-700 font-bold text-xl">1</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Заполните заявку на сайте</h3>
            <p className="text-gray-700">
              Укажите ваши потребности — мы свяжемся с вами в течение 1 часа.
            </p>
          </div>

          {/* Шаг 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-700 font-bold text-xl">2</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Обсудите с менеджером</h3>
            <p className="text-gray-700">
              Цены, условия поставки, сроки — всё под ваш проект.
            </p>
          </div>

          {/* Шаг 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-indigo-700 font-bold text-xl">3</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Сделайте первый заказ</h3>
            <p className="text-gray-700">
              Или просто отправьте запрос на <a href="mailto:zakaz@xcom.ru" className="text-blue-600 hover:text-blue-800 underline">zakaz@xcom.ru</a>.
            </p>
          </div>
        </div>
      </div>

      {/* Финальный блок — приятное предложение */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-sm text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🎁 Для новых корпоративных клиентов — бонус!</h2>
        <p className="text-gray-700 mb-6">
          Первый заказ — со скидкой 5%.  
          А ещё — персональный менеджер, который будет решать все вопросы за вас.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Начать сотрудничество
        </button>
      </div>
    </div>
  );
};

export default CorporatePage;