import React, { useEffect, useState } from 'react';
import PersonalInfo from './DashboardBodySection/PersonalInfo/PersonalInfo';
import Salary from './DashboardBodySection/Salary/Salary';
import Documents from './DashboardBodySection/Documents/Documents';
import Absence from './DashboardBodySection/Absence/Absence';
import Onboarding from './DashboardBodySection/Onboarding/Onboarding';
import Notes from './DashboardBodySection/Notes/Notes';
import { EmployeeProfileInterface } from '../../../Constants/Constants';

interface Props {
    userData: EmployeeProfileInterface;
}

export default function DashboardBody({ userData }: Props) {
    let [section, setSection] = useState('Personal Info');

    useEffect(() => {
        const handleSectionChange = (event: Event) => {
            const customEvent = event as CustomEvent;
            setSection(customEvent.detail);
        };

        window.addEventListener('changeSection', handleSectionChange);

        return () => {
            window.removeEventListener('changeSection', handleSectionChange);
        };
    }, []);

    const renderSection = (section: string) => {
        switch (section) {
            case 'Personal Info':
                return <PersonalInfo userData={userData} />;

            case 'Salary':
                return <Salary />;

            case 'Documents':
                return <Documents />;

            case 'Notes':
                return <Notes />;

            case 'Absence':
                return <Absence />;

            case 'Onboarding':
                return <Onboarding />;

            default:
                return undefined;
        }
    };

    return (
        <div
            style={{
                height: '100%',
            }}
        >
            {renderSection(section)}
        </div>
    );
}
