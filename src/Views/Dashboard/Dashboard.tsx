import React, { useEffect, useState } from 'react';
import { doRequest, URL } from '../../Utils/ServiceUtils';
import DashboardNavbar from './Components/DashboardNavBar';
import DashboardHeader from './Components/DashboardHeader';
import DashboardBody from './Components/DashboardBody';

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
                <DashboardNavbar />
            </div>
            <div
                className="d-flex flex-column align-items-center col-md-10 col-12  "
                style={{ border: '1px solid black', height: '95vh' }}
            >
                <div className="col-12 h-25">
                    <DashboardHeader userData={userData} />
                </div>
                <div className="col-12 h-75">
                    <DashboardBody />
                </div>
            </div>
        </div>
    );
}
