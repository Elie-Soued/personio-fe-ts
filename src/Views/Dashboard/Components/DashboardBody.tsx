import React, { useEffect, useState } from 'react';
import PersonalInfo from './DashboardBodySection/PersonalInfo';
import Salary from './DashboardBodySection/Salary';
import Documents from './DashboardBodySection/Documents';
import Absence from './DashboardBodySection/Absence';
import Onboarding from './DashboardBodySection/Onboarding';
import Notes from './DashboardBodySection/Notes';

export default function DashboardBody() {
    let [section, setSection] = useState('Personal Info');

    useEffect(() => {
        const handleSectionChange = (event: any) => {
            setSection(event.detail);
        };

        window.addEventListener('changeSection', handleSectionChange);

        return () => {
            window.removeEventListener('changeSection', handleSectionChange);
        };
    }, []);

    const renderSection = (section: string) => {
        switch (section) {
            case 'Personal Info':
                return <PersonalInfo />;

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

    return <div>{renderSection(section)}</div>;
}
