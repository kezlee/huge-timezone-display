import React, { useEffect, useState, useCallback } from 'react';
import { GridSection, GridItem, OfficeCountry, Separator, TimeZone } from './styles';

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
    },
    {
        id: 13,
        country: 'Vietnam.',
        timezone: 'Asia/Ho_Chi_Minh',
    }
];

const Grid = () => {

    const [content, setContent] = useState([]);

    const getTimeZone = (timeZone) => {
        let now = new Date(Date.now());
        let time = now.toLocaleTimeString('en-US',{timeZone,hour12:false}).substring(0,5);

        console.log(now.toLocaleTimeString('en-US',{timeZone, hour12: false, hour: '2-digit',
        minute:'2-digit'}));
        return time;
    };

    const updateTime = useCallback(() => {
        const allTime = CONTENT.map((item) => {
            return {
                ...item,
                time: getTimeZone(item.timezone)
            }
        })
        setContent(allTime);
    }, [])

    useEffect(() => {
        updateTime();

        const updateTimeInterval = setInterval(() => {
            updateTime();
        }, 30 * 1000);

        return (() => {
            clearInterval(updateTimeInterval);
        });

    }, [updateTime]);

    return (
        <GridSection>
            {
                
                content.map((item) => {
                    return (
                        <GridItem key={item.id}>
                            <OfficeCountry>{item.country}</OfficeCountry>
                            <Separator></Separator>
                            <TimeZone>{ item.time}</TimeZone>
                        </GridItem>
                    );
                })
                
            }
        </GridSection>
    );
};

export default Grid;