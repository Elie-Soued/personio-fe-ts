import React from 'react';

export default function DashboardNavigation() {
    const sections = ['Personal Info', 'Salary', 'Documents', 'Absence', 'Onboarding', 'Notes'];

    const changeSection = (section: string) => {
        const event = new CustomEvent('changeSection', { detail: section });
        window.dispatchEvent(event);
    };

    return (
        <p className="d-flex flex-row  col-12">
            {sections.map((section) => (
                <button
                    className="btn btn-light"
                    style={{ backgroundColor: '#eee', border: '1px solid #eee' }}
                    onClick={() => {
                        changeSection(section);
                    }}
                >
                    <span className="m-2">{section}</span>
                </button>
            ))}
        </p>
    );
}
