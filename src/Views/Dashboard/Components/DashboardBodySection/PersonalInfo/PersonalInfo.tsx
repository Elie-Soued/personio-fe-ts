import PersonalInfoNavBar from './PersonalInfoNavBar';
import PersonalInfoDisplay from './PersonalInfoDisplay';
import { IEmployeeProfile } from '../../../../RegisterPage/Interface/IEmployeeProfile';

interface Props {
    userData: IEmployeeProfile;
}

export default function PersonalInfo({ userData }: Props) {
    return (
        <div className="row g-0" style={{ border: '4px dashed black', height: '100%' }}>
            <div className={"d-flex align-items-center col-md-3 col-12 ${h-md-100 h-25'}"}>
                <PersonalInfoNavBar />
            </div>
            <div
                className={"d-flex align-items-center col-md-9 col-12 ${'h-md-100 h-75'}"}
                style={{ border: '4px dashed blue' }}
            >
                <PersonalInfoDisplay userData={userData} />
            </div>
        </div>
    );
}
