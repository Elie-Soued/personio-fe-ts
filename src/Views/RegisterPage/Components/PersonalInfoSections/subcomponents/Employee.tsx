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
                                <b>Equipment Notebook</b>
                            </label>
                            <span>{employee.employeeEquipment.notebook}</span>
                        </div>
                    </MDBCol>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b>Equipment Cellphone (optional)</b>
                            </label>
                            <span>{employee.employeeEquipment.cell_phone}</span>
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
