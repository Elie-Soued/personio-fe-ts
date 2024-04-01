import React, { useEffect, useState } from 'react';

export default function PersonalInfoDisplay() {
    let [section, setSection] = useState('Public Profile');

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

    const renderSection = (section: string) => {
        return section;
    };

    return (
        <div
            style={{
                height: '100%',
            }}
        >
            <h1> {renderSection(section)}</h1>
        </div>
    );
}
