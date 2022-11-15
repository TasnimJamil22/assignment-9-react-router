import React from 'react';

const About = () => {
    return (
        <div>
            <h2 className='text-success bg-light p-2'>About Us</h2> 

            <div className='d-flex align-items-start p-2 m-3 '>
            <div className='border border-dark m-3 p-2 rounded-2 bg-success text-white bg-opacity-50' >
            <h2 className='text-success'>Our Mission  </h2>
            <p>
                We’re here to develop the best education in the world and make it universally available. Our global team works together to make language learning fun, free, and effective for anyone who wants to learn, wherever they are.
            </p>
            </div>
            <div className='border border-dark m-3 p-2 rounded-2 bg-dark text-white bg-opacity-50'>
            <h2 className='text-success'>Our story</h2>
            <p>
              Supper Learning was founded in 2011 by Luis von Ahn and Severin. The  app launched in 2012 and has since become the most popular way to learn a language and one of the most downloaded education apps in the world.
            </p>
            </div>
            
            </div>
            <div >
            <div className='border border-dark m-5 p-5 rounded-2 bg-info text-white bg-opacity-50'>
            <h2 className='text-success'>Real-life communication</h2>
            <p>
            Language is ultimately a communication tool. Duolingo takes a functional approach by focusing on what learners actually want to do with a language.

            Lessons focus on a real-life goal — for instance, ordering at a restaurant. Learners develop the vocabulary and grammar needed to achieve that goal through lots of varied practice in reading, writing, listening, and speaking.
            </p>
            </div>
            <div className='border border-dark m-5 p-5 rounded-2 bg-danger text-white bg-opacity-50'>
            <h2 className='text-success'>Continuous improvement</h2>
            <p>
            
            At Duolingo, we're committed to improvement. Test questions are embedded throughout our courses to measure how learners are progressing — and to show where Duolingo can improve.

            We use the results to develop new and better courses, expand our universe of language-learning tools, update our materials as languages evolve, and ensure we're continuing to offer the best language education in the world. Like language, we never stand still.
            </p>
            </div>
            </div>
        </div>
    );
};

export default About;