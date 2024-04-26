import { MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import { useContext, ChangeEvent } from 'react';
import { EmployeeContext } from '../../../../constants';

export default function Development({ readOnly }: { readOnly: boolean }) {
    const { employee, updateEmployee } = useContext(EmployeeContext);

    const updateModel = (e: ChangeEvent<HTMLTextAreaElement>, property: string) => {
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
            className="flex-column d-flex justify-content-between w-100"
            style={{
                height: '80%',
            }}
        >
            <MDBRow>
                <MDBCol md="10">
                    <div className="form-outline">
                        <textarea
                            className="form-control"
                            id="textAreaExample2"
                            rows={12}
                            cols={6}
                            value={employee.development.training}
                            disabled={readOnly}
                            onChange={(e) => {
                                updateModel(e, 'training');
                            }}
                        ></textarea>
                        <label className="form-label" htmlFor="textAreaExample2">
                            Training
                        </label>
                    </div>
                </MDBCol>
            </MDBRow>
        </div>
    );
}
