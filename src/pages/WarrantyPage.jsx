import React from 'react';
import { ArrowLeftRight, Book, X, Headset, File,  Check, PersonStanding } from 'lucide-react'

const WarrantyPage = () => {
  return (
    <div className="font-sans">
      {/* Блок 1: Заголовок */}
      <div className=" text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">ГАРАНТИЯ И ВОЗВРАТ</h1>
        <p className="text-lg max-w-2xl mx-auto px-4">
          Мы делаем всё, чтобы вы чувствовали себя уверенно — даже если что-то пошло не так.
        </p>
      </div>

      {/* Блок 2: Преимущества — как в картинке */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">НАШИ ПРЕИМУЩЕСТВА</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Блок 1: Обмен/возврат */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 ">
                <ArrowLeftRight />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">ВОЗВРАТ И ОБМЕН</h3>
              <p className="text-gray-700 leading-relaxed">
                Вы можете вернуть или обменять товар в течение 7 дней, если он вам не подошёл или оказался с браком. 
                Ремонт проводится в авторизованных центрах или у нас — по адресам: Москва, Выборгская 22 стр.3 и Лен. обл., Новосаратовка 21.
              </p>
            </div>

            {/* Блок 2: Сроки и закон */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Book />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-4">ПО ЗАКОНУ</h3>
              <p className="text-gray-700 leading-relaxed">
                Согласно ст. 26.1 ЗоЗПП — 7 дней на возврат. Срок ремонта — до 45 дней. При обращении нужен чек. Если ремонт невозможен — получите заключение и принесите его нам.
              </p>
            </div>

            {/* Блок 3: Что нельзя вернуть */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <X />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-4">ЧТО НЕЛЬЗЯ ВЕРНУТЬ</h3>
              <p className="text-gray-700 leading-relaxed">
                Кабель на метраж, SIM-карты, активированный софт, вскрытый блистер, уценённые товары, цифровой контент — не подлежат возврату согласно закону.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Блок 3: Как мы работаем — шаги */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-10">КАК МЫ РАБОТАЕМ С ВОЗВРАТОМ</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Шаг 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Headset />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-4">ШАГ 1</h3>
              <p className="text-gray-700 leading-relaxed">
                Оставьте заявку онлайн или позвоните нам:  
                <br />
                <strong>8 (800) 200-0069</strong>  
                <br />
                Москва: 3106 / 3156 | СПб: 4238 / 4222
              </p>
            </div>

            {/* Шаг 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <File />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-4">ШАГ 2</h3>
              <p className="text-gray-700 leading-relaxed">
                Подготовьте:  
                <br />
                • Паспорт покупателя  
                <br />
                • Кассовый чек или подтверждение покупки в XCOM-SHOP
              </p>
            </div>

            {/* Шаг 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-4">ШАГ 3</h3>
              <p className="text-gray-700 leading-relaxed">
                Мы вернём деньги тем же способом, которым вы оплатили.  
                Или предложим замену — как вам удобнее.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Финальный блок: Доверие */}
      <div className="py-12 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <PersonStanding />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">МЫ НА СТОРОНЕ КЛИЕНТА</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Даже если производитель отказывает в гарантии — мы всегда найдём решение.  
            Потому что для нас вы — не заказ №12345, а человек, которому мы рады помочь.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WarrantyPage;