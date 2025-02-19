import React, {useState} from 'react';
import { WEEKLYDATA } from '../../data/WeeklyData';

const Weeklyschedule = () => {

const [weeklyData, setWeeklyData] = useState(WEEKLYDATA);

  return (
        <section className="mb-12">
            <h3 className="mainTitle">Weekly Schedule</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {weeklyData.map((week, index) => (
                <div key={index} className="p-4 bg-slate-100 shadow-lg rounded-lg border-bluedark border-2 ">
                <div className='h-60 rounded overflow-hidden'>
                    <img 
                    src={week.image}
                    className='w-full h-full object-cover'
                    alt='Coding image'
                    />
                </div>
                <div className='p-5'>
                    <h4 className="text-bluedark text-xl font-bold mb-2">{week.title}</h4>
                    <p className="text-gray-700">{week.description}</p>
                   
                </div>
                
                </div>
            ))}
            </div>
    </section>
  )
}

export default Weeklyschedule