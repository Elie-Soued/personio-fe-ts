import { useEffect, useState, useContext } from 'react';
import { EmployeeContext } from '../../../../../constants';
import Section from '../../../../RegisterPage/Components/RegisterSections/PersonalInfo';

export default function PersonalInfoDisplay() {
    let [section, setSection] = useState('Public Profile');

    const { employee } = useContext(EmployeeContext);

    function renderActiveSection(activeSection: string) {
        return <Section name={activeSection} showTitle={false} context={employee} readOnly={true} />;
    }

    useEffect(() => {
        const handleSectionChange = (event: Event) => {
            const customEvent = event as CustomEvent;
            setSection(customEvent.detail);
        };

        window.addEventListener('changePersonalInfoSection', handleSectionChange);

        return () => {
            window.removeEventListener('changePersonalInfoSection', handleSectionChange);
        };
    }, []);

    return (
        <div
            className="w-100 h-auto"
            style={{
                height: 'auto',
                border: '1px solid white',
            }}
        >
            {renderActiveSection(section)}
        </div>
    );
}
