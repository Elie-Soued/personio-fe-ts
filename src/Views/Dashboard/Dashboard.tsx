import React, { useEffect, useState } from 'react';
import { doRequest, URL } from '../../Utils/ServiceUtils';
import Navbar from './Components/NavBar';
import Header from './Components/Header';

export default function Dashboard() {
    let [userData, setUserData] = useState({});

    const getUserData = async () => {
        const response: any = await doRequest('get', URL);
        setUserData(response.data);
    };

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <div
            className="row g-0"
            style={{
                backgroundColor: '#eee',
            }}
        >
            <div className="d-flex align-items-center col-md-2 p-2 ${'h-md-100 h-25'}">
                <Navbar />
            </div>
            <div
                className="d-flex flex-column align-items-center col-md-10 col-12  "
                style={{ border: '1px solid black', height: '95vh' }}
            >
                <div className="col-12 h-25">
                    <Header userData={userData} />
                </div>
                <div className="col-12 h-75">how are you?</div>
            </div>
        </div>
    );
}
