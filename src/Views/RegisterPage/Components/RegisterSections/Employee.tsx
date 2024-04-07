import { MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import { useContext } from 'react';
import { EmployeeContext } from '../../EmployeeContext';

export default function EmployeeEquipment() {
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
                        onChange={(e) => {
                            updateModel(e, 'cell_phone');
                        }}
                    />
                </MDBCol>
            </MDBRow>
        </div>
    );
}
