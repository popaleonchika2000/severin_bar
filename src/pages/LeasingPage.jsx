import React from 'react';

const LeasingPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 font-sans">
      {/* Заголовок */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          📊 Лизинг IT-Оборудования
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Получите необходимое для развития бизнеса IT-оборудование и оплачивайте его равномерными платежами на срок до 3 лет. 
          Выбранные вами товары выкупает лизинговая компания и сдает вам в аренду за ежемесячный платёж. 
          По истечению срока договора лизинга товары могут перейти вам в собственность. 
          Все условия между вами и лизинговой компанией обсуждаются индивидуально.
        </p>
      </div>

      {/* Преимущества */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">✨ Преимущества лизинга</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { icon: "⚡", title: "Быстрое одобрение заявки" },
            { icon: "📉", title: "Платежи в себестоимость" },
            { icon: "🔒", title: "Без залогов" },
            { icon: "⏱️", title: "Ускоренная амортизация" },
            { icon: "📅", title: "Гибкий график платежей" },
            { icon: "💰", title: "Экономия на налогах" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center border border-gray-100">
              <div className="text-2xl mb-2">{item.icon}</div>
              <p className="text-sm text-gray-700">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Лизинг в цифрах */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">📈 Лизинг в цифрах</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { value: "От 10%", label: "авансовый платеж" },
            { value: "100 тыс. – 20 млн ₽", label: "сумма сделки" },
            { value: "6 – 36 мес.", label: "срок лизинга" },
            { value: "От 3 часов", label: "одобрение заявки" },
            { value: "От 10%", label: "ставка" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center group">
              <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors">
                {item.value}
              </div>
              <p className="text-gray-700">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Кнопка — по центру */}
      <div className="text-center">
        <a
          className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          📝 Заказать лизинг
        </a>
        <p className="text-gray-600 mt-4 max-w-md mx-auto">
          Оставьте заявку — и наш специалист свяжется с вами в течение 1 часа.
        </p>
      </div>
    </div>
  );
};

export default LeasingPage;