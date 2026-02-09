// import { User } from "lucide-react";
import React from 'react'

const HeaderComponent = () => {
  return (
    <div className='flex text-center'>
        <img className='mt-7.5 ml-9 ' src="Logo.svg" alt="Logo" />
        <div id='text' className='flex mt-12 ml-auto'>
            <a href='serve' className='text-zinc-600 text-xl'>услуги</a>
            <a href='aboutUs' className='text-zinc-600 ml-9 text-xl'>о нас</a>
            <a href='product' className='text-zinc-600 ml-9 text-xl'>польза продукта</a>
            <a href='stuff' className='text-zinc-600 ml-9 text-xl'>оборудование</a>
            <a href='workStages' className='text-zinc-600 ml-9 text-xl'>этапы работы</a>
            <a href='reviews' className='text-zinc-600 ml-9 text-xl'>отзывы</a>
        </div>

        {/* ЖЕСТЬ */}
        <button id='button' className='w-50 h-12 rounded-2xl text-2xl font-normal text-stone-50 bg-[#5CCD6A] ml-auto mt-8 mr-9  ring-12 ring-white/45 pb-1.5 cursor-pointer transform-gpu hover-opacity-100'>связаться</button>
    </div>
  )
}

export default HeaderComponent