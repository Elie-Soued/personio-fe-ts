import React, { useState } from 'react';
import { sections } from '../../../../../constants';

export default function PersonalInfoNavBar() {
    const [selectedSection, setSelectedSection] = useState(sections[0]);

    const changePersonalInfoSection = (section: string) => {
        setSelectedSection(section);
        const event = new CustomEvent('changePersonalInfoSection', { detail: section });
        window.dispatchEvent(event);
    };

    return (
        <ul className=" w-100 h-100  d-flex  flex-md-column flex-wrap mb-2 p-2" style={{ listStyle: 'none' }}>
            {sections.map((section) => (
                <div
                    style={{
                        background: selectedSection === section ? ' #d4f1ff' : 'none',
                        borderRadius: '4px',
                    }}
                >
                    <p
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                            changePersonalInfoSection(section);
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
        </ul>
    );
}
