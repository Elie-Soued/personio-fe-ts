import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Dashboard() {
    let { username } = useParams();
    const navigate = useNavigate();
    const backToRegister = () => {
        navigate('/register');
    };

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
