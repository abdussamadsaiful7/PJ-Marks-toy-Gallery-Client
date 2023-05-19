import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import ExtraOne from './ExtraOne';
import Address from './Address';
import ReactTap from '../ReactTab/ReactTap';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ExtraOne></ExtraOne>
            <Gallery></Gallery>
            <Address></Address>
            <ReactTap></ReactTap>
        </div>
    );
};

export default Home;