import { MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import { useContext } from "react";
import { EmployeeContext } from "../EmployeeContext";

export default function EmergencyContact() {
  const { employee, updateEmployee } = useContext(EmployeeContext);

  const updateModel = (
    e: React.ChangeEvent<HTMLInputElement>,
    property: string
  ) => {
    updateEmployee({
      ...employee,
      emergencyContact: {
        ...employee.emergencyContact,
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
      <MDBRow style={{}}>
        <MDBCol md="8">
          <MDBInput
            wrapperClass="mb-4"
            label="Emergency Contact"
            size="lg"
            id="form1"
            type="text"
            value={employee.emergencyContact.emergencyContact}
            onChange={(e) => {
              updateModel(e, "emergencyContact");
            }}
          />
        </MDBCol>
      </MDBRow>
    </div>
  );
}
