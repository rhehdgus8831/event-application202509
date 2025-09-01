import {createBrowserRouter} from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>Home Page</h1>,
        errorElement: <ErrorPage/>
    }
]);

export default router;