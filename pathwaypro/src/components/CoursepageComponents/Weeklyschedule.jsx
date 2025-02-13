import React from 'react'
import CodingImg from "../../assets/CodingImg.jpg";

const Weeklyschedule = () => {
  return (
    <section className="mb-12">
                    <h3 className="mainTitle">Weekly Schedule</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        <div className="p-4 bg-white shadow-lg rounded-lg">
                            <div className='h-60 rounded overflow-hidden'>
                                <img 
                                    src={CodingImg}
                                    className='w-full h-full object-cover'
                                    alt='Coding image'
                                />
                            </div>
                            <div className='p-5'>
                                <h4 className="text-xl font-bold mb-2">Week 1: Python Basics & Setup</h4>
                                <p className="text-gray-700">Learn Python basics, set up your coding environment, and write your first script.</p>
                            </div>
                        </div>

                        <div className="p-4 bg-white shadow-lg rounded-lg">
                        <div className='h-60 rounded overflow-hidden'>
                                <img 
                                    src={CodingImg}
                                    className='w-full h-full object-cover'
                                    alt='Coding image'
                                />
                            </div>
                            <div className='p-5'>
                                <h4 className="text-xl font-bold mb-2">Week 2: Control Flow & Logic</h4>
                                <p className="text-gray-700">Understand how to control program flow using conditionals and loops.</p>
                            </div>
                        </div>

                        <div className="p-4 bg-white shadow-lg rounded-lg">
                        <div className='h-60 rounded overflow-hidden'>
                                <img 
                                    src={CodingImg}
                                    className='w-full h-full object-cover'
                                    alt='Coding image'
                                />
                            </div>
                            <div className='p-5'>
                                <h4 className="text-xl font-bold mb-2">Week 3: Functions & Error Handling</h4>
                                <p className="text-gray-700">Write functions, handle errors, and debug your code effectively.</p>
                            </div>
                        </div>

                        <div className="p-4 bg-white shadow-lg rounded-lg">
                        <div className='h-60 rounded overflow-hidden'>
                                <img 
                                    src={CodingImg}
                                    className='w-full h-full object-cover'
                                    alt='Coding image'
                                />
                            </div>
                            <div className='p-5'>
                                <h4 className="text-xl font-bold mb-2">Week 4: Working with Data</h4>
                                <p className="text-gray-700">Work with lists, dictionaries, and files to manage and manipulate data.</p>
                            </div>
                        </div>

                        <div className="p-4 bg-white shadow-lg rounded-lg">
                        <div className='h-60 rounded overflow-hidden'>
                                <img 
                                    src={CodingImg}
                                    className='w-full h-full object-cover'
                                    alt='Coding image'
                                />
                            </div>
                            <div className='p-5'>
                                <h4 className="text-xl font-bold mb-2">Week 5: Mini Project & Next Steps</h4>
                                <p className="text-gray-700">Build a mini project using everything you've learned and explore next steps.</p>
                            </div>
                        </div>
                    </div>
                </section>
  )
}

export default Weeklyschedule