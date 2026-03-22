// ContactsPage.jsx
import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const ContactsPage = () => {
  const workingHours = [
    {
      day: "ПОНЕДЕЛЬНИК - ЧЕТВЕРГ",
      description: "Будние дни",
      hours: "13:00 - 00:00",
      totalHours: "11 часов работы"
    },
    {
      day: "ПЯТНИЦА",
      description: "Предвиденный день",
      hours: "13:00 - 02:00",
      totalHours: "13 часов работы"
    },
    {
      day: "СУББОТА",
      description: "Выходной день",
      hours: "12:00 - 02:00",
      totalHours: "14 часов работы"
    },
    {
      day: "ВОСКРЕСЕНЬЕ",
      description: "Выходной день",
      hours: "12:00 - 00:00",
      totalHours: "12 часов работы"
    }
  ];

  const quickLinks = [
    "Главная",
    "Новости и акции",
    "О нас",
    "Контакты",
    "Бронирование столика"
  ];

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
              <a href="/contacts" className="text-fuchsia-300 underline underline-offset-4 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">КОНТАКТЫ</a>
              <a href="/about" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">О НАС</a>
              <a href="/menu" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">МЕНЮ</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative py-8 md:py-12 overflow-hidden">
        {/* Decorative neon glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Page Title */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-fuchsia-300 drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]">
                Свяжитесь с нами
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Мы всегда рады гостям в нашем неоновом сиянии! Приходите к нам или свяжитесь удобным для вас способом.
              </p>
              <div className="w-48 h-1 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent mx-auto mt-6 shadow-[0_0_10px_rgba(255,0,255,0.5)]"></div>
            </div>

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Left Column - Working Hours */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-8 flex items-center text-fuchsia-300 drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]">
                    <Clock className="mr-3 text-fuchsia-400 drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]" size={28} />
                    Часы работы
                  </h3>
                  
                  <div className="space-y-6">
                    {workingHours.map((day, index) => (
                      <div key={index} className="bg-gradient-to-br from-fuchsia-900/40 to-purple-900/40 backdrop-blur-sm rounded-xl p-6 shadow-[0_0_20px_rgba(255,0,255,0.3)] border border-fuchsia-500/30 hover:border-fuchsia-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,255,0.6)]">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <h4 className="font-bold text-lg text-white drop-shadow-[0_0_5px_rgba(255,0,255,0.3)]">{day.day}</h4>
                          <span className="text-gray-400 text-sm mt-1 md:mt-0">{day.description}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-fuchsia-300 drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]">{day.hours}</span>
                          <span className="text-gray-400">{day.totalHours}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-fuchsia-300 drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]">Контактная информация</h3>
                  
                  <div className="bg-gradient-to-br from-fuchsia-900/40 to-purple-900/40 backdrop-blur-sm rounded-xl p-6 shadow-[0_0_20px_rgba(255,0,255,0.3)] border border-fuchsia-500/30 space-y-6">
                    {/* Address */}
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <MapPin className="text-fuchsia-400 mt-1 mr-3 flex-shrink-0 drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]" size={24} />
                        <div>
                          <h4 className="font-bold text-lg text-white">Адрес</h4>
                          <p className="text-gray-300">
                            Пресненская набережная, 2А<br />
                            Москва-Сити, Москва
                          </p>
                          <a 
                            href="https://severin.moscow/" 
                            className="text-fuchsia-300 hover:text-fuchsia-200 transition-colors inline-flex items-center mt-2 drop-shadow-[0_0_5px_rgba(255,0,255,0.3)]"
                          >
                            <span className="border-b border-dotted border-fuchsia-400">
                              Узнаваемые данные с неоновой вывеской SEVERIN
                            </span>
                            <span className="ml-2">↗</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <Phone className="text-fuchsia-400 mt-1 mr-3 flex-shrink-0 drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]" size={24} />
                        <div>
                          <h4 className="font-bold text-lg text-white">Телефон</h4>
                          <p className="text-2xl font-bold text-fuchsia-300 drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]">+7 (924) 179-41-72</p>
                          <p className="text-gray-400 mt-1">
                            Для бронирования столиков и общих вопросов<br />
                            Звоните с 11:00 до 01:00
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <Mail className="text-fuchsia-400 mt-1 mr-3 flex-shrink-0 drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]" size={24} />
                        <div>
                          <h4 className="font-bold text-lg text-white">Электронная почта</h4>
                          <a 
                            href="mailto:severinmoscow@gmail.com" 
                            className="text-xl text-fuchsia-300 hover:text-fuchsia-200 transition-colors font-semibold drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]"
                          >
                            severinmoscow@gmail.com
                          </a>
                          <p className="text-gray-400 mt-1">
                            Для сотрудничества, мероприятий и специальных запросов
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Booking & Social Media */}
              <div className="space-y-8">
                {/* Booking Section */}
                <div className="bg-gradient-to-br from-fuchsia-900/40 via-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-2xl p-8 border border-fuchsia-500/30 shadow-[0_0_30px_rgba(255,0,255,0.3)]">
                  <h3 className="text-2xl font-bold mb-4 text-fuchsia-300 drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]">ЗАБРОНИРОВАТЬ СТОЛ</h3>
                  <p className="text-gray-300 mb-6">
                    Рекомендуем бронировать столик заранее, особенно в пятницу и субботу! 
                    Бронь доступна онлайн или по телефону в неоновом сиянии.
                  </p>
                  <div className="w-16 h-1 bg-gradient-to-r from-fuchsia-400 to-purple-400 mb-6 shadow-[0_0_10px_rgba(255,0,255,0.5)]"></div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-lg mb-4 text-white">Контакты</h4>
                      <div className="space-y-3 text-gray-300">
                        <div className="flex items-start">
                          <MapPin className="text-fuchsia-400 mt-1 mr-3 flex-shrink-0 drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]" size={20} />
                          <span>Москва-Сити, Пресненская набережная, 2А</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="text-fuchsia-400 mr-3 flex-shrink-0 drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]" size={20} />
                          <span>+7 (924) 179-41-72</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="text-fuchsia-400 mr-3 flex-shrink-0 drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]" size={20} />
                          <span>severinmoscow@gmail.com</span>
                        </div>
                      </div>
                    </div>

                    {/* Social Media */}
                    <div>
                      <h4 className="font-bold text-lg mb-4 text-white">Мы в соцсетях</h4>
                      <div className="flex space-x-4">
                        <a href="#" className="bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white p-3 rounded-lg hover:from-fuchsia-600 hover:to-purple-600 transition-all shadow-[0_0_15px_rgba(255,0,255,0.3)] hover:shadow-[0_0_20px_rgba(255,0,255,0.6)]">
                          <Facebook size={24} />
                        </a>
                        <a href="#" className="bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white p-3 rounded-lg hover:from-pink-600 hover:to-fuchsia-600 transition-all shadow-[0_0_15px_rgba(255,105,180,0.3)] hover:shadow-[0_0_20px_rgba(255,105,180,0.6)]">
                          <Instagram size={24} />
                        </a>
                        <a href="#" className="bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white p-3 rounded-lg hover:from-purple-600 hover:to-fuchsia-600 transition-all shadow-[0_0_15px_rgba(128,0,255,0.3)] hover:shadow-[0_0_20px_rgba(128,0,255,0.6)]">
                          <Linkedin size={24} />
                        </a>
                      </div>
                    </div>

                    {/* Quick Hours */}
                    <div>
                      <h4 className="font-bold text-lg mb-4 text-white">Часы работы</h4>
                      <div className="space-y-2 text-gray-300">
                        <p>Пн.-Чт.: 13:00 - 00:00</p>
                        <p>Пт.: 13:00 - 02:00</p>
                        <p>Сб.: 12:00 - 02:00</p>
                        <p>Вс.: 12:00 - 00:00</p>
                        <p className="text-fuchsia-300 font-semibold mt-2 drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]">*Выходные — до утра в неоне!</p>
                      </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                      <h4 className="font-bold text-lg mb-4 text-white">Быстрые ссылки</h4>
                      <div className="space-y-2">
                        {quickLinks.map((link, index) => (
                          <a 
                            key={index} 
                            href="#" 
                            className="block text-gray-300 hover:text-fuchsia-300 hover:pl-2 transition-all hover:drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]"
                          >
                            {link}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Visualization */}
            <div className="bg-gradient-to-r from-fuchsia-900/50 via-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-[0_0_30px_rgba(255,0,255,0.3)] border border-fuchsia-500/30 mb-12">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="mb-8 lg:mb-0 lg:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-fuchsia-300 drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]">Как нас найти</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <span className="text-fuchsia-400 mr-2 drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">🚇</span>
                      <span>Ближайшая станция метро: Деловой центр</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-fuchsia-400 mr-2 drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">🚗</span>
                      <span>Парковка: подземная парковка Москва-Сити</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-fuchsia-400 mr-2 drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">🚕</span>
                      <span>Такси: удобный подъезд со стороны набережной</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-fuchsia-400 mr-2 drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">👁️</span>
                      <span>Ориентир: неоновая вывеска SEVERIN на 8 этаже</span>
                    </li>
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-fuchsia-900/40 to-purple-900/40 rounded-lg p-8 h-64 flex items-center justify-center border border-fuchsia-500/30 shadow-[0_0_20px_rgba(255,0,255,0.3)]">
                    <div className="text-center">
                      <div className="text-4xl mb-4 drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]">📍</div>
                      <p className="text-xl font-semibold mb-2 text-fuchsia-300 drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">Карта Москва-Сити</p>
                      <p className="text-gray-300">Пресненская набережная, 2А</p>
                      <button className="mt-4 px-6 py-2 bg-gradient-to-r from-fuchsia-500 to-purple-500 hover:from-fuchsia-600 hover:to-purple-600 rounded-lg transition-all shadow-[0_0_15px_rgba(255,0,255,0.3)] hover:shadow-[0_0_20px_rgba(255,0,255,0.6)]">
                        Открыть в Google Maps
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <a 
                href="/booking" 
                className="inline-block px-10 py-4 bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white text-xl font-bold rounded-2xl hover:from-fuchsia-600 hover:to-purple-600 transition-all shadow-[0_0_20px_rgba(255,0,255,0.5)] hover:shadow-[0_0_30px_rgba(255,0,255,0.8)] transform hover:-translate-y-1"
              >
                ЗАБРОНИРОВАТЬ СТОЛ ОНЛАЙН
              </a>
              <p className="text-gray-400 mt-4">
                Или позвоните нам: <span className="text-fuchsia-300 drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">+7 (924) 179-41-72</span>
              </p>
            </div>
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
              <a href="/contacts" className="text-fuchsia-300 drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">Контакты</a>
              <a href="/about" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">О нас</a>
              <a href="/menu" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">Меню</a>            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} SEVERIN. Москва-Сити, Пресненская набережная, 2А. Сияем неоном для вас!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactsPage;