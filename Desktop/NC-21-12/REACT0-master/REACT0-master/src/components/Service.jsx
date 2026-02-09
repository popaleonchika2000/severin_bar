import React from 'react'

const Services = () => {
    const serviceData = [
        {icon: 'Service1.svg', text: "Проектирование систем вентиляции любой сложности"},
        {icon: 'Service2.svg', text: "Монтаж приточной вентиляции"},
        {icon: 'Service3.svg', text: "Монтаж вытяжной вентиляции"},
        {icon: 'Service4.svg', text: "Монтаж вентиляции с увлажнением воздуха"},
        {icon: 'Service5.svg', text: "Монтаж вентиляции с рекуператором"},
        {icon: 'Service6.svg', text: "Монтаж вентиляции с осушением для бассейна"}
    ];
    
/*------------------------------------------------------------------*/


    return (
        <div className='bg-white py-10 px-5'>
            <div className='grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                {serviceData.map ((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 border-green-100 rounded-xl hover:bg-green-50 transition-colors">
                        <img src={'/${item.icon}'} alt='service icon' className='w-12 h-12 flex-shrink-0' />
                        <p className='text-lg text-green-950 leading-tight font-medium'>

                        </p>
                    </div>
                ))}
        </div>
        </div>
    );
};

/*------------------------------------------------------------------*/



export default Service;