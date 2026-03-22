// NewsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Calendar, Star, PartyPopper, Sparkles, Users, Bell, Gift } from 'lucide-react';

const NewsPage = () => {
  const mainNews = [
    {
      id: 1,
      title: "НОВЫЙ DJ-СЕТ",
      subtitle: "Консуэло врывается в пятницу",
      description: "Главный бармен SEVERIN встает за пульт! Каждую пятницу легендарный Консуэло играет эксклюзивный неоновый сет. Миксует не только коктейли, но и треки.",
      date: "Каждую пятницу",
      icon: "🎧",
      image: "https://img.freepik.com/premium-photo/male-dj-playing-music-night-club_93675-147181.jpg?semt=ais_hybrid&w=740",
      slug: "dj-set"
    },
    {
      id: 2,
      title: "НЕОНОВАЯ НОЧЬ",
      subtitle: "Каждую субботу до утра",
      description: "Главная клубная ночь недели. Специальное световое шоу, дымовые пушки и лучшие треки. Dress code: неоновые цвета.",
      date: "Каждую субботу",
      icon: "💜",
      image: "https://s.alicdn.com/@sc04/kf/H30d4880f5ded4920b4498aaa1fc7fa0ds.jpg_720x720q50.jpg",
      slug: "neon-night"
    },
    {
      id: 3,
      title: "AFTERPARTY",
      subtitle: "Воскресный лаунж",
      description: "Закрываем неделю в неоновом сиянии. Расслабленный вайб, авторские коктейли и дабстеп сеты до полуночи.",
      date: "Каждое воскресенье",
      icon: "🌙",
      image: "https://i.pinimg.com/736x/c2/78/76/c2787689c506fb61999d8c9d88bccaab.jpg",
      slug: "afterparty"
    }
  ];

  const promotions = [
    {
      id: 1,
      title: "Акция 1",
      subtitle: "Подарок в студию!",
      description: "Закажи 3 любых коктейля — получи сюрприз. Акция действует каждую пятницу после 22:00.",
      image: "https://img.freepik.com/premium-photo/glowing-gift-box-neon-style-black-background_195703-1685.jpg?semt=ais_hybrid&w=740&q=80",
      slug: "bottle-gift"
    },
    {
      id: 2,
      title: "Акция 2",
      subtitle: "FREE SHOT",
      description: "Приведи 2 друзей — каждый получает по фирменному коктейлю. Вместе веселее в неоновом свете!",
      image: "https://avatars.mds.yandex.net/i?id=ba712403932a8f06f683d32f05379ca537f4e37e-10022509-images-thumbs&n=13",
      slug: "free-shot"
    },
    {
      id: 3,
      title: "Акция 3",
      subtitle: "BIRTHDAY SPECIAL",
      description: "В день рождения — вся барная карта со скидкой 30%. Именинник танцует бесплатно до утра!",
      image: "https://static.tildacdn.com/tild6136-3332-4762-b961-376364616361/BRW00874.jpg",
      slug: "birthday"
    },
    {
      id: 4,
      subtitle: "LADY'S NIGHT",
      description: "Каждую среду девушки платят только за такси. Вход свободный, а первый коктейль в подарок.",
      image: "https://avatars.mds.yandex.net/get-shedevrum/11476535/598a9eb6e9f611ee87429a498021b281/orig",
      slug: "ladys-night"
    },
    {
      id: 5,
      subtitle: "HAPPY HOURS",
      description: "С 18:00 до 20:00 — классика за полцены. Разгоняем вечер в неоновых тонах!",
      image: "https://avatars.mds.yandex.net/i?id=739b569c4a8bc6b19cac630560871e23e15c7e1c-5367858-images-thumbs&n=13",
      slug: "happy-hours"
    },
    {
      id: 6,
      subtitle: "VIP-зона",
      description: "Забронируй VIP-кабинку — получи скидку 50%. Неоновая приватность.",
      image: "https://i.ytimg.com/vi/Y0EEhfKH7ss/maxresdefault.jpg",
      slug: "vip"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-fuchsia-950 via-purple-950 to-black text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-pink-600 text-white shadow-[0_0_30px_rgba(255,0,255,0.5)]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center py-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-wider mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-200 via-pink-200 to-purple-200 drop-shadow-[0_0_15px_rgba(255,0,255,0.7)]">
              SEVERIN
            </h1>
            <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-lg">
              <Link to="/" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">ГЛАВНАЯ</Link>
              <span className="text-fuchsia-300 font-bold drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">НОВОСТИ</span>
              <Link to="/contacts" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">КОНТАКТЫ</Link>
              <Link to="/about" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">О НАС</Link>
              <Link to="/menu" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">МЕНЮ</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        {/* Decorative neon glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-fuchsia-300 drop-shadow-[0_0_10px_rgba(255,0,255,0.5)] flex items-center justify-center">
              <PartyPopper className="mr-3" size={40} />
              НОВОСТИ БАРА
              <PartyPopper className="ml-3" size={40} />
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Каждую неделю мы зажигаем по-новому. Тусовки, сеты, коллаборации!
            </p>
          </div>

          {/* Главные новости с фото */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center border-b border-fuchsia-500/30 pb-4 text-fuchsia-300 drop-shadow-[0_0_8px_rgba(255,0,255,0.5)] flex items-center justify-center">
              <Bell className="mr-2" size={24} />
              ГЛАВНЫЕ СОБЫТИЯ НЕДЕЛИ
              <Bell className="ml-2" size={24} />
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {mainNews.map((news) => (
                <div 
                  key={news.id} 
                  className="bg-gradient-to-br from-fuchsia-900/40 to-purple-900/40 backdrop-blur-sm rounded-2xl shadow-[0_0_30px_rgba(255,0,255,0.3)] overflow-hidden border border-fuchsia-500/30 hover:border-fuchsia-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,0,255,0.6)]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-950 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-fuchsia-500/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold border border-fuchsia-300/30">
                      {news.date}
                    </div>
                    <div className="absolute bottom-4 right-4 text-4xl drop-shadow-[0_0_10px_rgba(255,0,255,0.8)]">
                      {news.icon}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="inline-block bg-fuchsia-500/10 border border-fuchsia-500/30 rounded-lg px-3 py-1 mb-3">
                      <span className="text-fuchsia-300 font-bold text-sm drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">{news.title}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white drop-shadow-[0_0_5px_rgba(255,0,255,0.3)]">
                      {news.subtitle}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {news.description}
                    </p>
                    
                    <Link 
                      to={`/news/${news.slug}`}
                      className="inline-block px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-purple-500 hover:from-fuchsia-600 hover:to-purple-600 text-white font-semibold rounded-lg transition-all shadow-[0_0_15px_rgba(255,0,255,0.3)] hover:shadow-[0_0_20px_rgba(255,0,255,0.6)] text-sm"
                    >
                      ГДЕ ТУСОВКА?
                      <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Promotions Section */}
          <div className="py-8 bg-gradient-to-br from-fuchsia-900/20 via-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-2xl border border-fuchsia-500/30">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-fuchsia-300 drop-shadow-[0_0_10px_rgba(255,0,255,0.5)] flex items-center justify-center">
                <Gift className="mr-3" size={36} />
                АКЦИИ
                <Gift className="ml-3" size={36} />
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-400 to-purple-400 mx-auto shadow-[0_0_10px_rgba(255,0,255,0.5)]"></div>
              <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                Лови моменты и тусуйся с выгодой. Акции действуют, пока играет музыка.
              </p>
            </div>

            {/* Promotions Cards с фото */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {promotions.slice(0, 3).map((promo) => (
                <div 
                  key={promo.id} 
                  className="bg-gradient-to-br from-fuchsia-900/40 to-purple-900/40 backdrop-blur-sm rounded-2xl shadow-[0_0_30px_rgba(255,0,255,0.3)] overflow-hidden border border-fuchsia-500/30 hover:border-fuchsia-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,0,255,0.6)]"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={promo.image} 
                      alt={promo.subtitle}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-950 to-transparent"></div>
                    <div className="absolute top-3 right-3 bg-fuchsia-500/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold">
                      {promo.title}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white drop-shadow-[0_0_5px_rgba(255,0,255,0.3)]">
                      {promo.subtitle}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {promo.description}
                    </p>

                    <Link 
                      to={`/promotions/${promo.slug}`}
                      className="inline-block px-3 py-1 bg-fuchsia-500/20 hover:bg-fuchsia-500/30 text-fuchsia-300 hover:text-fuchsia-200 rounded-lg transition-colors text-sm border border-fuchsia-500/30"
                    >
                      Лови момент →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Promotions Grid */}
            <div className="mt-12">
              <h4 className="text-xl font-bold text-center mb-8 text-purple-300 drop-shadow-[0_0_8px_rgba(128,0,255,0.5)] flex items-center justify-center">
                <Sparkles className="mr-2" size={20} />
                ЕЩЁ ЗАЖИГАЛКИ
                <Sparkles className="ml-2" size={20} />
              </h4>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {promotions.slice(3).map((promo) => (
                  <div 
                    key={promo.id} 
                    className="bg-gradient-to-br from-fuchsia-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl p-5 border border-fuchsia-500/20 hover:border-fuchsia-400/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,255,0.3)]"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <img 
                        src={promo.image} 
                        alt=""
                        className="w-12 h-12 rounded-full object-cover border-2 border-fuchsia-500/50"
                      />
                      <div className="text-fuchsia-300 font-bold text-sm drop-shadow-[0_0_5px_rgba(255,0,255,0.3)]">{promo.title}</div>
                    </div>
                    <h5 className="font-bold mb-2 text-white text-lg">{promo.subtitle}</h5>
                    <p className="text-gray-400 text-xs mb-3">{promo.description}</p>
                    <Link 
                      to={`/promotions/${promo.slug}`}
                      className="inline-block text-xs px-3 py-1 bg-gradient-to-r from-fuchsia-500/30 to-purple-500/30 hover:from-fuchsia-500/50 hover:to-purple-500/50 text-white rounded transition-all border border-fuchsia-500/30"
                    >
                      Подробнее
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Calendar Preview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-fuchsia-900/30 via-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-8 border border-fuchsia-500/30 shadow-[0_0_30px_rgba(255,0,255,0.3)]">
              <h3 className="text-2xl font-bold mb-6 text-center text-fuchsia-300 drop-shadow-[0_0_8px_rgba(255,0,255,0.5)] flex items-center justify-center">
                <Calendar className="mr-2" size={28} />
                РАСПИСАНИЕ ТУСОВОК
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-fuchsia-950/50 rounded-xl border border-fuchsia-500/30">
                  <Music className="mx-auto mb-2 text-fuchsia-400" size={32} />
                  <div className="font-bold text-xl mb-1">ПТ</div>
                  <div className="text-fuchsia-300">DJ Консуэло</div>
                  <div className="text-sm text-gray-400">22:00 - 06:00</div>
                </div>
                <div className="text-center p-4 bg-purple-950/50 rounded-xl border border-purple-500/30">
                  <PartyPopper className="mx-auto mb-2 text-purple-400" size={32} />
                  <div className="font-bold text-xl mb-1">СБ</div>
                  <div className="text-purple-300">NEON NIGHT</div>
                  <div className="text-sm text-gray-400">23:00 - 06:00</div>
                </div>
                <div className="text-center p-4 bg-pink-950/50 rounded-xl border border-pink-500/30">
                  <Sparkles className="mx-auto mb-2 text-pink-400" size={32} />
                  <div className="font-bold text-xl mb-1">ВС</div>
                  <div className="text-pink-300">AFTERPARTY</div>
                  <div className="text-sm text-gray-400">18:00 - 00:00</div>
                </div>
              </div>
              
              {/* Subscribe Section */}
              <div className="mt-8 pt-8 border-t border-fuchsia-500/30">
                <h4 className="text-xl font-bold mb-4 text-center text-fuchsia-300 drop-shadow-[0_0_8px_rgba(255,0,255,0.5)] flex items-center justify-center">
                  <Users className="mr-2" size={24} />
                  НЕ ПРОПУСТИ ТУСОВКУ
                </h4>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Твой email"
                    className="flex-1 px-4 py-3 bg-fuchsia-900/30 border border-fuchsia-500/30 rounded-lg focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400 focus:outline-none text-white placeholder-gray-400"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-purple-500 hover:from-fuchsia-600 hover:to-purple-600 text-white font-semibold rounded-lg transition-all shadow-[0_0_15px_rgba(255,0,255,0.3)] hover:shadow-[0_0_20px_rgba(255,0,255,0.6)]">
                    ПОДПИСАТЬСЯ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-fuchsia-950 via-purple-950 to-pink-950 border-t border-fuchsia-500/30 py-8 shadow-[0_-10px_30px_rgba(255,0,255,0.3)]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <Link to="/" className="text-gray-400 hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]">Главная</Link>
              <span className="text-fuchsia-300 drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]">Новости</span>
              <Link to="/contacts" className="text-gray-400 hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]">Контакты</Link>
              <Link to="/about" className="text-gray-400 hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]">О нас</Link>
              <Link to="/menu" className="text-gray-400 hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]">Меню</Link>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} SEVERIN. Тусуем в неоне с 2019.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewsPage;