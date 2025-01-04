import React from 'react';
import Banner from '../components/banner/Banner';
import About from '../components/About/About';
import Skill from '../components/Skill/Skill';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
        </div>
    );
};

export default Home;