import React, { useEffect, useState } from 'react';
import { doRequest } from '../../Utils/ServiceUtils';
import DashboardNavbar from './Components/DashboardNavBar';
import DashboardHeader from './Components/DashboardHeader';
import DashboardBody from './Components/DashboardBody';
import { useNavigate } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { EmployeeProfileType } from '../../types';

export default function Dashboard() {
    let [userData, setUserData] = useState({});
    const navigate = useNavigate();

    const URL = process.env.REACT_APP_URL;

    const getUserData = async () => {
        const response: AxiosResponse | Error = await doRequest('get', URL);
        setUserData(response?.data);
    };

    const navigateToLandingPage = () => {
        if (!localStorage.getItem('token')) {
            navigate('/');
        }
    };

    useEffect(() => {
        getUserData();
        navigateToLandingPage();
    }, []);

    console.log('userData :>> ', userData);

    return (
        <div className="row g-0">
            <div className={`d-flex align-items-center col-md-2 p-2 `}>
                <DashboardNavbar />
            </div>
            <div className="d-flex flex-column align-items-center col-md-10 col-12" style={{ height: '95vh' }}>
                {Object.values(userData).length ? (
                    <>
                        <div className="col-12 h-25">
                            <DashboardHeader {...(userData as EmployeeProfileType)} />
                        </div>
                        <div className="col-12 h-75">
                            <DashboardBody {...(userData as EmployeeProfileType)} />
                        </div>
                    </>
                ) : (
                    <div className="spinner-border text-primary" role="status"></div>
                )}
            </div>
        </div>
    );
}
