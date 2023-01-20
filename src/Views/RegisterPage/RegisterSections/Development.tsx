import { MDBRow, MDBCol, MDBInput, MDBRadio } from "mdb-react-ui-kit";

export const Development = () => (
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
          label="Training"
          size="lg"
          id="form1"
          type="text"
        />
      </MDBCol>
    </MDBRow>
  </div>
);
