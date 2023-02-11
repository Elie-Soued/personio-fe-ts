import React from 'react';
import { useContext, useEffect, useState } from 'react';

import { EmployeeContext } from '../../EmployeeContext';

interface Props {
    backToLoginFn: Function;
}

export default function FooterBtns({ backToLoginFn }: Props) {
    const [progressBar, setProgressBar] = useState(0);

    const updateProgressBar = () => {
        const notEmpty = (element: string) => element !== '';
        Object.values(employee).forEach((section) => {
            if (Object.values(section).every(notEmpty)) {
                setProgressBar(progressBar + 12.5);
            }
        });
    };

    const { employee } = useContext(EmployeeContext);

    const showContext = () => {
        console.log(employee, 'employee in footer');
    };

    useEffect(() => {
        updateProgressBar();
    }, [employee]);

    return (
        <div className=' d-flex flex-column justify-content-around  pt-1 mb-5 pb-1 col-12 h-25'>
            <div className='d-flex flex-column align-items-center '>
                <h4>Profile completion</h4>

                <div className='col-10 progress m-2'>
                    <div className='progress-bar' style={{ width: `${progressBar}%` }}>
                        {progressBar}%
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-around align-items-end p-1  '>
                <button
                    className='btn btn-primary btn-block fa-lg  mb-3 active w-10'
                    type='button'
                    onClick={() => {
                        backToLoginFn();
                    }}
                >
                    Go Back to Log in
                </button>
                <button
                    className='btn btn-secondary btn-block fa-lg  mb-3  w-10'
                    type='button'
                    onClick={() => {
                        showContext();
                    }}
                >
                    Create Profile
                </button>
            </div>
        </div>
    );
}
