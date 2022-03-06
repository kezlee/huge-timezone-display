import React, { useState } from 'react';
import { GridSection, GridItem, OfficeCountry, Separator, TimeZone } from './styles';

const Grid = () => {
    const CONTENT = [
        {
            id: 0,
            country: 'Atlanta.',
            timezone: 'America/New_York',
        },
        {
            id: 1,
            country: 'Bogota.',
            timezone: 'America/Bogota',
        },
        {
            id: 3,
            country: 'Brooklyn.',
            timezone: 'America/New_York',
        },
        {
            id: 4,
            country: 'Chicago.',
            timezone: 'America/Chicago',
        },
        {
            id: 2,
            country: 'DC.',
            timezone: 'America/New_York',
        },
        {
            id: 5,
            country: 'Detroit.',
            timezone: 'America/Detroit',
        },
        {
            id: 6,
            country: 'London.',
            timezone: 'Europe/London',
        },
        {
            id: 7,
            country: 'Los Angeles.',
            timezone: 'America/Los_Angeles',
        },
        {
            id: 8,
            country: 'Medellin.',
            timezone: 'America/New_York',
        },
        {
            id: 9,
            country: 'Oakland.',
            timezone: 'America/Los_Angeles',
        },
        {
            id: 10,
            country: 'Singapore.',
            timezone: 'Asia/Singapore',
        },
        {
            id: 11,
            country: 'Toronto.',
            timezone: 'America/Vancouver',
        },
        {
            id: 12,
            country: 'Tokyo.',
            timezone: 'Asia/Tokyo',
        }
    ];

    const [content, setContent] = useState(CONTENT);

    const getTimeZone = (timeZone) => {
        let now = new Date(Date.now());
        let time = now.toLocaleTimeString('en-US',{timeZone,hour12:false}).substring(0,5);

        return time;
    };

    const updateTimeZone = (timeZone) => {
        setInterval(() => {
            return getTimeZone(timeZone);
        }, 30 * 1000);
    };

    return (
        <GridSection>
            {
                
                content.map((item) => {
                    return (
                        <GridItem key={item.id}>
                            <OfficeCountry>{item.country}</OfficeCountry>
                            <Separator></Separator>
                            <TimeZone>{ getTimeZone(item.timezone) }</TimeZone>
                        </GridItem>
                    );
                })
                
            }
        </GridSection>
    );
};

export default Grid;