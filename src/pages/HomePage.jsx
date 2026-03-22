// App.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
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
              <Link to="/" className="text-fuchsia-300 underline underline-offset-4 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">ГЛАВНАЯ</Link>
              <Link to="/news" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">НОВОСТИ</Link>
              <Link to="/contacts" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">КОНТАКТЫ</Link>
              <Link to="/about" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">О НАС</Link>
              <Link to="/menu" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">МЕНЮ</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-fuchsia-900 via-purple-900 to-black text-white py-20 overflow-hidden">
        {/* Decorative neon glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6 tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-pink-300 to-purple-300 drop-shadow-[0_0_20px_rgba(255,0,255,0.8)]">
            SEVERIN
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-200">
            <strong className="text-fuchsia-300 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">SEVERIN</strong> — коктейль-бар в Москва-Сити, где искусство миксологии достигает совершенства. 
            Идеальные коктейли: от классики до авторских миксов в неоново-розовых и фиолетовых тонах.
          </p>
          <p className="text-lg mt-6 text-fuchsia-300 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">
            Приходите открыть свой идеальный вкус!
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black via-purple-950 to-fuchsia-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            
            {/* Эксклюзивные коктейли */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-fuchsia-900/40 to-purple-900/40 backdrop-blur-sm p-8 rounded-2xl shadow-[0_0_30px_rgba(255,0,255,0.3)] transform hover:-translate-y-2 transition-all duration-300 border border-fuchsia-500/30 hover:border-fuchsia-400/50 hover:shadow-[0_0_40px_rgba(255,0,255,0.6)]">
                <h2 className="text-2xl font-bold mb-4 tracking-wider text-fuchsia-300 drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]">ЭКСКЛЮЗИВНЫЕ КОКТЕЙЛИ</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-fuchsia-400 to-purple-400 mx-auto mb-6 shadow-[0_0_10px_rgba(255,0,255,0.5)]"></div>
                <p className="leading-relaxed text-gray-300">
                  Авторские рецепты от лучших барменов города. Каждый коктейль — это произведение искусства с уникальным вкусом и неоновой подачей.
                </p>
              </div>
            </div>

            {/* Панорамный вид */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm p-8 rounded-2xl shadow-[0_0_30px_rgba(128,0,255,0.3)] transform hover:-translate-y-2 transition-all duration-300 border border-purple-500/30 hover:border-purple-400/50 hover:shadow-[0_0_40px_rgba(128,0,255,0.6)]">
                <h2 className="text-2xl font-bold mb-4 tracking-wider text-purple-300 drop-shadow-[0_0_8px_rgba(128,0,255,0.5)]">ПАНОРАМНЫЙ ВИД</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6 shadow-[0_0_10px_rgba(128,0,255,0.5)]"></div>
                <p className="leading-relaxed text-gray-300">
                  Расположение в Москва-Сити обеспечивает захватывающий вид на город. Неоновая подсветка создает идеальную атмосферу для вечернего отдыха.
                </p>
              </div>
            </div>

            {/* Премиум обслуживание */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-pink-900/40 to-fuchsia-900/40 backdrop-blur-sm p-8 rounded-2xl shadow-[0_0_30px_rgba(255,105,180,0.3)] transform hover:-translate-y-2 transition-all duration-300 border border-pink-500/30 hover:border-pink-400/50 hover:shadow-[0_0_40px_rgba(255,105,180,0.6)]">
                <h2 className="text-2xl font-bold mb-4 tracking-wider text-pink-300 drop-shadow-[0_0_8px_rgba(255,105,180,0.5)]">ПРЕМИУМ ОБСЛУЖИВАНИЕ</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-fuchsia-400 mx-auto mb-6 shadow-[0_0_10px_rgba(255,105,180,0.5)]"></div>
                <p className="leading-relaxed text-gray-300">
                  Профессиональный персонал, индивидуальный подход к каждому гостю и внимание к деталям создают неповторимый опыт в неоновом сиянии.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-fuchsia-950 via-purple-950 to-pink-950 text-white py-12 shadow-[0_-10px_30px_rgba(255,0,255,0.3)]">
        <div className="container mx-auto px-4">
          {/* Top Footer Bar */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 pb-8 border-b border-fuchsia-500/30">
          </div>

          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            
            {/* Контакты */}
            <div>
              <h3 className="text-xl font-bold mb-6 tracking-wider text-fuchsia-300 drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]">Контакты</h3>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-start">
                  <span className="mr-2 text-fuchsia-400">📍</span>
                  Москва-Сити, Пресненская набережная, 2А
                </p>
                <p className="flex items-center">
                  <span className="mr-2 text-fuchsia-400">📞</span>
                  +7 (924) 179-41-72
                </p>
                <p className="flex items-center">
                  <span className="mr-2 text-fuchsia-400">✉️</span>
                  severinmoscow@gmail.com
                </p>
              </div>
            </div>

            {/* Часы работы */}
            <div>
              <h3 className="text-xl font-bold mb-6 tracking-wider text-purple-300 drop-shadow-[0_0_8px_rgba(128,0,255,0.5)]">Часы работы</h3>
              <div className="space-y-2 text-gray-300">
                <p>Пн.-Чт.: 13:00 - 00:00</p>
                <p>Пт.: 13:00 - 02:00</p>
                <p>Сб.: 12:00 - 02:00</p>
                <p>Вс.: 12:00 - 00:00</p>
                <p className="text-fuchsia-300 drop-shadow-[0_0_8px_rgba(255,0,255,0.5)] mt-4">*Выходные — до утра в неоновом сиянии!</p>
              </div>
            </div>

            {/* Быстрые ссылки */}
            <div>
              <h3 className="text-xl font-bold mb-6 tracking-wider text-pink-300 drop-shadow-[0_0_8px_rgba(255,105,180,0.5)]">Быстрые ссылки</h3>
              <ul className="space-y-3 text-gray-300">
                <li><Link to="/" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]">Главная</Link></li>
                <li><Link to="/news" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]">Новости и акции</Link></li>
                <li><Link to="/about" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]">О нас</Link></li>
                <li><Link to="/contacts" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]">Контакты</Link></li>
                <li><Link to="/booking" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]">Бронирование столика</Link></li>
              </ul>
            </div>

          </div>

          {/* Call to Action Buttons - ИСПРАВЛЕНО */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <Link 
              to="/menu" 
              className="bg-gradient-to-r from-fuchsia-500 to-purple-500 hover:from-fuchsia-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg shadow-[0_0_20px_rgba(255,0,255,0.5)] transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,255,0.8)] text-center"
            >
              МЕНЮ КОКТЕЙЛЕЙ
            </Link>
            <Link 
              to="/booking" 
              className="bg-transparent hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-purple-500 border-2 border-fuchsia-500 text-fuchsia-300 hover:text-white font-bold py-4 px-8 rounded-lg shadow-[0_0_15px_rgba(255,0,255,0.3)] transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,0,255,0.6)] text-center"
            >
              ЗАБРОНИРОВАТЬ СТОЛ
            </Link>
          </div>

          {/* Bottom Copyright */}
          <div className="text-center text-gray-400 pt-8 border-t border-fuchsia-500/30">
            <p>© {new Date().getFullYear()} SEVERIN. Где каждая капля сияет неоновым светом.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;