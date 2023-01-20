import { MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";

export const EmergencyContact = () => (
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
        />
      </MDBCol>
    </MDBRow>
  </div>
);
