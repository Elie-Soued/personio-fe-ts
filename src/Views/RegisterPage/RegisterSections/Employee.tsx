import { MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";

export const EmployeeEquipment = () => (
  <div
    className="flex-column d-flex justify-content-between w-100"
    style={{
      height: "80%",
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
        />
      </MDBCol>
      <MDBCol md="8">
        <MDBInput
          wrapperClass="mb-4"
          label="Equipment Cellphone (optional)"
          size="lg"
          id="form1"
          type="text"
        />
      </MDBCol>
    </MDBRow>
  </div>
);
