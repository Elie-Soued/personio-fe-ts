import { MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import { useContext } from "react";
import { EmployeeContext } from "../../EmployeeContext";

export default function Development() {
  const { employee, updateEmployee } = useContext(EmployeeContext);

  const updateModel = (
    e: React.ChangeEvent<HTMLInputElement>,
    property: string
  ) => {
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
        height: "80%",
      }}
    >
      <MDBRow>
        <MDBCol md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="Training"
            size="lg"
            id="form1"
            type="text"
            value={employee.development.training}
            onChange={(e) => {
              updateModel(e, "training");
            }}
          />
        </MDBCol>
      </MDBRow>
    </div>
  );
}
