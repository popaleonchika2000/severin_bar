import React from 'react';

const SuppliersPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 font-sans">
      {/* Блок 1: Заголовок + картинка */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          🚀 Станьте поставщиком интернет-магазина XCOM-SHOP
        </h1>
        <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
          Откройте новые возможности для роста и развития своего бизнеса!
        </p>
        <div className="mb-10">
          <img
            src="https://yaart-web-alice-images.s3.yandex.net/fb50eec9e1c511f0a9ceb63f76f1a723:1"
            alt="Поставщики XCOM-SHOP"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
          XCOM-SHOP гарантирует своим партнерам стабильный канал продаж и разнообразные программы стимулирования, маркетинговую и техническую поддержку. 
          Мы создаем и поддерживаем партнерские отношения со всеми нашими поставщиками, а сотрудничество строим на принципах честности и прозрачности.
        </p>
      </div>

      {/* Блок 2: 8 квадратиков (2x4) */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">📊 Почему выбирают нас</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: "🏆", title: "ТОП-10 крупнейших интернет-магазинов РФ"},
            { icon: "👥", title: "Более 1 миллиона уникальных посетителей"},
            { icon: "🛒", title: "Более 300 тысяч активных клиентов"},
            { icon: "📦", title: "Собственные склады в Москве и СПб"},
            { icon: "📚", title: "Более 100 тысяч товаров"},
            { icon: "📈", title: "613 товарных групп"},
            { icon: "🚚", title: "Оперативная доставка"},
            { icon: "📢", title: "Эффективный online и offline маркетинг"}
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group">
              <div className="text-3xl mb-3 group-hover:text-blue-600 transition-colors">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Блок 3: Кнопка по центру */}
      <div className="text-center mt-12">
        <a
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
        >
          ✅ Хочу стать поставщиком
        </a>
        <p className="text-gray-600 mt-4 max-w-md mx-auto">
          Оставьте заявку — и наш менеджер свяжется с вами в течение 1 часа.
        </p>
      </div>
    </div>
  );
};

export default SuppliersPage;