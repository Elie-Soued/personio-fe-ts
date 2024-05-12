import { MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import { useContext } from 'react';
import { EmployeeContext } from '../../../../../constants';

export default function PayrollInformation({ readOnly }: { readOnly: boolean }) {
    const { employee, updateEmployee } = useContext(EmployeeContext);

    const updateModel = (e: React.ChangeEvent<HTMLInputElement>, property: string) => {
        updateEmployee({
            ...employee,
            payrollInformation: {
                ...employee.payrollInformation,
                [property]: e.target.value,
            },
        });
    };

    const renderEditMode = () => {
        return (
            <div
                className="flex-column d-flex justify-content-between w-100"
                style={{
                    height: '80%',
                }}
            >
                <MDBRow>
                    <MDBCol md="8">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Salary type"
                            size="lg"
                            id="form1"
                            type="text"
                            value={employee.payrollInformation.salary_type}
                            onChange={(e) => {
                                updateModel(e, 'salary_type');
                            }}
                        />
                    </MDBCol>

                    <MDBCol md="8">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Tax ID"
                            size="lg"
                            id="form2"
                            type="text"
                            value={employee.payrollInformation.tax_id}
                            onChange={(e) => {
                                updateModel(e, 'tax_id');
                            }}
                        />
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Social security number"
                            size="lg"
                            id="form4"
                            type="text"
                            value={employee.payrollInformation.social_security_number}
                            onChange={(e) => {
                                updateModel(e, 'social_security_number');
                            }}
                        />
                    </MDBCol>

                    <MDBCol md="8">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Wage tax class"
                            size="lg"
                            id="form4"
                            type="text"
                            value={employee.payrollInformation.wage_tax_class}
                            onChange={(e) => {
                                updateModel(e, 'wage_tax_class');
                            }}
                        />
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Children"
                            size="lg"
                            id="form3"
                            type="number"
                            value={employee.payrollInformation.children}
                            onChange={(e) => {
                                updateModel(e, 'children');
                            }}
                        />
                    </MDBCol>

                    <MDBCol md="8">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Child allowance"
                            size="lg"
                            id="form5"
                            type="number"
                            value={employee.payrollInformation.child_allowance}
                            onChange={(e) => {
                                updateModel(e, 'child_allowance');
                            }}
                        />
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Mariral status"
                            size="lg"
                            id="form3"
                            type="text"
                            value={employee.payrollInformation.marital_status}
                            onChange={(e) => {
                                updateModel(e, 'marital_status');
                            }}
                        />
                    </MDBCol>

                    <MDBCol md="8">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Religious denomination"
                            size="lg"
                            id="form5"
                            type="text"
                            value={employee.payrollInformation.religious_denomination}
                            onChange={(e) => {
                                updateModel(e, 'religious_denomination');
                            }}
                        />
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Type of health insurrance"
                            size="lg"
                            id="form3"
                            type="text"
                            value={employee.payrollInformation.type_of_health_insurance}
                            onChange={(e) => {
                                updateModel(e, 'type_of_health_insurance');
                            }}
                        />
                    </MDBCol>

                    <MDBCol md="8">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Name of health insurrance"
                            size="lg"
                            id="form5"
                            type="text"
                            value={employee.payrollInformation.name_of_health_insurance}
                            onChange={(e) => {
                                updateModel(e, 'name_of_health_insurance');
                            }}
                        />
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Main or secondary occupation"
                            size="lg"
                            id="form3"
                            type="text"
                            value={employee.payrollInformation.main_or_secondary_occupation}
                            onChange={(e) => {
                                updateModel(e, 'main_or_secondary_occupation');
                            }}
                        />
                    </MDBCol>

                    <MDBCol md="8">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Wage tax allowance"
                            size="lg"
                            id="form5"
                            type="text"
                            value={employee.payrollInformation.wage_tax_allowance}
                            onChange={(e) => {
                                updateModel(e, 'wage_tax_allowance');
                            }}
                        />
                    </MDBCol>
                </MDBRow>
            </div>
        );
    };

    const renderReadMode = () => {
        return (
            <div
                className="flex-column d-flex justify-content-between w-100"
                style={{
                    height: '80%',
                }}
            >
                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b> Salary Type</b>
                            </label>
                            <span>{employee.payrollInformation.salary_type}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b> Tax ID</b>
                            </label>
                            <span>{employee.payrollInformation.tax_id}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b> Social Security Number</b>
                            </label>
                            <span>{employee.payrollInformation.social_security_number}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b> Wage Tax Class</b>
                            </label>
                            <span>{employee.payrollInformation.wage_tax_class}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b> Children</b>
                            </label>
                            <span>{employee.payrollInformation.children}</span>
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b> Child Allowance</b>
                            </label>
                            <span>{employee.payrollInformation.child_allowance}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b> Marital Status</b>
                            </label>
                            <span>{employee.payrollInformation.marital_status}</span>
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b> Religious Denomination</b>
                            </label>
                            <span>{employee.payrollInformation.religious_denomination}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b> Type of Health Insurance</b>
                            </label>
                            <span>{employee.payrollInformation.type_of_health_insurance}</span>
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b> Name of Health Insurance</b>
                            </label>
                            <span>{employee.payrollInformation.name_of_health_insurance}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b> Main or Secondary Occupation</b>
                            </label>
                            <span>{employee.payrollInformation.main_or_secondary_occupation}</span>
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b> Wage Tax Allowance</b>
                            </label>
                            <span>{employee.payrollInformation.wage_tax_allowance}</span>
                        </div>
                    </MDBCol>
                </MDBRow>
            </div>
        );
    };

    const renderComponent = () => {
        if (readOnly) return renderReadMode();
        return renderEditMode();
    };

    return renderComponent();
}
