import {createBrowserRouter} from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage.jsx';
import HomePage from '../pages/HomePage.jsx';
import EventPage from '../pages/EventPage.jsx';
import RootLayout from '../layouts/RootLayout.jsx';
import EventDetailPage from '../pages/EventDetailPage.jsx';
import EventLayout from '../layouts/EventLayout.jsx';
import { eventsListLoader, eventDetailLoader } from '../loader/events-loader.js';
import NewEventPage from '../pages/newEventPage.jsx';
import {saveAction as manipulateAction, deleteAction } from '../loader/events-actions.js';
import EditPage from '../pages/EditPage.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: 'events',
                element: <EventLayout/>,
                children: [
                    {
                        index: true,
                        element: <EventPage/>,
                        // loader 함수는 언제 실행되냐? 페이지가 라우팅될 때 트리거 됨
                        loader: eventsListLoader
                    },
                    {
                        path: 'new',
                        element: <NewEventPage/>,
                        // action 함수는 CUD를 트리거
                        action: manipulateAction
                    },
                    {
                        path: ':eventId',
                        element: <EventDetailPage/>,
                        loader : eventDetailLoader,
                        action : deleteAction
                    },
                    {
                        path: ':eventId/edit',
                        element: <EditPage/>,
                        loader : eventDetailLoader,
                        action: manipulateAction
                    },
                ]
            },
        ]
    },
]);

export default router;