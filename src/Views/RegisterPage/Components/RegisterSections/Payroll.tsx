import { MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import { useContext } from 'react';
import { EmployeeContext } from '../../../../Constants';

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

    return (
        <div
            className="flex-column d-flex justify-content-between w-100"
            style={{
                height: '80%',
            }}
        >
            <MDBRow>
                <MDBCol md="6">
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Salary type"
                        size="lg"
                        id="form1"
                        type="text"
                        value={employee.payrollInformation.salary_type}
                        disabled={readOnly}
                        onChange={(e) => {
                            updateModel(e, 'salary_type');
                        }}
                    />
                </MDBCol>

                <MDBCol md="6">
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Tax ID"
                        size="lg"
                        id="form2"
                        type="text"
                        value={employee.payrollInformation.tax_id}
                        disabled={readOnly}
                        onChange={(e) => {
                            updateModel(e, 'tax_id');
                        }}
                    />
                </MDBCol>
            </MDBRow>

            <MDBRow>
                <MDBCol md="6">
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Social security number"
                        size="lg"
                        id="form4"
                        type="text"
                        value={employee.payrollInformation.social_security_number}
                        disabled={readOnly}
                        onChange={(e) => {
                            updateModel(e, 'social_security_number');
                        }}
                    />
                </MDBCol>

                <MDBCol md="6">
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Wage tax class"
                        size="lg"
                        id="form4"
                        type="text"
                        value={employee.payrollInformation.wage_tax_class}
                        disabled={readOnly}
                        onChange={(e) => {
                            updateModel(e, 'wage_tax_class');
                        }}
                    />
                </MDBCol>
            </MDBRow>

            <MDBRow>
                <MDBCol md="6">
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Children"
                        size="lg"
                        id="form3"
                        type="number"
                        value={employee.payrollInformation.children}
                        disabled={readOnly}
                        onChange={(e) => {
                            updateModel(e, 'children');
                        }}
                    />
                </MDBCol>

                <MDBCol md="6">
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Child allowance"
                        size="lg"
                        id="form5"
                        type="number"
                        value={employee.payrollInformation.child_allowance}
                        disabled={readOnly}
                        onChange={(e) => {
                            updateModel(e, 'child_allowance');
                        }}
                    />
                </MDBCol>
            </MDBRow>

            <MDBRow>
                <MDBCol md="6">
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Mariral status"
                        size="lg"
                        id="form3"
                        type="text"
                        value={employee.payrollInformation.marital_status}
                        disabled={readOnly}
                        onChange={(e) => {
                            updateModel(e, 'marital_status');
                        }}
                    />
                </MDBCol>

                <MDBCol md="6">
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Religious denomination"
                        size="lg"
                        id="form5"
                        type="text"
                        value={employee.payrollInformation.religious_denomination}
                        disabled={readOnly}
                        onChange={(e) => {
                            updateModel(e, 'religious_denomination');
                        }}
                    />
                </MDBCol>
            </MDBRow>

            <MDBRow>
                <MDBCol md="6">
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Type of health insurrance"
                        size="lg"
                        id="form3"
                        type="text"
                        value={employee.payrollInformation.type_of_health_insurance}
                        disabled={readOnly}
                        onChange={(e) => {
                            updateModel(e, 'type_of_health_insurance');
                        }}
                    />
                </MDBCol>

                <MDBCol md="6">
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Name of health insurrance"
                        size="lg"
                        id="form5"
                        type="text"
                        value={employee.payrollInformation.name_of_health_insurance}
                        disabled={readOnly}
                        onChange={(e) => {
                            updateModel(e, 'name_of_health_insurance');
                        }}
                    />
                </MDBCol>
            </MDBRow>

            <MDBRow>
                <MDBCol md="6">
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Main or secondary occupation"
                        size="lg"
                        id="form3"
                        type="text"
                        value={employee.payrollInformation.main_or_secondary_occupation}
                        disabled={readOnly}
                        onChange={(e) => {
                            updateModel(e, 'main_or_secondary_occupation');
                        }}
                    />
                </MDBCol>

                <MDBCol md="6">
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Wage tax allowance"
                        size="lg"
                        id="form5"
                        type="text"
                        value={employee.payrollInformation.wage_tax_allowance}
                        disabled={readOnly}
                        onChange={(e) => {
                            updateModel(e, 'wage_tax_allowance');
                        }}
                    />
                </MDBCol>
            </MDBRow>
        </div>
    );
}
