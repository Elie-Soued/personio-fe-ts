import React, { useState } from 'react';

export default function DashboardNavigation() {
    const sections = ['Personal Info', 'Salary', 'Documents', 'Absence', 'Onboarding', 'Notes'];

    const [selectedSection, setSelectedSection] = useState('Personal Info');

    const changeSection = (section: string) => {
        setSelectedSection(section);
        const event = new CustomEvent('changeSection', { detail: section });
        window.dispatchEvent(event);
    };

    return (
        <div className="d-flex flex-row  col-12 flex-wrap p-2 m-2 h-auto ">
            {sections.map((section) => (
                <div
                    style={{
                        borderBottom: selectedSection === section ? '2px solid #007bff' : 'none',
                    }}
                >
                    <p
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                            changeSection(section);
                        }}
                    >
                        <span
                            style={{
                                fontWeight: selectedSection === section ? 'bold' : 'normal',
                            }}
                            className="m-2"
                        >
                            {section}
                        </span>
                    </p>
                </div>
            ))}
        </div>
    );
}
