import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { doRequest, URL } from '../../Utils/ServiceUtils';

export default function Dashboard() {
    let { username } = useParams();
    const navigate = useNavigate();
    const backToRegister = () => {
        navigate('/register');
    };

    const getUserData = async () => {
        const response: any = await doRequest('get', URL);
        console.log(response);
    };

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <div>
            <h1>Hello {username} this is the dashboard</h1>
            <button
                onClick={() => {
                    backToRegister();
                }}
            >
                go back to register
            </button>
        </div>
    );
}
