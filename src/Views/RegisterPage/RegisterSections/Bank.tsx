import { MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";

export const BankDetails = () => (
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
          label="Holder of bank account"
          size="lg"
          id="form1"
          type="text"
        />
      </MDBCol>
      <MDBCol md="8">
        <MDBInput
          wrapperClass="mb-4"
          label="IBAN"
          size="lg"
          id="form1"
          type="text"
        />
      </MDBCol>
      <MDBCol md="8">
        <MDBInput
          wrapperClass="mb-4"
          label="BIC"
          size="lg"
          id="form1"
          type="text"
        />
      </MDBCol>
    </MDBRow>
  </div>
);
