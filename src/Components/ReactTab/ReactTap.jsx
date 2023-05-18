import React, { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Classic from './Classic';
import Luxury from './Luxury';
import Jeep from './Jeep';

const ReactTap = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => {
                setCars(data)
            });
    }, [])
    return (
        <Tabs className='text-center'>
            <TabList>
                <Tab>Classic Cars toy</Tab>
                <Tab>Luxury Cars toy</Tab>
                <Tab>Jeep Cars toy</Tab>
            </TabList>
            <TabPanel>
                {
                    cars?.map(classic => <Classic classic={classic} key={classic._id}></Classic>)
                }
            </TabPanel>
            <TabPanel>
                <div className='my-10'>
                    {
                        cars?.map(luxury => <Luxury luxury={luxury} key={luxury._id}></Luxury>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='my-14'>
                    {
                        cars?.map(jeep => <Jeep jeep={jeep} key={jeep._id}></Jeep>)
                    }
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default ReactTap;