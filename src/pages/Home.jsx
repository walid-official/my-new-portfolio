import React from 'react';
import Banner from '../components/banner/Banner';
import About from '../components/About/About';
import Skill from '../components/Skill/Skill';
import MyProjects from '../components/Project/MyProjects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <MyProjects></MyProjects>
        </div>
    );
};

export default Home;