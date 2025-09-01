import React, {useEffect, useState} from 'react';
import MainNavigation from '../components/MainNavigation.jsx';

const EventPage = () => {

    const [eventList, setEventList] = useState([]);

    // API CALL
    const fetchEvents = async () => {
        const resopnse = await fetch('http://localhost:9000/api/events');
        const data = await resopnse.json();
        console.log(data);

        setEventList(data);
    };



    useEffect(() => {
        fetchEvents();
    },[])


    return (
        <>
         <h1>Event Page</h1>
            <ul>
                {eventList.map(event => <li key={event.id}>{event.title}</li>)}
            </ul>
        </>
    );
};

export default EventPage;