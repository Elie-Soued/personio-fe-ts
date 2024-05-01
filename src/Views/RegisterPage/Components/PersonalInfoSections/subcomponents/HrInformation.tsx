import { MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import { ChangeEvent, useContext } from 'react';
import { EmployeeContext } from '../../../../../constants';

export default function HrInformation({ readOnly }: { readOnly: boolean }) {
    const { employee, updateEmployee } = useContext(EmployeeContext);

    const updateModel = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>, property: string) => {
        updateEmployee({
            ...employee,
            hrInformation: {
                ...employee.hrInformation,
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
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={employee.hrInformation.status}
                        disabled={readOnly}
                        onChange={(e) => {
                            updateModel(e, 'status');
                        }}
                        style={{
                            height: '48px',
                            fontSize: '1.2rem',
                        }}
                    >
                        <option selected>Status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </MDBCol>

                <MDBCol md="6">
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Employment Type"
                        size="lg"
                        id="form2"
                        type="text"
                        value={employee.hrInformation.employment_type}
                        disabled={readOnly}
                        onChange={(e) => {
                            updateModel(e, 'employment_type');
                        }}
                    />
                </MDBCol>
            </MDBRow>

            <MDBRow>
                <MDBCol md="6" className="mb-4">
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Occupation Type "
                        size="lg"
                        id="form4"
                        type="text"
                        value={employee.hrInformation.occupation_type}
                        disabled={readOnly}
                        onChange={(e) => {
                            updateModel(e, 'occupation_type');
                        }}
                    />
                </MDBCol>
                <MDBCol md="6">
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Supervisor"
                        size="lg"
                        id="form4"
                        type="text"
                        value={employee.hrInformation.supervisor}
                        disabled={readOnly}
                        onChange={(e) => {
                            updateModel(e, 'supervisor');
                        }}
                    />
                </MDBCol>
            </MDBRow>

            <MDBRow>
                <MDBCol md="6">
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Hire date"
                        size="lg"
                        id="form3"
                        type="date"
                        value={employee.hrInformation.hire_date}
                        disabled={readOnly}
                        onChange={(e) => {
                            updateModel(e, 'hire_date');
                        }}
                    />
                </MDBCol>

                <MDBCol md="6">
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Contract ends"
                        size="lg"
                        id="form5"
                        type="date"
                        value={employee.hrInformation.contract_end}
                        disabled={readOnly}
                        onChange={(e) => {
                            updateModel(e, 'contract_end');
                        }}
                    />
                </MDBCol>
            </MDBRow>

            <MDBRow>
                <MDBCol md="6">
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Length of probation"
                        size="lg"
                        id="form3"
                        type="text"
                        value={employee.hrInformation.length_of_probation}
                        disabled={readOnly}
                        onChange={(e) => {
                            updateModel(e, 'length_of_probation');
                        }}
                    />
                </MDBCol>

                <MDBCol md="6">
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Notice period"
                        size="lg"
                        id="form5"
                        type="text"
                        value={employee.hrInformation.notice_period}
                        disabled={readOnly}
                        onChange={(e) => {
                            updateModel(e, 'notice_period');
                        }}
                    />
                </MDBCol>
            </MDBRow>

            <MDBRow>
                <MDBCol md="6">
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Weekly Hours"
                        size="lg"
                        id="form3"
                        type="number"
                        value={employee.hrInformation.weekly_hours}
                        disabled={readOnly}
                        onChange={(e) => {
                            updateModel(e, 'weekly_hours');
                        }}
                    />
                </MDBCol>

                <MDBCol md="6">
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Cost center"
                        size="lg"
                        id="form5"
                        type="text"
                        value={employee.hrInformation.cost_center}
                        disabled={readOnly}
                        onChange={(e) => {
                            updateModel(e, 'cost_center');
                        }}
                    />
                </MDBCol>
            </MDBRow>

            <MDBRow>
                <MDBCol md="6">
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Nationality"
                        size="lg"
                        id="form3"
                        type="text"
                        value={employee.hrInformation.nationality}
                        disabled={readOnly}
                        onChange={(e) => {
                            updateModel(e, 'nationality');
                        }}
                    />
                </MDBCol>
                <MDBCol md="6">
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Residence permit valid until"
                        size="lg"
                        id="form3"
                        type="date"
                        value={employee.hrInformation.resident_permit_valid_until}
                        disabled={readOnly}
                        onChange={(e) => {
                            updateModel(e, 'resident_permit_valid_until');
                        }}
                    />
                </MDBCol>
            </MDBRow>
        </div>
    );
}
