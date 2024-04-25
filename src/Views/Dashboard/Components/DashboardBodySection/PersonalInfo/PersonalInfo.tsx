import { useState } from 'react';
import PersonalInfoNavBar from './PersonalInfoNavBar';
import PersonalInfoDisplay from './PersonalInfoDisplay';
import { EmployeeProfileInterface, EmployeeContext } from '../../../../../Constants/Constants';

interface Props {
    userData: EmployeeProfileInterface;
}

export default function PersonalInfo({ userData }: Props) {
    const [employee, setEmployee] = useState<EmployeeProfileInterface>(userData);

    const updateEmployee = (employeeUpdated: EmployeeProfileInterface) => {
        setEmployee(employeeUpdated);
    };
    return (
        <div className="row g-0" style={{ height: 'auto' }}>
            <div className={"d-flex align-items-center col-md-3 col-12 ${h-md-100 h-25'}"}>
                <PersonalInfoNavBar />
            </div>
            <div className={"d-flex align-items-center col-md-9 col-12 ${'h-md-100 h-75'}"}>
                <EmployeeContext.Provider value={{ employee, updateEmployee }}>
                    <PersonalInfoDisplay />
                </EmployeeContext.Provider>
            </div>
        </div>
    );
}
