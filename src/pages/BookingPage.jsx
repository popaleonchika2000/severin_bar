// BookingPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    comment: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Данные для бронирования:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        date: '',
        time: '',
        guests: '',
        comment: ''
      });
    }, 3000);
  };

  const guestsOptions = Array.from({ length: 20 }, (_, i) => i + 1);

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
              <Link to="/" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">ГЛАВНАЯ</Link>
              <Link to="/news" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">НОВОСТИ</Link>
              <Link to="/contacts" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">КОНТАКТЫ</Link>
              <Link to="/about" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">О НАС</Link>
              <Link to="/menu" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">МЕНЮ</Link>
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
          {/* Success Message */}
          {isSubmitted && (
            <div className="fixed top-4 right-4 z-50 bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white px-6 py-4 rounded-lg shadow-[0_0_30px_rgba(255,0,255,0.5)] animate-slideIn border border-fuchsia-300/30">
              <div className="flex items-center space-x-3">
                <span className="text-2xl drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]">✨</span>
                <div>
                  <p className="font-bold">Заявка отправлена!</p>
                  <p className="text-sm">Мы свяжемся с вами по email в ближайшее время</p>
                </div>
              </div>
            </div>
          )}

          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-fuchsia-300 drop-shadow-[0_0_10px_rgba(255,0,255,0.5)] tracking-wide mb-4">
                ЗАБРОНИРОВАТЬ СТОЛ
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-fuchsia-400 to-purple-400 mx-auto rounded-full shadow-[0_0_10px_rgba(255,0,255,0.5)]"></div>
              <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                Заполните форму ниже, и мы забронируем для вас лучший стол с видом на Москва-Сити в неоновом свете
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-fuchsia-900/40 to-purple-900/40 backdrop-blur-sm rounded-3xl shadow-[0_0_30px_rgba(255,0,255,0.3)] overflow-hidden border border-fuchsia-500/30">
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-8">
                    <div>
                      <label className="block text-lg font-bold text-fuchsia-300 drop-shadow-[0_0_5px_rgba(255,0,255,0.5)] mb-3">
                        ИМЯ
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ваше полное имя"
                        className="w-full px-4 py-3 bg-fuchsia-950/50 border-2 border-fuchsia-500/30 rounded-xl focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-500/50 focus:outline-none transition-colors placeholder-gray-400 text-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-lg font-bold text-fuchsia-300 drop-shadow-[0_0_5px_rgba(255,0,255,0.5)] mb-3">
                        EMAIL
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="example@mail.ru"
                          className="w-full px-4 py-3 bg-fuchsia-950/50 border-2 border-fuchsia-500/30 rounded-xl focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-500/50 focus:outline-none transition-colors placeholder-gray-400 text-white"
                          required
                        />
                        <span className="absolute right-4 top-3 text-fuchsia-400 pointer-events-none drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">
                          ✉️
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-lg font-bold text-fuchsia-300 drop-shadow-[0_0_5px_rgba(255,0,255,0.5)] mb-3">
                        ДАТА ВИЗИТА
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-fuchsia-950/50 border-2 border-fuchsia-500/30 rounded-xl focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-500/50 focus:outline-none transition-colors appearance-none text-white [color-scheme:dark]"
                          required
                        />
                        <span className="absolute right-4 top-3 text-fuchsia-400 pointer-events-none drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">
                          📅
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 mt-2 italic">Формат: ДД.ММ.ГГГГ</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <label className="block text-lg font-bold text-fuchsia-300 drop-shadow-[0_0_5px_rgba(255,0,255,0.5)] mb-3">
                        ВРЕМЯ ВИЗИТА
                      </label>
                      <div className="relative">
                        <input
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-fuchsia-950/50 border-2 border-fuchsia-500/30 rounded-xl focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-500/50 focus:outline-none transition-colors appearance-none text-white [color-scheme:dark]"
                          required
                        />
                        <span className="absolute right-4 top-3 text-fuchsia-400 pointer-events-none drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">
                          ⏰
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 mt-2">Часы работы: 13:00 - 02:00 в неоне</p>
                    </div>

                    <div>
                      <label className="block text-lg font-bold text-fuchsia-300 drop-shadow-[0_0_5px_rgba(255,0,255,0.5)] mb-3">
                        КОЛИЧЕСТВО ГОСТЕЙ
                      </label>
                      <div className="relative">
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-fuchsia-950/50 border-2 border-fuchsia-500/30 rounded-xl focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-500/50 focus:outline-none transition-colors appearance-none text-white"
                          required
                        >
                          <option value="" className="bg-fuchsia-950">Например: 2</option>
                          {guestsOptions.map(num => (
                            <option key={num} value={num} className="bg-fuchsia-950">{num} {num === 1 ? 'гость' : 'гостей'}</option>
                          ))}
                        </select>
                        <span className="absolute right-4 top-3 text-fuchsia-400 pointer-events-none drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">
                          👥
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 mt-2">*Введите число от 1 до 20</p>
                    </div>

                    <div className="bg-gradient-to-r from-fuchsia-900/30 to-purple-900/30 border border-fuchsia-500/30 rounded-xl p-4 backdrop-blur-sm">
                      <p className="text-fuchsia-300 font-semibold drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">
                        🎉 Если вы празднуете какое-либо событие, сообщите нам. 
                        Мы с удовольствием поздравим Вас в неоновом свете!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <label className="block text-lg font-bold text-fuchsia-300 drop-shadow-[0_0_5px_rgba(255,0,255,0.5)] mb-3">
                    КОММЕНТАРИЙ
                  </label>
                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                    placeholder="Ваши пожелания, особые требования или повод для праздника"
                    rows="4"
                    className="w-full px-4 py-3 bg-fuchsia-950/50 border-2 border-fuchsia-500/30 rounded-xl focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-500/50 focus:outline-none transition-colors placeholder-gray-400 resize-none text-white"
                  />
                </div>

                <div className="mt-8 grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-fuchsia-900/30 to-purple-900/30 border border-fuchsia-500/30 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-start space-x-3">
                      <span className="text-fuchsia-400 text-xl drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">✨</span>
                      <div>
                        <h4 className="font-bold text-fuchsia-300 drop-shadow-[0_0_5px_rgba(255,0,255,0.5)] mb-1">Важная информация</h4>
                        <p className="text-gray-300 text-sm">
                          Бронь действительна в течение 15 минут после указанного времени в неоновом зале
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-start space-x-3">
                      <span className="text-purple-400 text-xl drop-shadow-[0_0_5px_rgba(128,0,255,0.5)]">🎁</span>
                      <div>
                        <h4 className="font-bold text-purple-300 drop-shadow-[0_0_5px_rgba(128,0,255,0.5)] mb-1">Специальное предложение</h4>
                        <p className="text-gray-300 text-sm">
                          При бронировании стола через сайт — любой напиток в подарок в неоновом сиянии
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <button
                    type="submit"
                    className="px-12 py-4 bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white text-xl font-bold rounded-2xl hover:from-fuchsia-600 hover:to-purple-600 transition-all duration-300 shadow-[0_0_20px_rgba(255,0,255,0.5)] hover:shadow-[0_0_30px_rgba(255,0,255,0.8)] transform hover:-translate-y-1 active:translate-y-0"
                  >
                    ОТПРАВИТЬ ЗАЯВКУ
                  </button>
                  <p className="text-gray-400 text-sm mt-4">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </div>
              </div>
            </form>

            <div className="mt-12 bg-gradient-to-r from-fuchsia-900/50 via-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-3xl p-8 shadow-[0_0_30px_rgba(255,0,255,0.3)] border border-fuchsia-500/30">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl mb-4 drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]">📧</div>
                  <h4 className="font-bold text-lg mb-2 text-fuchsia-300 drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">Email для связи</h4>
                  <p className="text-gray-300">booking@severin.ru</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-4 drop-shadow-[0_0_10px_rgba(128,0,255,0.5)]">⏰</div>
                  <h4 className="font-bold text-lg mb-2 text-purple-300 drop-shadow-[0_0_5px_rgba(128,0,255,0.5)]">Часы работы</h4>
                  <p className="text-gray-300">Пн-Вс: 13:00 - 02:00 в неоне</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-4 drop-shadow-[0_0_10px_rgba(255,105,180,0.5)]">📍</div>
                  <h4 className="font-bold text-lg mb-2 text-pink-300 drop-shadow-[0_0_5px_rgba(255,105,180,0.5)]">Адрес</h4>
                  <p className="text-gray-300">Москва-Сити, Пресненская наб., 2А</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-fuchsia-950 via-purple-950 to-pink-950 border-t border-fuchsia-500/30 py-8 shadow-[0_-10px_30px_rgba(255,0,255,0.3)]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <Link to="/" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">Главная</Link>
              <Link to="/news" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">Новости</Link>
              <Link to="/contacts" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">Контакты</Link>
              <Link to="/about" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">О нас</Link>
              <Link to="/menu" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">Меню</Link>
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} SEVERIN. Ваш комфорт в неоновом сиянии — наш приоритет.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BookingPage; 