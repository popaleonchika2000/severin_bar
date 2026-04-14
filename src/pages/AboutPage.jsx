// AboutPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, Clock, Palette, Users, Coffee, Sparkles, PartyPopper, Music, Camera } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { value: "150+", label: "Контактный центр", icon: <Coffee className="w-6 h-6" /> },
    { value: "5", label: "Лет опыта", icon: <Award className="w-6 h-6" /> },
    { value: "24", label: "Работаем для вас", icon: <Clock className="w-6 h-6" /> },
    { value: "8", label: "Вкусовых сочетаний", icon: <Palette className="w-6 h-6" /> }
  ];

  // Массив с изображениями мероприятий
  const eventImages = [
    {
      id: 1,
      src: "https://i.pinimg.com/originals/41/43/28/414328c91761a5582ccfe235fb089353.jpg?nii=t",
      title: "Неоновые вечеринки",
      description: "Каждую пятницу и субботу"
    },
    {
      id: 2,
      src: "https://avatars.mds.yandex.net/i?id=35eb929014fa3518c8576bb9f2b1a560_l-5318461-images-thumbs&n=13",
      title: "DJ-сеты",
      description: "Лучшие диджеи Москвы"
    },
    {
      id: 3,
      src: "https://i.pinimg.com/originals/0c/18/04/0c180495d698640d85cd40454453cf2b.jpg?nii=t",
      title: "Тематические вечера",
      description: "Каждый день новая атмосфера"
    },
    {
      id: 4,
      src: "https://comandante-event.ru/wp-content/uploads/2022/10/barmen-shou-na-korporativ-6.jpg",
      title: "Коктейльные шоу",
      description: "Мастерство наших барменов"
    },
    {
      id: 5,
      src: "https://img.freepik.com/premium-photo/midsection-man-playing-bass-guitar_1048944-26611779.jpg?semt=ais_hybrid&w=740&q=80",
      title: "Живая музыка",
      description: "Выступления приглашенных артистов"
    },
    {
      id: 6,
      src: "https://inspiregroup.pro/wp-content/uploads/2024/09/eskiz-vid6-1.jpg",
      title: "VIP-зона",
      description: "Отдельные кабинки с неоновой подсветкой"
    }
  ];

  // Галерея клубных фото
  const clubGallery = [
    {
      id: 1,
      src: "https://reveltime.storage.yandexcloud.net/d8/venue/photo/936382/2021/3038805_1624374150.4308.jpg",
      title: "Неоновый зал"
    },
    {
      id: 2,
      src: "https://site1-beget-aktiv-centr.storage.yandexcloud.net/resize_cache/19263/cce7058b8291befa48ac2bbd33317474/iblock/0f3/8yo1vi6v5sywloo1woyw3skq2kz3nglj.PNG",
      title: "Барная стойка"
    },
    {
      id: 3,
      src: "https://i.pinimg.com/736x/58/fe/83/58fe8368c31eca69fbd4dc3f2e429cc3.jpg",
      title: "Танцпол"
    },
    {
      id: 4,
      src: "https://i.pinimg.com/736x/bd/3c/07/bd3c07b0eb9a8a481de06e81789ec57c.jpg",
      title: "Лаунж-зона"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-fuchsia-950 via-purple-950 to-black text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-pink-600 text-white shadow-[0_0_30px_rgba(255,0,255,0.5)]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center py-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-widest mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-pink-300 to-purple-300 drop-shadow-[0_0_15px_rgba(255,0,255,0.7)]">
              SEVERIN
            </h1>
            <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-lg font-semibold">
              <Link to="/" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">ГЛАВНАЯ</Link>
              <Link to="/news" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">НОВОСТИ</Link>
              <Link to="/contacts" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">КОНТАКТЫ</Link>
              <Link to="/about" className="text-fuchsia-300 underline underline-offset-4 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">О НАС</Link>
              <Link to="/menu" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">МЕНЮ</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section с галереей */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/30 via-transparent to-purple-900/30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Добро пожаловать в <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,0,255,0.7)]">SEVERIN</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Мы — культовый коктейль-бар и ночной клуб в самом сердце Москва-Сити, 
                где каждый вечер превращается в незабываемое шоу в 
                <span className="font-bold text-fuchsia-300 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]"> неоново-розовом и фиолетовом свете</span>.
              </p>
            </div>

            {/* Галерея клубных фото - ИСПРАВЛЕНО на обычный img */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center mb-8 flex items-center justify-center text-fuchsia-300 drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]">
                <Camera className="mr-3" size={32} />
                Атмосфера SEVERIN
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {clubGallery.map((item) => (
                  <div 
                    key={item.id} 
                    className="relative group overflow-hidden rounded-2xl border-2 border-fuchsia-500/30 hover:border-fuchsia-400 transition-all duration-300 shadow-[0_0_20px_rgba(255,0,255,0.3)] hover:shadow-[0_0_30px_rgba(255,0,255,0.6)]"
                  >
                    <div className="relative h-64">
                      {/* ЗАМЕНИЛИ Image на обычный img */}
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="font-bold text-white drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">{item.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Grid - исправлены подписи под фото из ошибки */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-fuchsia-900/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-6 text-center border border-fuchsia-500/30 hover:border-fuchsia-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 shadow-[0_0_15px_rgba(255,0,255,0.3)] hover:shadow-[0_0_25px_rgba(255,0,255,0.6)]"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-500 shadow-[0_0_15px_rgba(255,0,255,0.5)]">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-fuchsia-200 via-pink-200 to-purple-200 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,0,255,0.8)]">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Секция с мероприятиями - ИСПРАВЛЕНО на обычный img */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-purple-950 via-fuchsia-950 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 text-fuchsia-300 drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]">
              <PartyPopper className="inline mr-3 mb-2" size={40} />
              Наши мероприятия
            </h3>
            <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
              Каждую неделю мы устраиваем незабываемые шоу и вечеринки с лучшими диджеями Москвы
            </p>

            {/* Сетка с изображениями мероприятий */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventImages.map((event) => (
                <div 
                  key={event.id} 
                  className="group relative overflow-hidden rounded-2xl border-2 border-fuchsia-500/30 hover:border-fuchsia-400 transition-all duration-300 shadow-[0_0_20px_rgba(255,0,255,0.3)] hover:shadow-[0_0_30px_rgba(255,0,255,0.6)]"
                >
                  <div className="relative h-80">
                    {/* ЗАМЕНИЛИ Image на обычный img */}
                    <img
                      src={event.src}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-950 via-purple-950/50 to-transparent"></div>
                    
                    {/* Контент поверх изображения */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">
                      <div className="bg-gradient-to-r from-fuchsia-500/80 to-purple-500/80 backdrop-blur-sm rounded-xl p-4 border border-fuchsia-300/30">
                        <h4 className="text-xl font-bold mb-2 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">
                          {event.title}
                        </h4>
                        <p className="text-sm text-gray-200">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    {/* Музыкальная иконка */}
                    <div className="absolute top-4 right-4 bg-fuchsia-500/80 backdrop-blur-sm p-2 rounded-full shadow-[0_0_15px_rgba(255,0,255,0.5)]">
                      <Music size={20} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Ближайшие события */}
            <div className="mt-16 bg-gradient-to-r from-fuchsia-900/30 via-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-3xl p-8 border border-fuchsia-500/30 shadow-[0_0_30px_rgba(255,0,255,0.3)]">
              <h4 className="text-2xl font-bold text-center mb-8 text-fuchsia-300 drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]">
                Ближайшие события
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-fuchsia-950/50 rounded-xl border border-fuchsia-500/30">
                  <div className="text-3xl mb-2">🎵</div>
                  <div className="font-bold text-xl mb-1">Пятница</div>
                  <div className="text-fuchsia-300">Neon Night</div>
                  <div className="text-sm text-gray-400">22:00 - 06:00</div>
                </div>
                <div className="text-center p-4 bg-purple-950/50 rounded-xl border border-purple-500/30">
                  <div className="text-3xl mb-2">🎪</div>
                  <div className="font-bold text-xl mb-1">Суббота</div>
                  <div className="text-purple-300">DJ Set от Консуэло</div>
                  <div className="text-sm text-gray-400">23:00 - 06:00</div>
                </div>
                <div className="text-center p-4 bg-pink-950/50 rounded-xl border border-pink-500/30">
                  <div className="text-3xl mb-2">✨</div>
                  <div className="font-bold text-xl mb-1">Воскресенье</div>
                  <div className="text-pink-300">Lounge Day</div>
                  <div className="text-sm text-gray-400">18:00 - 00:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Философия - оставляем коротко */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-black via-fuchsia-950 to-purple-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-fuchsia-900/30 via-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-fuchsia-500/30 shadow-[0_0_30px_rgba(255,0,255,0.3)]">
              <h3 className="text-3xl font-bold text-center mb-8 text-fuchsia-300 drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]">
                Наша философия
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed text-center">
                В SEVERIN мы смешиваем не просто ингредиенты, а эмоции и впечатления. 
                Неоново-розовый свет, фиолетовая глубина вкуса — 
                вот наш рецепт идеального вечера.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-fuchsia-950 via-purple-950 to-pink-950 border-t border-fuchsia-500/30 py-8 shadow-[0_-10px_30px_rgba(255,0,255,0.3)]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <Link to="/" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">Главная</Link>
              <Link to="/news" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">Новости</Link>
              <Link to="/contacts" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">Контакты</Link>
              <Link to="/about" className="text-fuchsia-300 drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">О нас</Link>
              <Link to="/menu" className="hover:text-fuchsia-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">Меню</Link>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} SEVERIN. Где каждая капля сияет неоновым светом.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;