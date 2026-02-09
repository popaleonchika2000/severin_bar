import React from 'react'
import HeaderComponent from './Header'

const BodyComponent = () => {
  return (
    <div className='picture'>
        <HeaderComponent />
        <div className='p-25 30'>
          {/* НЕБОЛЬШАЯ ЖЕСТЬ */}
          <h1 className='font-normal text-8xl capitalize text-green-950 mb-5'>Чистый Воздух</h1>
          <h1 className='font-normal text-8xl capitalize text-green-950 mb-5'>Вместе С</h1>
          <h1 className='font-normal text-9xl capitalize text-green-700 mb-5'>Pascal vent</h1>
          <p className='w-160 font-normal text-3xl text-lime-600 mt-5'>Проектирование, поставка и монтаж систем вентиляции и кондиционирования</p>
          <div className='flex mt-20'>
            <div className='flex'>
              <img className='w-10 h-10 m-3 ml-6 mr-6' src="metka.svg" alt="METKA" />
              <p className='w-38 font-normal text-lg text-gray-400'>Московский регион, Москва</p>
            </div>
            <div className='flex ml-20'>
              <img className='w-10 h-10 m-3 ml-13 mr-6' src="telephone.svg" alt="PHONE" />
              <div>
                <p className='w-38 font-normal text-lg text-gray-400'>+ 7 492 373 63 31</p>
                <p className='w-38 font-normal text-lg text-gray-400'>+ 7 424 367 89 29</p>
              </div>
            </div>
          </div>
          <div>
            {/* ЖЕСТЬ 2.0 */}
            <button id='button' className='w-140 h-20 rounded-3xl text-2xl font-normal text-stone-50 bg-[#5CCD6A]  pb-1.5 cursor-pointer transform-gpu hover-opacity-100 ml-6 mt-20'>оставить заявку</button>
          </div>
        </div>
    </div>
  )
}

export default BodyComponent