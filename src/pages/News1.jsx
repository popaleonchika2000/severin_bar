// MenuPage.jsx
import React from 'react';

const News1 = () => {
  const alcoholicCocktails = [
    {
      id: 1,
      name: "Severin Sunset",
      author: "Анна Семелье",
      description: "Нежный закат в бокале сливочная текстура с фруктовой кислинкой и тонким цветочным шлейфом. Подаётся с долькой апельсина и веточной розмарина. Идеален для вечерних встреч.",
      ingredients: [
        "Джин (50 мл)",
        "Персиковый ликёр (20 мл)",
        "Сок апельсина (60 мл)",
        "Сироп маракуйи (15 мл)",
        "Белок яйца (10 мл)",
        "Лёд в кубиках"
      ]
    },
    {
      id: 2,
      name: "Midnight Espresso",
      author: "Марко Бартендер",
      description: "Бодрящий дуэт кофе и рома с бархатистой пенкой. Для тех, кто ценит глубину вкуса и не боится ночных приключений. Украшается кофейными зёрнами и шоколадной крошкой.",
      ingredients: [
        "Тёмный ром (40 мл)",
        "Холодный эспрессо (30 мл)",
        "Кофейный ликёр (20 мл)",
        "Ванильный сироп (10 мл)",
        "Сливки 10% (20 мл)",
        "Лёд фраппе"
      ]
    }
  ];

  const nonAlcoholicCocktails = [
    {
      id: 1,
      name: "Tropical Breeze",
      author: "Елена Шеф-Борисова",
      description: "Освежающий тропический бриз без градуса. Сладкий манго, кремовый кокос и цитрусовая свежесть создают гармонию лета. Подаётся в высоком бокале с соломинкой и цветком орхидеи.",
      ingredients: [
        "Ананасовый сок (80 мл)",
        "Кокосовое молоко (40 мл)",
        "Пюре манго (30 мл)",
        "Сок лайма (15 мл)",
        "Мята (3–4 листика)",
        "Дроблённый лёд"
      ]
    },
    {
      id: 2,
      name: "Berry Zen",
      author: "Алексей Миколаев",
      description: "Спокойствие в каждом глотке: ягодная симфония с цветочными нотами бузины и лёгкой газировкой. Идеальный выбор для дневного отдыха или дружеской беседы. Украшается шпажкой с ягодами и листиком мяты.",
      ingredients: [
        "Ягодный микс (малина, ежевика, черника — 100 г)",
        "Содовая (100 мл)",
        "Сироп бузины (20 мл)",
        "Лимонный сок (10 мл)",
        "Лёд в кубиках",
        "Свежие ягоды для декора"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white text-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-900 to-amber-800 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center py-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-widest mb-4">SEVERIN</h1>
            <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-lg font-semibold">
              <a href="/news" className="hover:text-amber-200 transition-colors">НОВОСТИ</a>
              <a href="/contacts" className="hover:text-amber-200 transition-colors">КОНТАКТЫ</a>
              <a href="/about" className="hover:text-amber-200 transition-colors">О НАС</a>
              <a href="/menu" className="text-amber-300 underline underline-offset-4">МЕНЮ</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 tracking-wide mb-4">
              АВТОРСКИЕ КОКТЕЙЛИ
            </h2>
            <div className="w-32 h-1 bg-amber-600 mx-auto rounded-full"></div>
          </div>

          {/* Alcoholic Cocktails Section */}
          <section className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 pb-4 border-b-2 border-amber-200">
              Алкогольные коктейли
            </h3>

            <div className="space-y-12">
              {alcoholicCocktails.map((cocktail) => (
                <div key={cocktail.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div className="mb-4 md:mb-0">
                        <h4 className="text-2xl font-bold text-amber-800 mb-2">{cocktail.name}</h4>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-600 italic">Автор:</span>
                          <span className="font-semibold text-amber-700">{cocktail.author}</span>
                        </div>
                      </div>
                      <div className="bg-amber-100 text-amber-800 px-4 py-2 rounded-lg font-bold">
                        Алкогольный
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                      {cocktail.description}
                    </p>

                    <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                      <h5 className="font-bold text-lg text-gray-800 mb-4 flex items-center">
                        <span className="mr-2">📋</span>
                        Состав:
                      </h5>
                      <ul className="space-y-3">
                        {cocktail.ingredients.map((ingredient, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-amber-600 mr-2 mt-1">•</span>
                            <span className="text-gray-700">{ingredient}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Divider */}
                  {cocktail.id < alcoholicCocktails.length && (
                    <div className="px-8">
                      <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Non-Alcoholic Cocktails Section */}
          <section>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 pb-4 border-b-2 border-amber-200">
              Безалкогольные коктейли
            </h3>

            <div className="space-y-12">
              {nonAlcoholicCocktails.map((cocktail) => (
                <div key={cocktail.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div className="mb-4 md:mb-0">
                        <h4 className="text-2xl font-bold text-amber-800 mb-2">{cocktail.name}</h4>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-600 italic">Автор:</span>
                          <span className="font-semibold text-amber-700">{cocktail.author}</span>
                        </div>
                      </div>
                      <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-bold">
                        Безалкогольный
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                      {cocktail.description}
                    </p>

                    <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                      <h5 className="font-bold text-lg text-gray-800 mb-4 flex items-center">
                        <span className="mr-2">📋</span>
                        Состав:
                      </h5>
                      <ul className="space-y-3">
                        {cocktail.ingredients.map((ingredient, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-600 mr-2 mt-1">•</span>
                            <span className="text-gray-700">{ingredient}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Divider */}
                  {cocktail.id < nonAlcoholicCocktails.length && (
                    <div className="px-8">
                      <div className="h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Cocktail Categories Navigation */}
          <div className="mt-16 bg-gradient-to-r from-amber-100 to-white rounded-2xl p-8 border border-amber-200">
            <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">
              Другие категории коктейлей
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-semibold">
                КЛАССИЧЕСКИЕ
              </button>
              <button className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors font-semibold">
                СЕЗОННЫЕ
              </button>
              <button className="px-6 py-3 bg-amber-400 text-white rounded-lg hover:bg-amber-500 transition-colors font-semibold">
                ДЕСЕРТНЫЕ
              </button>
              <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold">
                ВИРДЖИН
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <a href="/" className="hover:text-amber-200 transition-colors">Главная</a>
              <a href="/news" className="hover:text-amber-200 transition-colors">Новости</a>
              <a href="/contacts" className="hover:text-amber-200 transition-colors">Контакты</a>
              <a href="/booking" className="hover:text-amber-200 transition-colors">Бронирование</a>
              <a href="/menu" className="text-amber-300">Меню</a>
            </div>
            <p className="text-amber-300/80 text-sm">
              © {new Date().getFullYear()} SEVERIN. Все авторские коктейли защищены правами.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default News1;