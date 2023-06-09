import React, { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Classic from './Classic';
import Luxury from './Luxury';
import Jeep from './Jeep';

const ReactTap = () => {

    //luxury toy cars
    const [luxuryCars, setLuxuryCars] = useState([]);
    useEffect(() => {
        fetch('https://fantasy-toy-server.vercel.app/luxury')
            .then(res => res.json())
            .then(data => {
                setLuxuryCars(data)
            });
    }, [])

    //jeep toy cars
    const [jeepCars, setJeepCars] = useState([]);
    useEffect(() => {
        fetch('https://fantasy-toy-server.vercel.app/jeep')
            .then(res => res.json())
            .then(data => {
                setJeepCars(data)
            });
    }, [])

    //classic toy cars 
    const [classicCars, setClassicCars] = useState([]);
    useEffect(() => {
        fetch('https://fantasy-toy-server.vercel.app/classic')
            .then(res => res.json())
            .then(data => {
                setClassicCars(data)
            });
    }, [])

    return (
        <div>
            <h1 className='text-center mt-20 mb-6 text-2xl font-extrabold'>SHOP BY CATEGORY</h1>
            <Tabs className='text-center'>
                <TabList>
                    <Tab>Classic Cars toy</Tab>
                    <Tab>Luxury Cars toy</Tab>
                    <Tab>Jeep Cars toy</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-10 lg:px-20'>
                        {
                            classicCars?.map(classic => <Classic classic={classic} key={classic.id}></Classic>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-10 lg:px-20 my-14'>
                        {
                            luxuryCars?.map(luxury => <Luxury luxury={luxury} key={luxury._id}></Luxury>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 lg:px-20 my-14'>
                        {
                            jeepCars?.map(jeep => <Jeep jeep={jeep} key={jeep._id}></Jeep>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReactTap;