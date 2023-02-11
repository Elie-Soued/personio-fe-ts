import { MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import { useContext } from 'react';
import { EmployeeContext } from '../../EmployeeContext';

export default function Development() {
    const { employee, updateEmployee } = useContext(EmployeeContext);

    const updateModel = (e: any, property: string) => {
        updateEmployee({
            ...employee,
            development: {
                ...employee.development,
                [property]: e.target.value,
            },
        });
    };

    return (
        <div
            className='flex-column d-flex justify-content-between w-100'
            style={{
                height: '80%',
            }}
        >
            <MDBRow>
                <MDBCol md='10'>
                    <div className='form-outline'>
                        <textarea
                            className='form-control'
                            id='textAreaExample2'
                            rows={12}
                            cols={6}
                            value={employee.development.training}
                            onChange={(e) => {
                                updateModel(e, 'training');
                            }}
                        ></textarea>
                        <label className='form-label' htmlFor='textAreaExample2'>
                            Training
                        </label>
                    </div>
                </MDBCol>
            </MDBRow>
        </div>
    );
}
