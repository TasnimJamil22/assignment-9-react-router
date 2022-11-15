import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Help = () => {
    
     
     
    return (
        <div>
            <h3 className='p-2 m-2 text-info'>Supper Learning Help Center</h3>

            {/* Accordion */}
            <Accordion defaultActiveKey="0" className='m-5  w-50  mx-auto'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is Supper Learning?</Accordion.Header>
        <Accordion.Body>
        What is Supper Learning?
        Last updated: May 2022

        The Supper Learning language learning app is the world’s most popular way to learn languages. The company’s mission is to develop the best education in the world and make it universally available.

        Learning with Supper Learning is fun, and research shows that it works! With quick, bite-sized lessons, you’ll earn points and unlock new levels while gaining real-world communication skills.

        In addition to its language learning appcore platform, the company created the Supper Learning English Test, an affordable and convenient language certification option that is accepted by thousands of institutions worldwide.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Can you become fluent with Supper Learning?</Accordion.Header>
        <Accordion.Body>
        "Fluent" is a misleading way to measure how well you know a language, because it implies there is an endpoint to learning it. In fact, there's no test or language criteria for deciding if someone is "fluent," and language learning experts instead talk about proficiency. You might aspire to "fluency," but "comfortable" might be what you're really getting at – and you can feel comfortable even as a beginner, depending on your goals! The language you need to travel as a tourist for a week is really different from the language needs of a professional in the workplace.

 

       At Supper Learning, we're developing our courses to get you to a level called B2, at which you can get a job in the language you're studying. Reaching that kind of proficiency requires dedication, varied practice opportunities, and a lot of time. Right now Supper Learning can get you pretty far: a 2020 study found that learners in Supper Learning's Spanish and French courses performed as well on reading and listening tests as students who took four semesters of university classes — and in about half the time. That covers lots of sophisticated language skills, but we're not stopping there: we regularly add new content, improve alignment with international language guidelines, and develop new products to get you speaking and interacting. We want to support all language learners in reaching their goals!

 

       Rather than focusing on fluency as an end in itself, we believe in taking a more nuanced approach that relates to learners’ own goals. Because learners often have particular goals in mind when studying a new language, what counts as success for one learner might look pretty different from the finish line for another. That's why it's so hard to decide what exactly it means to be "fluent" in a new language. The number of words and kinds of grammar you need in order to arrange a weekend at the beach with your best friend are really different from the vocabulary and complex structures needed to write a dissenting opinion for the U.S. Supreme Court.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How do I learn with Supper Learning?</Accordion.Header>
        <Accordion.Body>
        Welcome to Supper Learning! You can learn with Supper Learning via our iOS app, Android app, and web (mobile or desktop).

        Whether you’ve been using Supper Learning for a little while or are just starting out, you might be asking yourself about what the best way to move through a Supper Learning course is. We use Crown Levels so you can personalize your learning journey, but many of you have been wondering about the best approach to take with it: when should you level up a skill (and get more crowns!) and when should you move on to start a new skill? There’s not a one-size-fits-all approach, since learners have varied needs, goals, and experience studying languages, but there’s a lot we do know about successful learning!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What are Achievements?</Accordion.Header>
        <Accordion.Body>
        chievements are given out when a user completes a certain number of actions or a specific action.

       Each achievement comes in levels, with having to complete the first level in order to move on to the second level, etc.

WildFire:StreakReached

Number of levels: 10

Level 1: 3 days

Level 2: 7 days

Level 3: 14 days

Level 4: 30 days

Level 5: 50 days

Level 6: 75 days

Level 7: 125 days

Level 8: 180 days

Level 9: 250 days

Level 10: 365 days
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
              
             
             
            
        </div>
    );
};

export default Help;