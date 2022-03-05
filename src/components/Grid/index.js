import React, { useState } from 'react';
import { GridSection, GridItem, OfficeCountry, Separator, TimeZone } from './styles';

const Grid = () => {
    const content = [
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

    const getTimeZone = (timeZone) => {
        let now = new Date(Date.now());
        let month= now.toLocaleDateString('en-US',{timeZone,month:'long'}).substring(0,3);
        let localDateString =  now.toLocaleDateString('en-US',{timeZone});

        let date = new Date(localDateString).getDate();
        let year = new Date(localDateString).getFullYear();
        let customTimeString = date+ ' ' + month + ','+ year;

        let time = now.toLocaleTimeString('en-US',{timeZone,hour12:false}).substring(0,5);
        return time;

    }
    return (
        <GridSection>
            {
                content.map((item) => {
                    return (
                        <GridItem key={item.id}>
                            <OfficeCountry>{item.country}</OfficeCountry>
                            <Separator></Separator>
                            <TimeZone>{getTimeZone(item.timezone)}</TimeZone>
                        </GridItem>
                    );
                })
            }
        </GridSection>
    );
};

export default Grid;