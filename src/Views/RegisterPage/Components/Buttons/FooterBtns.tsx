import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmployeeContext } from '../../EmployeeContext';
import { doRequest, URLRegister } from '../../../../Utils/ServiceUtils';
import { faUserPlus, faHandPointLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AxiosResponse } from 'axios';
import SuccessModal from '../Modal';

interface Props {
    backToLoginFn: Function;
    clearContext: Function;
}

export default function FooterBtns({ backToLoginFn, clearContext }: Props) {
    const [progressBar, setProgressBar] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const { employee } = useContext(EmployeeContext);
    const navigate = useNavigate();

    const goToDashBoard = () => {
        const { user_name } = employee.public;
        if (localStorage.getItem('token')) localStorage.removeItem('token');
        navigate(`/dashboard/${user_name}`);
    };

    const generatePassword = () => {
        const min = 10000;
        const max = 99999;
        const password = Math.floor(Math.random() * (max - min + 1)) + min;
        return password.toString();
    };

    const register = async () => {
        employee.public.user_name = employee.public.first_name + employee.public.last_name;
        employee.public.password = generatePassword();

        try {
            const response: AxiosResponse | Error = await doRequest('post', URLRegister, employee);
            if (response) {
                setShowModal(true);
            }
        } catch (e) {
            console.log(e);
        }
    };

    const calculateProgressBar = () => {
        const notEmpty = (element: string) => element !== '';

        let progress = 0;
        Object.values(employee).forEach((section) => {
            if (Object.values(section).every(notEmpty)) {
                progress += 12.5;
            }
        });

        setProgressBar(progress);
    };

    useEffect(() => {
        calculateProgressBar();
    }, [employee]);

    const showContext = () => {
        console.log(employee, 'employee in footer');
    };

    return (
        <div className=" d-flex flex-column justify-content-around  pt-1 mb-5 pb-1 col-12 h-25">
            <SuccessModal
                show={showModal}
                handleClose={() => {
                    setShowModal(false);
                    clearContext();
                }}
                navigateDashboard={goToDashBoard}
            ></SuccessModal>
            <div className="d-flex flex-column align-items-center ">
                <h4>Profile completion</h4>

                <div className="col-10 progress m-2">
                    <div className="progress-bar" style={{ width: `${progressBar}%` }}>
                        {progressBar}%
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-around align-items-end p-1  ">
                <div className="d-flex flex-column">
                    <button
                        className="btn btn-primary btn-block fa-lg  mb-3 active w-10"
                        type="button"
                        onClick={() => {
                            backToLoginFn();
                        }}
                    >
                        <FontAwesomeIcon icon={faHandPointLeft} size="lg" />
                    </button>
                    <span>Back to Login</span>
                </div>
                <div className="d-flex flex-column">
                    <button
                        className={`btn btn-secondary btn-block fa-lg  mb-3  w-10 `}
                        type="button"
                        onClick={() => {
                            register();
                            showContext();
                        }}
                    >
                        <FontAwesomeIcon icon={faUserPlus} size="lg" />
                    </button>
                    <span>Create profile</span>
                </div>
            </div>
        </div>
    );
}
