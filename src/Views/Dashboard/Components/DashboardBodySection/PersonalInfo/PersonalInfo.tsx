import PersonalInfoNavBar from './PersonalInfoNavBar';
import PersonalInfoDisplay from './PersonalInfoDisplay';

export default function PersonalInfo() {
    return (
        <div className="row g-0" style={{ border: '4px dashed black', height: '100%' }}>
            <div className={"d-flex align-items-center col-md-2 col-12 ${'h-md-25 h-100'}"}>
                <PersonalInfoNavBar />
            </div>
            <div
                className={"d-flex align-items-center col-md-10 col-12 ${'h-md-75 h-100'}"}
                style={{ border: '4px dashed blue' }}
            >
                <PersonalInfoDisplay />
            </div>
        </div>
    );
}
