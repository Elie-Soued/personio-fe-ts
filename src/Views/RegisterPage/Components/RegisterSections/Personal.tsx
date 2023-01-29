import { MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import { useContext } from "react";
import { EmployeeContext } from "../../EmployeeContext";

export default function PersonalData() {
  const { employee, updateEmployee } = useContext(EmployeeContext);

  const updateModel = (
    e: React.ChangeEvent<HTMLInputElement>,
    property: string
  ) => {
    updateEmployee({
      ...employee,
      personalData: {
        ...employee.personalData,
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
        <MDBCol md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="Street and house number"
            size="lg"
            id="form1"
            type="text"
            value={employee.personalData.streetAndHouseNumber}
            onChange={(e) => {
              updateModel(e, "streetAndHouseNumber");
            }}
          />
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="Postal code"
            size="lg"
            id="form4"
            type="text"
            value={employee.personalData.postalCode}
            onChange={(e) => {
              updateModel(e, "postalCode");
            }}
          />
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="City"
            size="lg"
            id="form5"
            type="text"
            value={employee.personalData.city}
            onChange={(e) => {
              updateModel(e, "city");
            }}
          />
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="Private email"
            size="lg"
            id="form5"
            type="email"
            value={employee.personalData.privateEmail}
            onChange={(e) => {
              updateModel(e, "privateEmail");
            }}
          />
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="Private Phone"
            size="lg"
            id="form5"
            type="text"
            value={employee.personalData.privatePhone}
            onChange={(e) => {
              updateModel(e, "privatePhone");
            }}
          />
        </MDBCol>
      </MDBRow>
    </div>
  );
}
