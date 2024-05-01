import { useState } from 'react';
import PersonalInfoNavBar from './PersonalInfoNavBar';
import PersonalInfoDisplay from './PersonalInfoDisplay';
import { EmployeeProfileType } from '../../../../../types';
import { EmployeeContext } from '../../../../../constants';

export default function PersonalInfoContainer(userData: EmployeeProfileType) {
    const [employee, setEmployee] = useState<EmployeeProfileType>(userData);

    const updateEmployee = (employeeUpdated: EmployeeProfileType) => {
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
