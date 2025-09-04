import LoginForm from '../components/auth/LoginForm.jsx';
import Main from '../components/auth/Main.jsx';
import {useLoaderData} from 'react-router-dom';

const WelcomePage = () => {

    const userData = useLoaderData();

    return (
        <>
            {userData ? <Main userData={userData} /> : <LoginForm />}
        </>
    );
};

export default WelcomePage;