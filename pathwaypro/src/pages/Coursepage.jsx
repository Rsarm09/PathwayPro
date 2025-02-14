import React from 'react';
//components
import Weeklyschedule from '../components/CoursepageComponents/Weeklyschedule';
import CoursePageHero from '../components/CoursepageComponents/CoursePagehero';
import Testimonials from '../components/Testimonials';

const Coursepage = () => {
    return (
        <div className='course-page'>
            <CoursePageHero />
            <main className="container mx-auto m-5 p-8">

                {/* Course Content Description */}
                <section className='py-15'>
                    <h3 className='mainTitle'>What You Will Be Learning</h3>
                    <p className='text-lg text-gray-700'>
                        In this beginner-friendly course, you’ll explore the fundamentals of Python step by step! From understanding variables and data types to writing loops, functions, and basic algorithms, we make coding simple and fun. You’ll also get hands-on experience with real-world exercises, so you can confidently write your own Python programs by the end. Whether you want to automate tasks, analyze data, or just learn a new skill, this course is the perfect starting point!
                    </p>
                </section>

                <section className='mt-12'>
                    <Weeklyschedule />
                </section>
                
                <section className='mt-12'>
                    <Testimonials />
                </section>
            </main>
        </div>
    );
};

export default Coursepage;
