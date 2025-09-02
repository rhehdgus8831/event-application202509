import React, {useEffect, useState} from 'react';
import {Link, useLoaderData} from 'react-router-dom';
import EventList from '../components/EventList.jsx';

const EventPage = () => {

    // loader가 리턴한 데이터 가져오기
    // const {hasNext, eventList} = useLoaderData();

    const [eventList, setEventList] = useState([]);

    useEffect(() => {

        (async ()=>{
            const response = await fetch('http://localhost:9000/api/events?page=1');
            const {hasNext, eventList: events} = await response.json();
            setEventList(events);
        })();

    },[])

    return (
            <EventList eventList={eventList}/>
    );
};

export default EventPage;