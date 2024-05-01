import { MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import { useContext } from 'react';
import { EmployeeContext } from '../../../../../constants';

export default function EmployeeEquipment({ readOnly }: { readOnly: boolean }) {
    const { employee, updateEmployee } = useContext(EmployeeContext);

    const updateModel = (e: React.ChangeEvent<HTMLInputElement>, property: string) => {
        updateEmployee({
            ...employee,
            employeeEquipment: {
                ...employee.employeeEquipment,
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
                <MDBCol md="8">
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Equipment Notebook"
                        size="lg"
                        id="form1"
                        type="text"
                        value={employee.employeeEquipment.notebook}
                        disabled={readOnly}
                        onChange={(e) => {
                            updateModel(e, 'notebook');
                        }}
                    />
                </MDBCol>
                <MDBCol md="8">
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Equipment Cellphone (optional)"
                        size="lg"
                        id="form1"
                        type="text"
                        value={employee.employeeEquipment.cell_phone}
                        disabled={readOnly}
                        onChange={(e) => {
                            updateModel(e, 'cell_phone');
                        }}
                    />
                </MDBCol>
            </MDBRow>
        </div>
    );
}
