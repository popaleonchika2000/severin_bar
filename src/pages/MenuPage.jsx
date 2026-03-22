// MenuCocktailsPage.jsx
import React, { useState } from 'react';
import { Search, Filter, Star, TrendingUp } from 'lucide-react';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Все коктейли в одном массиве
  const allCocktails = [
    // Классические
    {
      id: 1,
      name: "ГОЛУБАЯ ЛАГУНА",
      ingredients: "Сироп «Блю Кюрасао», спрайт, сок лимона, лед.",
      price: "450₽",
      category: "classic",
      categoryName: "Классические"
    },
    {
      id: 2,
      name: "ДАЙКИРИ",
      ingredients: "Сок лайма, клубника, сахар, лёд",
      price: "380₽",
      category: "classic",
      categoryName: "Классические"
    },
    {
      id: 3,
      name: "ОЛД ФЕШЕН",
      ingredients: "Вода, лед, безалкогольный биттер, тростниковый сахар в кубиках, коктейльная вишня, апельсиновая цедра",
      price: "590₽",
      category: "classic",
      categoryName: "Классические"
    },
    // Популярные
    {
      id: 4,
      name: "МОХИТО",
      ingredients: "Сок лайма, мята, сахар (белый тростниковый), газированная вода, лёд в кубиках",
      price: "390₽",
      category: "popular",
      categoryName: "Популярные"
    },
    {
      id: 5,
      name: "КЛУБНИЧНОЕ МОХИТО",
      ingredients: "Клубника, лайм, мята,  сахарный сироп, газированная вода, лёд в кубиках",
      price: "420₽",
      category: "popular",
      categoryName: "Популярные"
    },
    {
      id: 6,
      name: "БАМБЛ",
      ingredients: "Эспрессо, апельсиновый сок, карамельный сироп, лёд",
      price: "330₽",
      category: "popular",
      categoryName: "Популярные"
    },
    // Авторские
    {
      id: 7,
      name: "НЕОНОВЫЙ ЗАКАТ",
      ingredients: "Минералка, сироп маракуйи, лайм, спрайт, голубика",
      price: "520₽",
      category: "signature",
      categoryName: "Авторские"
    },
    {
      id: 8,
      name: "ФИОЛЕТОВЫЙ ТУМАН",
      ingredients: "Сироп фиалки, лимон, тоник, ежевика",
      price: "550₽",
      category: "signature",
      categoryName: "Авторские"
    },
    {
      id: 9,
      name: "КОНСУЭЛО",
      ingredients: "Кокосовое молоко, ананас, мята, карамель",
      price: "580₽",
      category: "signature",
      categoryName: "Авторские"
    },
    // Сезонные
    {
      id: 10,
      name: "ОСЕННИЙ ДЖАЗ",
      ingredients: "Яблочный сок, корица, имбирь, апельсин",
      price: "540₽",
      category: "seasonal",
      categoryName: "Сезонные"
    },
    {
      id: 11,
      name: "ЗИМНЯЯ ВИШНЯ",
      ingredients: "Вишневый сок, корица, гвоздика, мед",
      price: "530₽",
      category: "seasonal",
      categoryName: "Сезонные"
    }
  ];

  const categories = [
    { id: 'all', name: 'Все коктейли' },
    { id: 'classic', name: 'Классические' },
    { id: 'popular', name: 'Популярные' },
    { id: 'signature', name: 'Авторские' },
    { id: 'seasonal', name: 'Сезонные' }
  ];

  // Фильтрация по категории и поисковому запросу
  const filteredCocktails = allCocktails.filter(cocktail => {
    // Фильтр по категории
    const matchesCategory = activeCategory === 'all' || cocktail.category === activeCategory;
    
    // Фильтр по поиску (регистронезависимый)
    const matchesSearch = searchQuery === '' || 
      cocktail.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cocktail.ingredients.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Группировка коктейлей по категориям для отображения
  const classicCocktails = allCocktails.filter(c => c.category === 'classic');
  const popularCocktails = allCocktails.filter(c => c.category === 'popular');
  const signatureCocktails = allCocktails.filter(c => c.category === 'signature');
  const seasonalCocktails = allCocktails.filter(c => c.category === 'seasonal');

  return (
    <div className="min-h-screen bg-gradient-to-b from-fuchsia-950 via-purple-950 to-black text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-pink-600 text-white shadow-[0_0_30px_rgba(255,0,255,0.5)]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center py-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-widest mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-200 via-pink-200 to-purple-200 drop-shadow-[0_0_15px_rgba(255,0,255,0.7)]">
              SEVERIN
            </h1>
            <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-lg font-semibold">
              <a href="/" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">ГЛАВНАЯ</a>
              <a href="/news" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">НОВОСТИ</a>
              <a href="/contacts" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">КОНТАКТЫ</a>
              <a href="/about" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">О НАС</a>
              <a href="/menu" className="text-fuchsia-300 underline underline-offset-4 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">МЕНЮ</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="relative py-8 md:py-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-fuchsia-300 drop-shadow-[0_0_10px_rgba(255,0,255,0.5)] tracking-wide mb-4">
              МЕНЮ КОКТЕЙЛЕЙ
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-fuchsia-400 to-purple-400 mx-auto rounded-full mb-6 shadow-[0_0_10px_rgba(255,0,255,0.5)]"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              От классических рецептов до современных авторских миксов. Каждый коктейль — произведение искусства наших барменов в неоновом сиянии.
            </p>
          </div>

          <div className="mb-10 bg-gradient-to-br from-fuchsia-900/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-6 shadow-[0_0_30px_rgba(255,0,255,0.3)] border border-fuchsia-500/30">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-fuchsia-400 drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]" size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Поиск коктейлей по названию или ингредиентам..."
                  className="w-full pl-12 pr-4 py-3 bg-fuchsia-950/50 border-2 border-fuchsia-500/30 rounded-xl focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-500/50 focus:outline-none transition-colors text-white placeholder-gray-400"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="text-fuchsia-400 drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]" size={20} />
                <span className="font-semibold text-gray-300">Фильтр:</span>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white shadow-[0_0_20px_rgba(255,0,255,0.5)] transform scale-105'
                      : 'bg-transparent text-gray-300 border border-fuchsia-500/30 hover:bg-fuchsia-500/10 hover:border-fuchsia-400/50 backdrop-blur-sm'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Результаты поиска/фильтрации */}
          {searchQuery && (
            <div className="mb-6 text-center">
              <p className="text-fuchsia-300">
                Найдено коктейлей: {filteredCocktails.length}
              </p>
            </div>
          )}

          {/* Отображение коктейлей в зависимости от выбранной категории */}
          {activeCategory === 'all' && !searchQuery ? (
            // Показываем все категории
            <div className="space-y-12">
              {/* Классические */}
              <div>
                <div className="flex items-center mb-6">
                  <Star className="text-fuchsia-400 mr-3 drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]" size={24} />
                  <h3 className="text-2xl font-bold text-fuchsia-300 drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]">Классические коктейли</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {classicCocktails.map(cocktail => (
                    <CocktailCard key={cocktail.id} cocktail={cocktail} />
                  ))}
                </div>
              </div>

              {/* Популярные */}
              <div>
                <div className="flex items-center mb-6">
                  <TrendingUp className="text-purple-400 mr-3 drop-shadow-[0_0_8px_rgba(128,0,255,0.5)]" size={24} />
                  <h3 className="text-2xl font-bold text-purple-300 drop-shadow-[0_0_8px_rgba(128,0,255,0.5)]">Популярные коктейли</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {popularCocktails.map(cocktail => (
                    <CocktailCard key={cocktail.id} cocktail={cocktail} />
                  ))}
                </div>
              </div>

              {/* Авторские */}
              <div>
                <div className="flex items-center mb-6">
                  <Star className="text-pink-400 mr-3 drop-shadow-[0_0_8px_rgba(255,105,180,0.5)]" size={24} />
                  <h3 className="text-2xl font-bold text-pink-300 drop-shadow-[0_0_8px_rgba(255,105,180,0.5)]">Авторские коктейли</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {signatureCocktails.map(cocktail => (
                    <CocktailCard key={cocktail.id} cocktail={cocktail} />
                  ))}
                </div>
              </div>

              {/* Сезонные */}
              <div>
                <div className="flex items-center mb-6">
                  <Star className="text-indigo-400 mr-3 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]" size={24} />
                  <h3 className="text-2xl font-bold text-indigo-300 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]">Сезонные коктейли</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {seasonalCocktails.map(cocktail => (
                    <CocktailCard key={cocktail.id} cocktail={cocktail} />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            // Показываем отфильтрованные коктейли
            <div>
              {filteredCocktails.length > 0 ? (
                <div>
                  <h3 className="text-2xl font-bold text-center mb-8 text-fuchsia-300 drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]">
                    {activeCategory !== 'all' 
                      ? categories.find(c => c.id === activeCategory)?.name 
                      : 'Результаты поиска'}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCocktails.map(cocktail => (
                      <CocktailCard key={cocktail.id} cocktail={cocktail} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 bg-gradient-to-br from-fuchsia-900/40 to-purple-900/40 backdrop-blur-sm rounded-2xl border border-fuchsia-500/30">
                  <p className="text-2xl text-fuchsia-300 drop-shadow-[0_0_8px_rgba(255,0,255,0.5)] mb-4">
                    😢 Коктейли не найдены
                  </p>
                  <p className="text-gray-400">
                    Попробуйте изменить параметры поиска или выберите другую категорию
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Additional Information */}
          <div className="mt-16 bg-gradient-to-r from-fuchsia-900/50 via-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-[0_0_30px_rgba(255,0,255,0.3)] border border-fuchsia-500/30">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-4 drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]">🍹</div>
                <h4 className="font-bold text-lg mb-2 text-fuchsia-300 drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">Свежие ингредиенты</h4>
                <p className="text-gray-300 text-sm">
                  Используем только свежие фрукты и качественные напитки
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4 drop-shadow-[0_0_10px_rgba(128,0,255,0.5)]">⏱️</div>
                <h4 className="font-bold text-lg mb-2 text-purple-300 drop-shadow-[0_0_5px_rgba(128,0,255,0.5)]">Быстрое приготовление</h4>
                <p className="text-gray-300 text-sm">
                  Среднее время приготовления коктейля — 3-5 минут
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4 drop-shadow-[0_0_10px_rgba(255,105,180,0.5)]">🎯</div>
                <h4 className="font-bold text-lg mb-2 text-pink-300 drop-shadow-[0_0_5px_rgba(255,105,180,0.5)]">Идеальные пропорции</h4>
                <p className="text-gray-300 text-sm">
                  Точное соблюдение рецептуры для идеального вкуса
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <a 
              href="/booking" 
              className="inline-block px-10 py-4 bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white text-xl font-bold rounded-2xl hover:from-fuchsia-600 hover:to-purple-600 transition-all shadow-[0_0_20px_rgba(255,0,255,0.5)] hover:shadow-[0_0_30px_rgba(255,0,255,0.8)] transform hover:-translate-y-1"
            >
              ЗАБРОНИРОВАТЬ СТОЛ
            </a>
            <p className="text-gray-400 mt-4">
              Или позвоните для заказа: <span className="text-fuchsia-300 drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">+7 (924) 179-41-72</span>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-fuchsia-950 via-purple-950 to-pink-950 border-t border-fuchsia-500/30 py-8 shadow-[0_-10px_30px_rgba(255,0,255,0.3)]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <a href="/" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">Главная</a>
              <a href="/news" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">Новости</a>
              <a href="/contacts" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">Контакты</a>
              <a href="/about" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">О нас</a>
              <a href="/menu" className="text-fuchsia-300 drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">Меню</a>
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} SEVERIN. Все цены указаны в рублях. Сияем неоном для вас!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Компонент карточки коктейля
const CocktailCard = ({ cocktail }) => {
  const getCategoryColor = (category) => {
    switch(category) {
      case 'classic': return 'from-fuchsia-500/30 to-purple-500/30 text-fuchsia-300 border-fuchsia-500/30';
      case 'popular': return 'from-purple-500/30 to-pink-500/30 text-purple-300 border-purple-500/30';
      case 'signature': return 'from-pink-500/30 to-rose-500/30 text-pink-300 border-pink-500/30';
      case 'seasonal': return 'from-indigo-500/30 to-purple-500/30 text-indigo-300 border-indigo-500/30';
      default: return 'from-fuchsia-500/30 to-purple-500/30 text-fuchsia-300 border-fuchsia-500/30';
    }
  };

  return (
    <div className="bg-gradient-to-br from-fuchsia-900/40 to-purple-900/40 backdrop-blur-sm rounded-2xl shadow-[0_0_20px_rgba(255,0,255,0.3)] overflow-hidden border border-fuchsia-500/30 hover:border-fuchsia-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,0,255,0.6)]">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h4 className="text-lg font-bold text-white drop-shadow-[0_0_5px_rgba(255,0,255,0.3)]">{cocktail.name}</h4>
          <div className={`px-3 py-1 rounded-full text-xs font-bold border bg-gradient-to-r ${getCategoryColor(cocktail.category)}`}>
            {cocktail.categoryName}
          </div>
        </div>
        
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
          {cocktail.ingredients}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-fuchsia-500/30">
          <div className="text-xl font-bold text-fuchsia-300 drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]">
            {cocktail.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;