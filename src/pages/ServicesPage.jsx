import React from 'react';

const ServicesPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 font-sans">
      {/* Заголовок */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">🛠️ Наши услуги — для бизнеса и дома</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Мы не просто продаём технику — мы помогаем её использовать, настраивать и поддерживать. От проекта до мелкого ремонта.
      </p>

      {/* Сетка услуг */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Услуга 1: Сетевой отдел */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden group">
          <div className="bg-blue-50 p-6 flex justify-center">
            <img
              src="https://yaart-web-alice-images.s3.yandex.net/3d98f476e1c311f09774161a2f06c182:1"
              alt="Сетевой шкаф"
              className="h-32 w-auto object-contain group-hover:scale-105 transition-transform rounded-full"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Сетевой отдел</h2>
            <p className="text-gray-700 mb-7">
              Сетевые решения X-Com — проектирование, монтаж и настройка электросетей, связи и систем безопасности.
            </p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Подробнее
            </button>
          </div>
        </div>

        {/* Услуга 2: Проектный отдел */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden group">
          <div className="bg-indigo-50 p-6 flex justify-center">
            <img
              src="https://yaart-web-alice-images.s3.yandex.net/7c03b75de1c311f0932fea6bc7508477:1"
              alt="Проектный отдел"
              className="h-32 w-auto object-contain group-hover:scale-105 transition-transform rounded-full"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Проектный отдел</h2>
            <p className="text-gray-700 mb-13">
              Проектные решения X-Com — поставка, проектирование и финансирование IT-оборудования.
            </p>
            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
              Подробнее
            </button>
          </div>
        </div>

        {/* Услуга 3: Установка ПО и модернизация ПК */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden group">
          <div className="bg-green-50 p-6 flex justify-center">
            <img
              src="https://yaart-web-alice-images.s3.yandex.net/c595f2bce1c311f0a7d0268986333344:1"
              alt="Установка ПО"
              className="h-32 w-auto object-contain group-hover:scale-105 transition-transform rounded-full"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Установка ПО и модернизация ПК</h2>
            <p className="text-gray-700 mb-6">
              IT-услуги X-Com — установка, настройка и модернизация техники и программного обеспечения.
            </p>
            <button className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
              Подробнее
            </button>
          </div>
        </div>

        {/* Услуга 4: Техподдержка и аутсорсинг */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden group">
          <div className="bg-yellow-50 p-6 flex justify-center">
            <img
              src="https://yaart-web-alice-images.s3.yandex.net/17082b46e1c411f0a62a4affe89777e2:1"
              className="h-32 w-auto object-contain group-hover:scale-105 transition-transform rounded-full"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Техническая поддержка и аутсорсинг офисной печати</h2>
            <p className="text-gray-700 mb-6">
              IT-сервис X-Com — обслуживание, ремонт и настройка компьютерной и офисной техники.
            </p>
            <button className="w-full bg-yellow-600 text-white py-2 rounded-lg font-medium hover:bg-yellow-700 transition-colors">
              Подробнее
            </button>
          </div>
        </div>

        {/* Услуга 5: Установка сплит-систем */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden group">
          <div className="bg-purple-50 p-6 flex justify-center">
            <img
              src="https://yaart-web-alice-images.s3.yandex.net/72a362a0e1c411f0a12ba21322697f6f:1"
              alt="Сплит-система"
              className="h-32 w-auto object-contain group-hover:scale-105 transition-transform rounded-full"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Установка сплит-систем</h2>
            <p className="text-gray-700 mb-13">
              Монтаж кондиционеров X-Com — профессиональная установка сплит-систем с гарантией качества.
            </p>
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
              Подробнее
            </button>
          </div>
        </div>
      </div>

      {/* Финальный блок — почему выбирают нас */}
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-sm">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Почему выбирают XCOM-SHOP?</h2>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Опыт более 20 лет</li>
              <li>✅ Команда сертифицированных специалистов</li>
              <li>✅ Гарантия на все работы</li>
              <li>✅ Индивидуальный подход к каждому клиенту</li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://www.xcom-shop.ru/local/templates/shop2022/images/pages/about/img-foot-max.svg"
              alt="Команда XCOM-SHOP"
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;